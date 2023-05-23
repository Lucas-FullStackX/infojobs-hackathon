import { TOKEN } from '../common';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const testRouter = createTRPCRouter({
  testapi: publicProcedure.query(async ({ ctx, input }) => {
    try {
      const res = await fetch(
        'https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${TOKEN}`,
          },
        },
      );

      const { items } = await res.json();

      const listOfOffers = items.map((item) => {
        const { id, title, province, experienceMin, link, teleworking } = item;

        return {
          id,
          title,
          province: province.value,
          experienceMin: experienceMin.value,
          link,
          teleworking: teleworking?.value ?? 'No especificado',
        };
      });

      return listOfOffers;
    } catch (err) {
      console.log(err);
    }
  }),
});
