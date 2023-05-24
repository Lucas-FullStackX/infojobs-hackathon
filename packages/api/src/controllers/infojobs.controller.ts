import { TOKEN, objToParams } from '../common';
import { type GetOffersResponseType } from '../schema/infoJobs.schema';

export const fetchInfoJobs = async <T>(url: string): Promise<T> => {
  const res = await fetch(`https://api.infojobs.net/api/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${TOKEN}`,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const response = await res.json();
  return response as T;
};

export const getOffersByCategory = async (obj: { q: string; [key: string]: unknown }) => {
  if (obj.q.length === 0) {
    return {};
  }
  const params = objToParams(obj);
  const response = await fetchInfoJobs<GetOffersResponseType>(`7/offer?${params}`);
  return response;
};
