import { AUTH_URL } from '../common';
import { getOffersByCategory } from '../controllers/infojobs.controller';
import { getOffersInput } from '../schema/infoJobs.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const infoJobsRouter = createTRPCRouter({
  getOfferByCategory: publicProcedure
    .input(getOffersInput)
    .query(({ input }) => getOffersByCategory(input.category)),
  authUrl: publicProcedure.query(() => AUTH_URL),
});
