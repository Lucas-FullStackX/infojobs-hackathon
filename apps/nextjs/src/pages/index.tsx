import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { api } from '~/utils/api';
import { Icon, IconCatalog } from '~/components';

type HomeProps = {};

const Home: NextPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation(['nextjs']);
  const { data: authUrl } = api.infoJobs.authUrl.useQuery();
  return (
    <>
      <Head>
        <title>InfoJobs Hackathon</title>
        <meta name="description" content="Side Project Starter Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex h-screen w-full flex-none flex-col items-center justify-center gap-10 overflow-hidden bg-slate-900 p-10">
        <div className="relative flex h-min w-min flex-none flex-col flex-wrap items-center justify-center gap-4 overflow-hidden p-0">
          <div className="mb-2 flex flex-row items-center gap-4 text-white">
            <a
              className="text-secondary-300 text-2xl font-semibold transition hover:opacity-80"
              href="/"
            >
              InfoJobs Hackathon
            </a>
          </div>
          <div className="mb-4 w-96">
            <h1 className="text-center text-3xl font-bold text-slate-50">{t('nextjs:home.pov')}</h1>
          </div>
        </div>
        <div>
          <a href={authUrl} className="btn-primary btn w-64 rounded-full">
            Button
          </a>
        </div>
        {/* Footer options */}
        <div className="flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
          <Link
            className="hover:text-primary-200 group relative isolate flex flex-none items-center gap-x-3 rounded-lg px-2 py-0.5 font-medium text-white/30 transition-colors"
            href="https://discord.com/invite/77guznJ8mZ"
            target="_blank"
          >
            <Icon icon={IconCatalog.discord} className="h-6 w-6 text-white" isSolid />
            <span className="self-baseline text-white">Discord</span>
          </Link>
          <div className="mx-2 h-[30px] w-[0.5px] rotate-[20deg] transform bg-neutral-700"></div>
          <div className="flex items-center gap-x-1">
            <span className="text-slate-400">Made with</span>
            <Icon icon={IconCatalog.heart} className="h-4 w-4 text-red-500" isSolid />
            <span className="text-slate-400">by the</span>
            <Link
              className="hover:text-primary-200 font-medium text-slate-400 underline decoration-dashed decoration-0 underline-offset-4 transition-colors"
              href="https://github.com/Indie-Creator-Community"
              target="_blank"
            >
              Indie Creators HQ
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['nextjs'])),
  },
});

export default Home;
