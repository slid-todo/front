import Head from 'next/head';

interface MetaDataProps {
  title: string;
}

export const MetaData = ({ title }: MetaDataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${title} Page`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};
