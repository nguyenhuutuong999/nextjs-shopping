import BlogApi from "../api/helper/blog1";
import BlogCard from "../../components/blog/BlogCard";
import BlogLayout from "../../components/layout/BlogLayout";
import { DetailPost } from "./../../asset/img/blog/details";

const Blog = ({ data }) => {
  return (
    <>
      <section
        class="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
        style={{
          backgroundImage: `url(${DetailPost.src})`,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>Blog</h2>
                <div class="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-details spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-5">
              <div class="blog__sidebar">
                <div class="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span class="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Beauty (20)</a>
                    </li>
                    <li>
                      <a href="#">Food (5)</a>
                    </li>
                    <li>
                      <a href="#">Life Style (9)</a>
                    </li>
                    <li>
                      <a href="#">Travel (10)</a>
                    </li>
                  </ul>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div class="blog__sidebar__recent">
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-1.jpg" alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          09 Kinds Of Vegetables
                          <br /> Protect The Liver
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-2.jpg" alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          Tips You To Balance
                          <br /> Nutrition Meal Day
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-3.jpg" alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          4 Principles Help You Lose <br />
                          Weight With Vegetables
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div class="blog__sidebar__item__tags">
                    <a href="#">Apple</a>
                    <a href="#">Beauty</a>
                    <a href="#">Vegetables</a>
                    <a href="#">Fruit</a>
                    <a href="#">Healthy Food</a>
                    <a href="#">Lifestyle</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {data &&
                  data.length !== 0 &&
                  data.map((item) => (
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <BlogCard blog={item} />
                    </div>
                  ))}
                <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await BlogApi.getPosts();
  return { props: { data: data.post } };
}

Blog.getLayout = function getLayout(page) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default Blog;
