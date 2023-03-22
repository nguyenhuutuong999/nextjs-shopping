import { useState } from "react"
import ProductCard from "../ProductCard";

const FeatureProducts = ({ products }) => {
  const [featureProduct, setFeatureProduct] = useState("");

  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Products</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="text-capitalize" onClick={() => setFeatureProduct("")}>All</li>
                {products && products.map(item => {
                  if (parseInt(item?.category?.id) > 6) {
                    return (
                      <li
                        className="text-capitalize"
                        onClick={() => setFeatureProduct(item.category.slug)}
                      >
                        {item.category.name}
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {products && products.map((item, index) => {
            if (featureProduct === item.category.slug || featureProduct == "") {
              return (
                <div className={`col-lg-3 col-md-4 col-sm-6 mix, ${item.category.slug}`}>
                  <ProductCard product={item} index={index + 1} />
                </div>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureProducts;
