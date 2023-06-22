import { Roboto } from 'next/font/google'
import BlogFooter from './BlogFooter';
import BlogNavbar from './BlogNavbar';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

function BlogLayout({children}) {
  return (
    <div className={roboto.className}>
      <BlogNavbar />
          {children}
      <BlogFooter />
    </div>
  );
}

export default BlogLayout;
