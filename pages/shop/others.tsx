import type { GetServerSideProps, NextPage } from 'next';
import { ProductResponse } from '@/lib/product';
import { _layout } from '@/components/Shop/_layout';
import axios from 'axios';

const Others: NextPage<ProductResponse> = ({ data, error }) => {
  return <_layout layout_items={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = (
    await axios.get<ProductResponse>(`https://nextsedge-di84.vercel.app/api/product`)
  ).data;

  const filtered_data = response.data.filter((item) => item.category.toLowerCase() === 'others');

  return {
    props: {
      data: filtered_data,
      error: response.error,
    },
  };
};

export default Others;
