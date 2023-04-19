import Head from "next/head";
import Image from "next/image";
import swipe2 from "../images/ankara/swipe3.png";
import swipe1 from "../images/ankara/swiper2.png";
import swipe3 from "../images/ankara/swiper3.png";
import prod1 from "../images/ankara/prod1.png";
import prod2 from "../images/ankara/prod4.png";
import prod3 from "../images/ankara/prod3.png";
import prod4 from "../images/ankara/prod5.png";
import prod6 from "../images/ankara/prod2.png";
import profile2 from "../images/cust.jpg";
import profile3 from "../images/dp.jpg";
import profile4 from "../images/dp2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { useEffect } from "react";
import Link from "next/link";

export default function Ankara(props) {
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
        <title>High-End Ankara Dresses | Bel & Ona </title>
        <meta
          name="description"
          content="Discover Ankara fashion at its finest! Shop the latest trends in our Enugu retail store. Quality Ankara clothing & accessories. Visit us today!"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/ankara/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/ankara/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/ankara/favicon-16x16.png"
        />
        <link rel="manifest" href="/ankara/site.webmanifest" />
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
          <Image src={prod1} />
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
          <SwiperSlide className="swiper-slide container ankara">
            <div className="home-text">
              <span>Bel & Ona</span>
              <h1>
                We sell the <br /> best Ankara <br /> dresses
              </h1>
              <a href="tel:+2347060529854" className="btn">
                Contact us <i className="bx bx-phone"></i>{" "}
              </a>
            </div>
            <Image src={swipe1} className="swipe1" />
          </SwiperSlide>

          {/* slide 2 */}

          <SwiperSlide className="swiper-slide container ankara">
            <div className="home-text">
              <span>Bel & Ona</span>
              <h1>
                We sell the <br /> best Ankara <br /> dresses
              </h1>
              <a href="tel:+2347060529854" className="btn">
                Contact us <i className="bx bx-phone"></i>{" "}
              </a>
            </div>
            <Image src={swipe2} className="swipe2" />
          </SwiperSlide>

          {/* slide 3 */}

          <SwiperSlide className="swiper-slide container ankara">
            <div className="home-text">
              <span>Bel and Ona</span>
              <h1>
                We sell the <br /> best Ankara <br /> dresses
              </h1>
              <a href="tel:+2347060529854" className="btn">
                Contact us <i className="bx bx-phone"></i>{" "}
              </a>
            </div>
            <Image src={swipe3} />
          </SwiperSlide>
        </Swiper>
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
            <Image src={prod1} />
            <span>Hair Net</span>
            <h2>Short Boubou Gown</h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            <span className="discount">-25%</span>
          </div>

          {/* box 2 */}
          <div className="box">
            <Image src={prod2} />
            <span>Bonnet</span>
            <h2>
              African Print Short <br /> Gown
            </h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            <span className="discount">-25%</span>
          </div>

          {/* box 3 */}
          <div className="box">
            <Image src={prod3} />
            <span>Bonnet</span>
            <h2>
              Ankara Long Flowing <br /> Gown
            </h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            <span className="discount">-25%</span>
          </div>

          {/* box 4 */}
          <div className="box">
            <Image src={prod4} />
            <span>Hair Net</span>
            <h2>
              Chiffon Boubou Long <br />
              Gown
            </h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            <span className="discount">-25%</span>
          </div>

          {/* box 5 */}
          <div className="box">
            <Image src={prod1} />
            <span>Bonnet</span>
            <h2>Short Boubou Gown</h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            <span className="discount">-25%</span>
          </div>

          {/* box 6 */}
          <div className="box">
            <Image src={prod6} />
            <span>Bonnet</span>
            <h2>
              African Print Short <br /> Gown
            </h2>
            {/* <h3 className="price">
              N300 <span>/kg</span>
            </h3> */}
            <a href="https://wa.me/+2347060529854">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            <span className="discount">-25%</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <Image src={swipe1} />
        <div className="about-text">
          <span>About Us</span>
          <p>
            We are a premier retailer of exquisite high-end ankara dresses,
            offering a curated collection of stunning designs that capture the
            essence of African fashion. Elevate your wardrobe with our exquisite
            ankara dresses, crafted for the modern fashion connoisseur.
          </p>
          <a href="tel:+2347060529854" className="btn">
            Contact us <i className="bx bx-phone"></i>{" "}
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
              I couldn't be happier with my purchase from these guys! I received
              compliments all night long when I wore my dress to a special
              event.
            </p>
            <div className="review-profile">
              <Image src={profile2} alt="" />
              <h3>Adanna Chukwu</h3>
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
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              The unique designs and vibrant colors of their dresses are simply
              breathtaking. I always feel like a fashion-forward trendsetter
              when I wear their ankara dresses.
            </p>
            <div className="review-profile">
              <Image src={profile3} alt="" />
              <h3>Yetunde Adegoke</h3>
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
              I am a repeat customer of this ankara dress retailer because their
              dresses are simply stunning. I always feel confident and elegant
              when I wear their ankara dresses.
            </p>
            <div className="review-profile">
              <Image src={profile4} alt="" />
              <h3>Iniobong Akpan</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="footer" id="footer">
        <div className="footer-box">
          <a href="tel:+2347060529854" className="logo">
            <i className="bx bxs-basket"></i>Ankara Desses
          </a>
          <p>
            Address: 141 Chime Ave/ 1 Amawbia St Sabbath <br /> Bus Stop New
            Haven Enugu, Nigeria
          </p>
          <a href="tel:+2347060529854">Tel: 07060529854</a>
          <div className="social">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
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
