import Image from "next/image";
import { Lp1, Lp2, Lp3 } from "./../asset/img/latest-product";
import { Blog1, Blog2, Blog3 } from "./../asset/img/blog";
import FeatureProducts from "../components/home/FeaturedProducts";
import Head from "next/head";
import Api from "./api/helper/product";
import { Roboto } from 'next/font/google'
import Layout from "../components/layout/Layout";
import BannerLayout from "../components/layout/BannerLayout";
import Link from "next/link";
import { SessionProvider, useSession } from "next-auth/react"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const HomePage = ({ data }) => {

  return (
    <div className={roboto.className}>
      <Head>
        <title>Home</title>
        <meta name="description" content="some description here" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <main>
        <FeatureProducts products={data.product} />
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="latest-product spad">
          <div className='container'>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Latest Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-product__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp1} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>1</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp2} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>2</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp3} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>3</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp1} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>4</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp2} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>5</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp3} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>6</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Top Rated Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-product__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp1} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>1</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp2} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>2</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp3} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>3</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp1} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>4</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp2} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>5</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp3} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>6</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Review Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-product__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp1} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>1</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp2} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>2</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp3} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>3</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp1} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>4</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp2} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>5</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <Image src={Lp3} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>6</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="from-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title from-blog__title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <Image src={Blog1} alt="" placeholder="blur" width={370} height={266}/>
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o"></i> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">Cooking tips make cooking simple</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    {/* <Image src={Blog1} alt="" placeholder="blur" /> */}
                    <img src={Blog1.src} width={370} height={266} />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o"></i> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">6 ways to prepare breakfast for 30</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <Image src={Blog3} alt="" placeholder="blur" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o"></i> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">Visit the clean farm in the US</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  
  const { data } = await Api.getFeaturedProducts();
  return { props: { data } };
}

HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <BannerLayout>
        {page}
      </BannerLayout>
    </Layout>
  )
}

export default HomePage;
