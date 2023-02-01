import HeaderLayout from '../layouts/headerLayout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <HeaderLayout>
      <Component {...pageProps} />
    </HeaderLayout>
  );
}
