import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/bootstrap.min.css";
// import { Roboto } from "next/font/google";
import store from '../redux/store';

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const session = pageProps.session;

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />, session)}
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
