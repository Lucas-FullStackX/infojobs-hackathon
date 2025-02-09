import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { api } from '~/utils/api';
import { SearchInput } from '~/components/SearchInput/SearchInput';
import { Icon, IconCatalog } from '~/components';

type HomeProps = {};

const GPT: NextPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation(['nextjs']);
  return (
    <>
      <Head>
        <title>InfoJobs GPT</title>
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
            <h1 className="text-center text-3xl font-bold text-slate-50">
              {t('nextjs:form.select')}
            </h1>
          </div>
        </div>
        <div className="w-1/2">
          <SearchInput />
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

export default GPT;
