// pages/api/save-credentials.ts

import { type NextApiRequest, type NextApiResponse } from 'next';

interface SaveCredentialsBody {
  code: string;
}

interface Credentials {
  accessToken: string;
  expires_in: number;
  refreshToken: string;
  token_type: string | undefined;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Credentials | undefined>,
) {
  if (req.method === 'POST') {
    const { code } = req.body as SaveCredentialsBody;

    // Aquí puedes realizar las operaciones necesarias para guardar las credenciales en la base de datos o en otro sistema de almacenamiento

    const baseUrl = 'https://www.infojobs.net/oauth/authorize';
    const queryParams = {
      code,
      client_id: process.env.CLIENT_ID ?? '',
      client_secret: process.env.CLIENT_SECRET ?? '',
      grant_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URI ?? '',
    };
    const url = new URL(baseUrl);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const credentials: Credentials = await response.json();
    // Por simplicidad, en este ejemplo simplemente devolvemos las credenciales de ejemplo

    res.status(200).json(credentials);
  } else {
    res.status(405).end(); // Método no permitido
  }
}
