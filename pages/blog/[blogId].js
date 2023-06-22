import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import BlogApi from "../api/helper/blog1";
import {Author, DetailPost} from "./../../asset/img/blog/details";
import BlogLayout from "../../components/layout/BlogLayout";

const BlogDetailPage = ({ blog }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content="some description here" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <section
        class="blog-details-hero set-bg"
        data-setbg="img/blog/details/details-hero.jpg"
        style={{
            backgroundImage: `url(${DetailPost.src})`,
        }}
        >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="blog__details__hero__text">
                <h2>{blog.title}</h2>
                <ul>
                  <li>By Michael Scofield</li>
                  <li>{blog.create_at}</li>
                  <li>{blog.comments.length} comment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-details spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-5 order-md-1 order-2">
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
            <div class="col-lg-8 col-md-7 order-md-1 order-1">
              <div class="blog__details__text">
                <img src="img/blog/details/details-pic.jpg" alt="" />
                <Image src={blog.image} height={500} width={800} />

                <p>
                    {blog.content}
                </p>
              </div>
              <div class="blog__details__content">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="blog__details__author">
                      <div class="blog__details__author__pic">
                        <Image src={Author} height={50} width={50} />

                      </div>
                      <div class="blog__details__author__text">
                        <h6>Michael Scofield</h6>
                        <span>Admin</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="blog__details__widget">
                      <ul>
                        <li>
                          <span>Categories:</span> Food
                        </li>
                        <li>
                          <span>Tags:</span> All, Trending, Cooking, Healthy
                          Food, Life Style
                        </li>
                      </ul>
                      <div class="blog__details__social">
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-envelope"></i>
                        </a>
                      </div>
                    </div>
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

export async function getStaticProps(context) {
  const { params } = context;
  const blogId = params.blogId;
  const blog = await BlogApi.getPostDetail(blogId);
  return {
    props: {
      blog: blog.data.post[0],
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const { data } = await BlogApi.getPosts();
  const paths = data.post.slice(1,2).map((blog) => ({
    params: { blogId: blog.id.toString() },
  }));
  return { paths, fallback: false };
}

BlogDetailPage.getLayout = function getLayout(page) {
  return (
    <BlogLayout>
      {page}
    </BlogLayout>
  )
}

export default BlogDetailPage;
