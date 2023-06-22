import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cart.slice";

const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div onClick={() => {
      router.push(`/product/${encodeURIComponent(product.id)}`)
    }} style={{ textDecoration: "none" }}>
      <div className="featured__item">
        <Image src={product?.list_img[0]?.url} width={500} height={300} className="featured__item__pic set-bg" style={{ cursor: 'pointer' }} />
        {/* <div
          className="featured__item__pic set-bg"
          style={{
            backgroundImage: `url(${product?.list_img[0]?.url})`,
            cursor: "pointer"
          }}
        > */}
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
          <li onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
          }}>
            <span>
              <i className="fa fa-shopping-cart"></i>
            </span>
          </li>
        </ul>
        {/* </div> */}
        <div className="featured__item__text">
          <h6>
            <a href="#">{index}</a>
          </h6>
          <h5>{`$${product.price}`}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
