import { z, type TypeOf } from 'zod';

/*------------------------------------*/

export const getOffersInput = z.object({
  q: z.string(),
  maxResults: z.number().optional(),
});
export type GetOfferInputType = TypeOf<typeof getOffersInput>;

/*------------------------------------*/

export interface GetOffersResponseType {
  currentPage?: number;
  pageSize?: number;
  totalResults?: number;
  currentResults?: number;
  totalPages?: number;
  availableSortingMethods?: string[];
  sortBy?: string;
  items?: Item[];
  dataLayer?: DataLayer;
  offers?: Item[];
}

export interface DataLayer {
  search_terms: string;
  offer_search_page: string;
  offer_search_page_limit: string;
  region_level2_id: string;
}

export interface Item {
  id: string;
  title: string;
  province: Category;
  city: string;
  link: string;
  category: Category;
  contractType: Category;
  subcategory: Category;
  salaryMin: Category;
  salaryMax: Category;
  salaryPeriod: Category;
  experienceMin: Category;
  workDay: Category;
  study: Category;
  published: Date;
  updated: Date;
  author: Author;
  requirementMin: string;
  bold: boolean;
  applications: string;
  subSegment: number;
  executive: boolean;
  salaryDescription: string;
  urgent: boolean;
  color: boolean;
}

export interface Author {
  id: string;
  name: string;
  uri: string;
  logoUrl: string;
  corporateResponsive: boolean;
  showCorporativeHeader: boolean;
}

export interface Category {
  id: number;
  value: string;
}

/*------------------------------------*/
