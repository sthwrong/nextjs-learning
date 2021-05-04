import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function TestPage({
  blogs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <p>Test page {blogs}</p>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { blogs: [] },
  };
};
