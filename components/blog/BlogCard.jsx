import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({blog}) => {
  return (
    <div>
      <Link href={`/blog/${blog.id}`} style={{textDecoration: 'none'}}>
        <div className="blog__item">
          <div className="blog__item__pic">
            <Image src={blog.image} height={250} width={400} />
          </div>
          <div className="blog__item__text">
            <ul>
              <li>
                <i className="fa fa-calendar-o"></i>{blog.create_at}
              </li>
            </ul>
            <h5>
              <a href="#">{blog.title}</a>
            </h5>
            <p>
              {blog.sumary}
            </p>
            <a href="#" className="blog__btn">
              READ MORE <span className="arrow_right"></span>
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
