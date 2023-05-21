import { TOKEN } from '../common';
import { type GetOffersResponseType } from '../schema/infoJobs.schema';

export const fetchInfoJobs = async <T>(url: string): Promise<T> => {
  const res = await fetch(`https://api.infojobs.net/api/7/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${TOKEN}`,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const response = await res.json();
  return response as T;
};

export const getOffersByCategory = async (category: string) => {
  const response = await fetchInfoJobs<GetOffersResponseType>(`offer?category=${category}`);
  return response;
};
