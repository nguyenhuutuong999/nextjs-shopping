import Link from "next/link";

const ProductCard = ({ product, index }) => {
  return (
    <Link href={`/product/${encodeURIComponent(product.id)}`} style={{textDecoration: "none"}}>
      <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            style={{
              backgroundImage: `url(${product?.list_img[0]?.url})`,
              cursor: "pointer"
            }}
          >
            <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
                  <i className="fa fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-retweet"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">{index}</a>
            </h6>
            <h5>{`$${product.price}`}</h5>
          </div>
      </div>
    </Link>
  );
};

export default ProductCard;
