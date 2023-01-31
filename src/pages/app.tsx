import React from 'react';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default App;
