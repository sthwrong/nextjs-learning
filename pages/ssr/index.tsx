import { GetServerSideProps } from 'next';
import * as React from 'react';

export default function SSR () {
  return <p>SSR</p>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}