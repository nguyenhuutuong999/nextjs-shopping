import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ShopPage.module.css';
import { getProducts } from '../api/category';
import Api from '../api/helper/product';
import { getProductsById } from '../api/product/product';

const CategoryPage = ({ product, relativeProducts }) => {
  console.log('lastedProducts:', relativeProducts)
  console.log('product:', product)
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="some description here" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Vegetable’s Package</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <a href="./index.html">Vegetables</a>
                  <span>Vegetable’s Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img className="product__details__pic__item--large"
                    src="img/product/details/product-details-1.jpg" alt="" />
                </div>
                <div className="product__details__pic__slider owl-carousel">
                  <Image
                    src={product.list_img[0].url}
                    alt="My Image"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{product.name}</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>{product.reviews}</span>
                </div>
                <div className="product__details__price">{ }</div>
                <p></p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" value="1" />
                    </div>
                  </div>
                </div>
                <a href="#" className="primary-btn">ADD TO CARD</a>
                <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                <ul>
                  <li><b>Availability</b> <span>In Stock</span></li>
                  <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                  <li><b>Weight</b> <span>{product.weight ? product.weight + "kg" : ''} </span></li>
                  <li><b>Share on</b>
                    <div className="share">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                      aria-selected="true">Description</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                      aria-selected="false">Information</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                      aria-selected="false">Reviews <span>(1)</span></a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                        eget malesuada.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {
              relativeProducts && relativeProducts.map((item, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <ProductCard product={item} index={index + 1} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.productId;
  const product = await Api.getProductDetail(productId);
  const relativeProducts = await Api.getLastedProducts();

  return { 
    props: { product: product.data.product[0], 
    relativeProducts: relativeProducts.data.product }, 
    revalidate: 20
  };
}

export async function getStaticPaths() {
  const { data } = await Api.getAllProducts();
  const paths = data.product.map((product) => ({
    params: { productId: product.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}
