import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const App = ({ Component, pageProps }: AppProps) => {
  const SafeHydrate = dynamic(() => import('../components/SafeHydrate'), {
    ssr: false,
  });

  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
};

export default App;
