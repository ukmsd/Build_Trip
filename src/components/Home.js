import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import aqa from "./nimg/home1.png";
import abc from "./nimg/home2.png";
import xyz from "./nimg/home3.png";
// import BgVideo from "../assets/BgVideo.mp4";
import { hover } from "@testing-library/user-event/dist/hover";
import Navlogo from "./Navlogo";
import { useEffect } from "react";
import axios from "axios";
import Copyrights from "./Copyrights";

// import home1 from './images/home1.jpg';
// import home2 from './images/home2.jpg';
// import home3 from './images/home3.jpg';
// import home4 from './images/home4.jpg';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // alert("ok")
    axios
      .get(
        "https://api.openwethermap.org/data/2.5/weather?q=hyderabad&units=metric&APPID=a6c8441cb42c80ac4e0bdd7c99b8f695"
      )
      .then((res) => {
        // alert('res')
      });
  }, []);
  const login = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="homeback" style={{ height: "100vh" }}>
        <div className="" style={{ transform: "translate(0%,0%)" }}>
          <div className="home2nav">
            <nav className="navbar  justify-content-between">
              <p className="navbar-brand">
                <div
                  className="brand d-flex"
                  style={{ gap: "10px", paddingLeft: "20px" }}
                >
                  <Navlogo />
                  <h4 className="ki" style={{ marginTop: "4px" }}>
                    BUILD YOUR TRIP
                  </h4>
                </div>
              </p>
              <div
                className=" justify-content-end"
                style={{ marginRight: "50px" }}
              >
                <ul>
                  {/* <li><Link to="/signup"><button>SIGNUP</button></Link></li> */}
                  <li>
                    {/* <Link to="/login"> */}
                    <p
                      onClick={login}
                      // style={{ boxShadow: "3px 4px"}}
                      style={{
                        border: "none",
                        fontFamily: "Nunito Sans, Sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                        cursor: "pointer",

                        // color: '#000000',
                        padding: "0px 8px 0px 8px",
                      }}
                      className="buttonnavbar"
                    >
                      Login
                    </p>
                    {/* </Link> */}
                  </li>
                  {/* <li>
                    <Link to="/trip">
                      <button
                        style={{ boxShadow: "3px 4px"}}
                        className="btn btn-none"
                      >
                        MAKE A TRIP
                      </button>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <video
                src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
                width="100"
                className="video"
                autoPlay
                loop
                muted
              />
              {/* <video class="img-fluid" autoplay loop muted>
                <source
                  src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
                  type="video/mp4"
                />
              </video> */}

              {/* <img
                        className=" "
                        width="100%"
                        height="500px"
                        // src={home1}
                        // src="https://cdn.pixabay.com/photo/2018/06/12/01/04/road-trip-3469810_1280.jpg"
                        alt="Second Slide"
                      /> */}
            </div>
            <div>
              <p
                className="title"
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "20%",
                  right: "20%",
                  bottom: "50%",
                  fontWeight: "900",
                  fontSize: "60px",
                }}
              >
                {" "}
                Travelling is Fun and memories cherish forever
              </p>
            </div>
            {/* <div class="carousel-item">
            <video
          src={BgVideo}
          width="100"
          className="video"
          autoPlay
          loop
          muted
        />
              {/* <img
                className=""
                width="100%"
                height="500px"
                // src={home2}
                // src="https://media.cntraveler.com/photos/5edfc029b16364ea435ca862/master/pass/Roadtrip-2020-GettyImages-1151192650.jpg"
                alt="First slide"
              /> 
            </div> */}

            <div class="carousel-item">
              <video className="video" autoPlay loop muted>
                <source
                  src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
                  type="video/mp4"
                />
              </video>
              {/* <img
                className=""
                width="100%"
                height="500px"
                // src={home3}
                // src='https://lp-cms-production.imgix.net/2021-01/GettyRF_450207051.jpg'
                alt="2First slide"
              /> */}
              <div>
                <p
                  className="title"
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "18%",
                    right: "18%",
                    bottom: "50%",
                    fontWeight: "900",
                    fontSize: "60px",
                    background: "transparent",
                  }}
                >
                  {" "}
                  The Journey of thousand miles begins with single step
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <video className="video" autoPlay loop muted>
                <source
                  // src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
                  // src={BgVideo}
                  type="video/mp4"
                />
              </video>
              {/* <img
                className=""
                width="100%"
                height="500px"
                // src={home3}
                // src='https://lp-cms-production.imgix.net/2021-01/GettyRF_450207051.jpg'
                alt="2First slide"
              /> */}
              <div>
                <p
                  className="title"
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "20%",
                    right: "20%",
                    bottom: "50%",
                    fontWeight: "900",
                    fontSize: "60px",
                    background: "transparent",
                  }}
                >
                  {" "}
                  To Travel is to live and collect moments not things
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

          {/* <video
          src={BgVideo}
          width="100"
          className="video"
          autoPlay
          loop
          muted
        /> */}

          {/* <div className="container m-5">
                    <div className="tripu">
                        <div className="">
                            <div className="row mt-5 ">
                                <div className="col-8 mt-5 ">
                                    <div className="er mt-5">
          <div style={{position:"absolute",transform:"translate(0%,0%)"}} className="row ">
          
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div> */}
        </div>
      </div>
      <Copyrights />
    </>
  );
};
export default Home;
