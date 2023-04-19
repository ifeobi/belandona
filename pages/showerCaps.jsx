import Head from "next/head";
import Image from "next/image";
import profile from "../images/showercaps/sleep.png";
import swipe1 from "../images/showercaps/sleep.png";
import swipe2 from "../images/showercaps/satin.png";
import swipe3 from "../images/showercaps/satin2.png";
import prod3 from "../images/showercaps/prod3.png";

import profile2 from "../images/dp3.jpg";
import profile3 from "../images/hp.jpg";
import profile4 from "../images/cust2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Hover from "../components/Hover";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { useEffect } from "react";
import Link from "next/link";

export default function ShowerCaps(props) {
  useEffect(() => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    const handleMenuClick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    const handleMenuClose = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    menu.addEventListener("click", handleMenuClick);
    window.addEventListener("scroll", handleMenuClose);
  }, []);

  return (
    <>
      <Head>
        <title>High Quality Shower Caps | Bel & Ona </title>
        <meta
          name="description"
          content="Leading shower caps and hair net manufacturer in Nigeria. High-quality, waterproof, breathable hair care solutions for diverse hair types. Choose us for reliable, stylish, and eco-friendly products."
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header>
        <Link href="/" className="logo">
          <i className="bx bxs-basket"></i>Bel & Ona
        </Link>

        <div className="bx bx-menu" id="menu-icon"></div>
        {/* Nav-list */}
        <ul className="navbar">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#categories">Categories</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#customers">Customers</a>
          </li>
        </ul>

        {/* Profile */}

        <div className="profile">
          <Image src={profile} />
          {/* <span> Ife Obi</span> */}
        </div>
      </header>

      {/* Home */}

      <section className="home swiper" id="home">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {/* slide 1 */}
          <SwiperSlide className="swiper-slide container">
            <div className="home-text">
              <span>Bel & Ona</span>
              <h1>
                We manufacture <br /> the highest quality <br /> sleep caps
              </h1>
              <a href="tel:+2347060529854" className="btn">
                Contact us <i className="bx bx-phone"></i>{" "}
              </a>
            </div>
            <Image src={swipe1} className="swipe1" />
          </SwiperSlide>

          {/* slide 2 */}

          <SwiperSlide className="swiper-slide container">
            <div className="home-text">
              <span>Bel & Ona</span>
              <h1>
                Classic Satin Bonnet <br /> Highest Quality
              </h1>
              <a href="tel:+2347060529854" className="btn">
                Contact us <i className="bx bx-phone"></i>{" "}
              </a>
            </div>
            <Image src={swipe2} className="swipe2" />
          </SwiperSlide>

          {/* slide 3 */}

          <SwiperSlide className="swiper-slide container">
            <div className="home-text">
              <span>Bel and Ona</span>
              <h1>
                Choose luxury <br /> Satin Bonnet <br /> Ankara Trim
              </h1>
              <a href="tel:+2347060529854" className="btn">
                Contact us <i className="bx bx-phone"></i>{" "}
              </a>
            </div>
            <Image src={swipe3} />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* categories */}

      <section className="categories" id="categories">
        <div className="heading">
          <h1>
            Browse Our Hottest <br />
            <span>Categories</span>
          </h1>
          <a href="tel:+2347060529854" className="btn">
            Contact us <i className="bx bx-phone"></i>{" "}
          </a>
        </div>

        {/* Container content */}
        <div className="categories-container">
          {/* box 1 */}
          <div className="box box1">
            <Hover src="/image/shower/cat/cat" alt="" />
            <h2>Patterned Bonnet</h2>
            <span>1000+ Items</span>
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
          {/* box 2 */}
          <div className="box box2">
            <Hover src="/image/shower/cat/cat2" alt="" />
            <h2>Plain Bonnet</h2>
            <span>1000+ Items</span>
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
          {/* box 3 */}
          <div className="box box3">
            <Hover src="/image/shower/cat/sleep" alt="" />
            <h2>Hair Net</h2>
            <span>1000+ Items</span>
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
          {/* box 4 */}
          <div className="box box4">
            <Hover src="/image/shower/cat/cat3" alt="" />
            <h2>Ankara Shower Caps</h2>
            <span>1000+ Items</span>
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
          {/* box 5 */}
          <div className="box box5">
            <Hover src="/image/shower/cat/cat5" alt="" />
            <h2>Satin Bonnet</h2>
            <span>1000+ Items</span>
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>
      </section>

      {/* products */}
      <section className="products" id="products">
        <div className="heading">
          <h1>
            Our Popular <br /> <span>Products</span>
          </h1>
          <a href="tel:+2347060529854" className="btn">
            Contact us <i className="bx bx-phone"></i>{" "}
          </a>
        </div>

        {/* product Content */}
        <div className="products-container">
          {/* box 1 */}
          <div className="box">
            <Hover src="/image/shower/prod/prod" alt="" />
            <span>Hair Net</span>
            <h2>Sleep Cap Hair Net</h2>
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            {/* <i className="bx bx-heart"></i> */}
            <span className="discount">-25%</span>
          </div>

          {/* box 2 */}
          <div className="box">
            <Hover src="/image/shower/prod/prod2" alt="" />
            <span>Bonnet</span>
            <h2>
              Satin Bonnet Ankara <br /> Trim
            </h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            {/* <i className="bx bx-heart"></i> */}
            <span className="discount">-25%</span>
          </div>

          {/* box 3 */}
          <div className="box">
            <Hover src="/image/shower/prod/prod3" alt="" />
            <span>Bonnet</span>
            <h2>
              Reversible Plain <br /> Satin Bonnet
            </h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            {/* <i className="bx bx-heart"></i> */}
            <span className="discount">-25%</span>
          </div>

          {/* box 4 */}
          <div className="box">
            <Hover src="/image/shower/cat/sleep" alt="" />
            <span>Hair Net</span>
            <h2>Sleep Cap Hair Net</h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            {/* <i className="bx bx-heart"></i> */}
            <span className="discount">-25%</span>
          </div>

          {/* box 5 */}
          <div className="box">
            <Hover src="/image/shower/prod/prod5" alt="" />
            <span>Bonnet</span>
            <h2>Classic Satin Bonnet</h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            {/* <i className="bx bx-heart"></i> */}
            <span className="discount">-25%</span>
          </div>

          {/* box 6 */}
          <div className="box">
            <Hover src="/image/shower/prod/prod6" alt="" />
            <span>Bonnet</span>
            <h2>Classic Satin Bonnet</h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            {/* <i className="bx bx-heart"></i> */}
            <span className="discount">-25%</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <Image src={prod3} />
        <div className="about-text">
          <span>About Us</span>
          <p>
            We are a leading manufacturer in Nigeria, specializing in
            high-quality shower caps and hair nets. With a commitment to
            excellence, we use premium materials and advanced technology to
            create functional and fashionable products that protect and style
            hair with comfort and durability. Our customer-centric approach,
            timely deliveries, and competitive pricing make us the preferred
            choice for hair care solutions in Nigeria and beyond.
          </p>
          <a href="tel:+2347060529854" className="btn">
            Contact Us<i className="bx bx-phone"></i>{" "}
          </a>
        </div>
      </section>

      <section className="customers" id="customers">
        <h2>Why Customers Love Us</h2>
        <div className="customers-container">
          {/* Review 1 */}
          <div className="box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              International standard from the packaging to the product itself. A
              lot of store owners always request for more because their
              customers always rush it!
            </p>
            <div className="review-profile">
              <Image src={profile2} alt="" />
              <div className="review-details">
                <h3>Ebele Obijiofor</h3>
                <p>I supply NEXT, FAXX supermaket and NADREM Abuja</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Their hair net is very airy and comfortable. And their shower cap
              is fashionable. It protects my hair and I can also go outside with
              it and still look nice.
            </p>
            <div className="review-profile">
              <Image src={profile4} alt="" />
              <h3>Chidinma Chiefe</h3>
            </div>
          </div>

          {/* Review 3 */}
          <div className="box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              As a supplier, I'm impressed with their commitment to
              international standards. Store owners always request more of the
              products due to its high demand.
            </p>
            <div className="review-profile">
              <Image src={profile3} alt="" />
              <h3>Michelle Adebayo</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="footer" id="footer">
        <div className="footer-box">
          <a href="#" className="logo">
            <i className="bx bxs-basket"></i>Showercaps
          </a>
          <p>
            Address: 141 Chime Ave/ 1 Amawbia St Sabbath <br /> Bus Stop New
            Haven Enugu, Nigeria
          </p>
          <a href="tel:+2347060529854">Tel: 07060529854</a>
          <div className="social">
            <a
              href="https://facebook.com/belplusona"
              target="_blank"
              rel="noopener"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-box">
          <h2>Categories</h2>
          <a href="#categories">Patterned Bonnet</a>
          <a href="#categories">Plain Bonnet</a>
          <a href="#categories">Hair Net</a>
          <a href="#categories">Ankara Showercaps</a>
        </div>
        {/* <div className="footer-box">
          <h2>Useful Links</h2>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">My Blog</a>
          <a href="#">Return Policy</a>
        </div> */}
        {/* <div className="footer-box">
          <h2>Newsletter</h2>
          <p>
            Get 10% Discount with <br />
            Email Newsletter
          </p>
          <form action="">
            <i className="bx bxs-envelope"></i>
            <input type="email" name="" id="" placeholder="Enter Your Email" />
            <i className="bx bx-arrow-back bx-rotate-180"></i>
          </form>
        </div> */}
      </section>

      {/* Copyright */}
      <div className="copyright">
        <p>
          &#169; <a href="https://stripe-tec.com">Stripe-Tec</a> All Right
          Reserved.
        </p>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const response = await fetch("")
//   const data = await response.json()

//   return {
//     props: {
//       posts: data.posts
//     }
//   }
// }
