import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <>
      <div className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> info@ogani.com
                    </li>
                    <li>Free shipping for all orders over $50</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="asset/img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user"></i> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="asset/img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><Link href="/">Home</Link></li>
                            <li><Link href="/shop1">Shop</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price"><span>$10.00</span></div>
                    </div>
                </div>
            </div>
            <div className="hamburger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
        {/* <nav className={styles.navbar}>
          <h6 className={styles.logo}>GamesKart</h6>
          <ul className={styles.links}>
            <li className={styles.navlink}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navlink}>
              <Link href="/shop">Shop</Link>
            </li>
            <li className={styles.navlink}>
              <Link href="/cart">
                <a>Cart ({getItemsCount()})</a>
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
};

export default Navbar;
