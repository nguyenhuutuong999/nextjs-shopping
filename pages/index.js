import CategoryCard from "../components/CategoryCard";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import {Lp1, Lp2, Lp3} from './../asset/img/latest-product';
import {Blog1,Blog2, Blog3, Blog4, Blog5} from "./../asset/img/blog"

const HomePage = () => {
  return (
    <main className={styles.container}>
      <section class="featured spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Featured Products</h2>
              </div>
              <div class="featured__controls">
                <ul>
                  <li class="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row featured__filter">
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  // data-setbg="./../asset/img/featured/feature-1.jpg"
                  style={{ backgroundImage: `url(./../asset/img/featured/feature-1.jpg)` }}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">1</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={Lp1}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">2</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-3.jpg"
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">3</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-4.jpg"
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">4</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-5.jpg"
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">5</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-6.jpg"
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">6</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-7.jpg"
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">7</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-8.jpg"
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">8</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="banner__pic">
                <img src="img/banner/banner-1.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="banner__pic">
                <img src="img/banner/banner-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="latest-product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Latest Products</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-product__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp1} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>1</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp2} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>2</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp3} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>3</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp1} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>4</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp2} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>5</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp3} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>6</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Top Rated Products</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-product__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp1} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>1</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp2} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>2</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp3} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>3</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp1} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>4</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp2} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>5</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp3} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>6</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Review Products</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-product__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp1} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>1</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp2} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>2</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp3} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>3</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp1} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>4</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp2} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>5</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <Image src={Lp3} alt="" />
                      </div>
                      <div class="latest-product__item__text">
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
      <section class="from-blog spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <Image src={Blog1} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Cooking tips make cooking simple</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <Image src={Blog2} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">6 ways to prepare breakfast for 30</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <Image src={Blog3} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Visit the clean farm in the US</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={styles.small}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
        <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Accessories"
        />
      </div> */}
    </main>
  );
};

export default HomePage;
