import { z, type TypeOf } from 'zod';

/*------------------------------------*/

export const getOffersInput = z.object({
  category: z.string(),
});
export type GetOfferInputType = TypeOf<typeof getOffersInput>;

/*------------------------------------*/

const Category = z.object({
  id: z.number(),
  value: z.string(),
});

const Author = z.object({
  id: z.string(),
  name: z.string(),
  uri: z.string(),
  logoUrl: z.string(),
  corporateResponsive: z.boolean(),
  showCorporativeHeader: z.boolean(),
});

const getOffersResponse = z.object({
  id: z.string(),
  title: z.string(),
  province: Category,
  city: z.string(),
  link: z.string(),
  category: Category,
  contractType: Category,
  subcategory: Category,
  salaryMin: Category,
  salaryMax: Category,
  salaryPeriod: Category,
  experienceMin: Category,
  workDay: Category,
  study: Category,
  published: z.date(),
  updated: z.date(),
  author: Author,
  requirementMin: z.string(),
  bold: z.boolean(),
  applications: z.string(),
  subSegment: z.number(),
  executive: z.boolean(),
  salaryDescription: z.string(),
  urgent: z.boolean(),
  color: z.boolean(),
  teleworking: Category.optional(), // optional property
});

export type GetOffersResponseType = TypeOf<typeof getOffersResponse>;

/*------------------------------------*/
