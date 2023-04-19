import Link from "next/link";

export default function Home() {
  // Create a new Date object for the current date
  let currentDate = new Date();

  // Get the day, month, and year from the current date
  let day = currentDate.getDate();
  let month = currentDate.toLocaleString("default", { month: "short" });
  let year = currentDate.getFullYear();

  // Create an array of month names in short format
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the index of the current month
  let monthIndex = currentDate.getMonth();

  // Get the short month name from the array
  month = monthNames[monthIndex];

  // Format the date string in the desired format
  let formattedDate = day + " " + month + " " + year;

 
  return (
    <div style={{overflowX: "hidden"}}>
      <div className="row">
        <div className="example-1 card">
          <Link
            href="/showerCaps"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p style={{ color: "white" }}>Showercaps Page</p>
            <div className="wrapper">
              <div className="date">
                <span className="day">{day}</span>
                <span className="month">{month}</span>
                <span className="year">{year}</span>
              </div>
              <div className="data">
                <div className="content">
                  <span className="author">Bel & Ona</span>
                  <h1 className="title">Showercaps Plus</h1>
                  <p className="text">
                    We are Nigeria's leading manufacturers of high quality
                    shower caps and we supply in bulk nationwide at very
                    affordable prices.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="example-2 card">
          <Link
            href="/ankara"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p style={{ color: "white" }}>Ankara Dress Page</p>
            <div className="wrapper">
              s
              <div className="date">
                <span className="day">{day}</span>
                <span className="month">{month}</span>
                <span className="year">{year}</span>
              </div>
              {/* <div className="data">
          <div className="content">
            <span className="author">Jane Doe</span>
            <h1 className="title">
              <a href="#">Stranger Things: The sound of the Upside Down</a>
            </h1>
            <p className="text">
              The antsy bingers of Netflix will eagerly anticipate the digital
              release of the Survive soundtrack, out today.
            </p>
            <a href="#" className="button">Read more</a>
          </div>
        </div>  */}
            </div>
          </Link>
        </div>
      </div>
      <div className="copyright" style={{background: "linear-gradient(to right, #034378, #2d4e68)", color: "white"}}>
       <p>&#169; <a href="https://stripe-tec.com">Stripe-Tec</a> All Right Reserved.</p>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://api.weather.gov/gridpoints/MFL/109,49/forecast"
//   );
//   const data = await response.json();

//   return {
//     props: {
//       forecast: data.properties.periods[0].detailedForecast,
//     },
//   };
// }
