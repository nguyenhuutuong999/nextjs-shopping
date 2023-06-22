import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={`spad ${styles.footer}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <Link href="./index.html"></Link>
                        </div>
                        <ul>
                            <li>Address: 1317 Harry Place 28204 NC</li>
                            <li>Phone: 704-768-7449</li>
                            <li>Email: info@ogani.com</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 offset-lg-1 col-md-6 col-sm-6">
                    <div className="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">About Our Shop</Link></li>
                            <li><Link href="#">Secure Shopping</Link></li>
                            <li><Link href="#">Delivery infomation</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Our Sitemap</Link></li>
                        </ul>
                        <ul>
                            <li><Link href="#">Who Are We</Link></li>
                            <li><Link href="#">Our Services</Link></li>
                            <li><Link href="#">Projects</Link></li>
                            <li><Link href="#">Contact</Link></li>
                            <li><Link href="#">Innovation</Link></li>
                            <li><Link href="#">Testimonials</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your mail"/>
                            <button type="submit" className="site-btn">Subscribe</button>
                        </form>
                        <div className="footer__widget__social">
                            <Link href="#"><i className="fa fa-facebook"></i></Link>
                            <Link href="#"><i className="fa fa-instagram"></i></Link>
                            <Link href="#"><i className="fa fa-twitter"></i></Link>
                            <Link href="#"><i className="fa fa-pinterest"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright">
                        <div className="footer__copyright__text">
                            <p>
                                Copyright All rights reserved | <b>TK</b>
                            </p>
                        </div>
                        <div className="footer__copyright__payment"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
