import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BannerLayout from '../components/layout/BannerLayout';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ProductCard';
import { Lp1, Lp2, Lp3 } from './../asset/img/latest-product';
import { pd1, pd2, pd3, pd4, pd5, pd6 } from "./../asset/img/product/discount";
import Api from './api/helper/product';
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
    weight: '300',
    subsets: ['latin'],
})

const Shop1 = ({ data }) => {
    const [category, setCategory] = useState("");
    const [featureProduct, setFeatureProduct] = useState("");
    const [product, setProduct] = useState(null);

    useEffect(() => {
        Api.getFeaturedProducts().then(res => setCategory(res.data.product));
    }, [])

    useEffect(() => {
        if (featureProduct)
            Api.getProductsByCategory(featureProduct).then(res => {
                setProduct(res.data.category)
            });
    }, [featureProduct])

    return (
        <>
            <Head>
                <title>Shop</title>
                <meta name="description" content="some description here" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
            </Head>
            <section className={openSans.className}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <div className="sidebar__item">
                                    <h4>Department</h4>
                                    <ul>
                                        <li
                                            className="text-capitalize pe-auto"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setFeatureProduct("")}
                                        >
                                            All
                                        </li>
                                        {category && category.map(item => {
                                            return (
                                                <li
                                                    className="text-capitalize pe-auto"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setFeatureProduct(item.category.id)}
                                                >
                                                    {item.category.name}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Price</h4>
                                    <div className="price-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="10" data-max="540">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__item sidebar__item__color--option">
                                    <h4>Colors</h4>
                                    <div className="sidebar__item__color sidebar__item__color--white">
                                        <label for="white">
                                            White
                                            <input type="radio" id="white" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--gray">
                                        <label for="gray">
                                            Gray
                                            <input type="radio" id="gray" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--red">
                                        <label for="red">
                                            Red
                                            <input type="radio" id="red" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--black">
                                        <label for="black">
                                            Black
                                            <input type="radio" id="black" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--blue">
                                        <label for="blue">
                                            Blue
                                            <input type="radio" id="blue" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--green">
                                        <label for="green">
                                            Green
                                            <input type="radio" id="green" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Popular Size</h4>
                                    <div className="sidebar__item__size">
                                        <label for="large">
                                            Large
                                            <input type="radio" id="large" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label for="medium">
                                            Medium
                                            <input type="radio" id="medium" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label for="small">
                                            Small
                                            <input type="radio" id="small" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label for="tiny">
                                            Tiny
                                            <input type="radio" id="tiny" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <h4>Latest Products</h4>
                                        <div className="latest-product__slider owl-carousel">
                                            <div className="latest-prdouct__slider__item">
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <Image placeholder='blur' loading='lazy' src={Lp1} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>1</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <Image loading='lazy' src={Lp2} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>2</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <Image loading='lazy' src={Lp3} alt="" />
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
                                                        <Image loading='lazy' src={Lp1} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>4</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <Image loading='lazy' src={Lp2} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>5</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <Image loading='lazy' src={Lp3} alt="" />
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
                        <div className="col-lg-9 col-md-7">
                            <div className="product__discount">
                                <div className="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                                <div className="row">
                                    <div className="product__discount__slider owl-carousel" style={{
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} >
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="asset/img/product/discount/pd-1.jpg"
                                                    style={{
                                                        backgroundImage: `url(${pd1.src})`,
                                                    }}
                                                >
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="asset/img/product/discount/pd-2.jpg"
                                                    style={{
                                                        backgroundImage: `url(${pd2.src})`,
                                                    }}>
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Vegetables</span>
                                                    <h5><a href="#">Vegetables’package</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="asset/img/product/discount/pd-3.jpg"
                                                    style={{
                                                        backgroundImage: `url(${pd3.src})`,
                                                    }}
                                                >
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Mixed Fruitss</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="asset/img/product/discount/pd-4.jpg"
                                                    style={{
                                                        backgroundImage: `url(${pd4.src})`,
                                                    }}
                                                >
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="asset/img/product/discount/pd-5.jpg"
                                                    style={{
                                                        backgroundImage: `url(${pd5.src})`,
                                                    }}
                                                >
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="asset/img/product/discount/pd-6.jpg"
                                                    style={{
                                                        backgroundImage: `url(${pd6.src})`,
                                                    }}
                                                >
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="filter__sort">
                                            <span>Sort By</span>
                                            <select>
                                                <option value="0">Default</option>
                                                <option value="0">Default</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6><span>{product ? product[0].products.length : data.product.length}</span> Products found</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="filter__option">
                                            <span className="icon_grid-2x2"></span>
                                            <span className="icon_ul"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {product && featureProduct !== "" ?
                                    product[0].products && product[0].products.map((item, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <ProductCard product={item} index={index + 1} />
                                        </div>
                                    )) :
                                    data.product && data.product.map((item, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <ProductCard product={item} index={index + 1} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export async function getStaticProps() {
    const { data } = await Api.getAllProducts();
    return { props: { data } };
}

Shop1.getLayout = function getLayout(page) {
    return (
        <Layout>
            <BannerLayout>
                {page}
            </BannerLayout>
        </Layout>
    )
}

export default Shop1;
