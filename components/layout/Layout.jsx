import { Roboto } from 'next/font/google'
import Navbar from './Navbar';
import Footer from './Footer';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

function Layout({children}) {
  return (
    <div className={roboto.className}>
      <Navbar />
          {children}
      <Footer />
    </div>
  );
}

export default Layout;
