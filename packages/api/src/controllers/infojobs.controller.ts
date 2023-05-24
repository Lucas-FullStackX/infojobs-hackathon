import { TOKEN } from '../common';
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

export const getOffersByCategory = async (category: string) => {
  if (category.length === 0) {
    return {};
  }
  const response = await fetchInfoJobs<GetOffersResponseType>(
    `7/offer?q=${category}&prefix=programa&maxResults=5`,
  );
  console.log(category);
  return response;
};
