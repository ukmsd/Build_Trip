import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Carousel, { Button } from "bootstrap";
import { useState } from "react";
import { API } from "../Api";

import axios from "axios";
import home7 from "./home2/img7.jpeg";
import home8 from "./home2/img8.jpeg";
import home9 from "./home2/img9.jpeg";
import home10 from "./home2/img10.jpeg";
import home11 from "./home2/img11.jpeg";
import Navlogo from "./Navlogo";
import img2 from "../assets/img2.jpg";

const Home2 = () => {
  const navigate = useNavigate();
  const [logout, setlogout] = useState(false);

  const logouthan = () => {
    setlogout(true);
  };
  const disable = () => {
    setlogout(false);
  };
  const travelhistroy = () => {
    navigate("/previoustrip");
  };
  const makeatrip = () => {
    navigate("/trip");
  };
  return (
    <>
      <div className="back1">
        <div className="row">
          <div className="col-12">
            <div className="">
              <div
                className="home2nav"
                style={{ position: "sticky", top: "0px" }}
              >
                <nav className="navbar justify-content-between">
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

                  <div className="justify-content-end">
                    <ul>
                      {/* <li><Link to="/signup"><button>SIGNUP</button></Link></li> */}
                      <li>
                        {/* <Link to="/previoustrip" className="strip"> */}
                        <p
                          onClick={travelhistroy}
                          style={{
                            border: "none",
                            fontFamily: "Nunito Sans, Sans-serif",
                            fontSize: "14px",
                            fontWeight: "600",
                            cursor: "pointer",

                            // color: '#000000',
                            padding: "0px 8px 0px 8px",
                          }}
                          // style={{ boxShadow: "3px 4px 3px 4px" }}
                          className="buttonnavbar"
                        >
                          Travel History
                        </p>
                        {/* </Link> */}
                      </li>

                      <li>
                        {/* <Link to="/trip" className="strip"> */}
                        <p
                          onClick={makeatrip}
                          // style={{
                          //   border: "none",
                          //   fontFamily: "Nunito Sans, Sans-serif",
                          //   fontSize: "14px",
                          //   fontWeight: "600",
                          //   cursor: "pointer",

                          style={{
                            border: "none",
                            fontFamily: "Nunito Sans, Sans-serif",
                            fontSize: "14px",
                            fontWeight: "600",
                            cursor: "pointer",

                            // color: '#000000',
                            padding: "0px 8px 0px 8px",
                          }}
                          // style={{ boxShadow: "3px 4px 3px 4px" }}
                          className="buttonnavbar m-2"
                        >
                          Make A Trip{" "}
                        </p>
                        {/* </Link> */}
                      </li>
                      <li>
                        <p
                          style={{
                            border: "none",
                            fontFamily: "Nunito Sans, Sans-serif",
                            fontSize: "14px",
                            fontWeight: "600",
                            cursor: "pointer",

                            // color: '#000000',
                            padding: "0px 8px 0px 8px",
                          }}
                          className="buttonnavbar m-2"
                          onClick={logouthan}
                        >
                          Logout
                        </p>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="">
                <div className="bgcontainer">
                  <div className="overlay">
                    <img src={img2} style={{height:"800px"}}/>
                    <div className="containert">
                      {/* style={{position:"absolute",width:"77%",height:"100%", transform:'translate(-50%,-50%)',top:"50%",left:"50%",display:"flex",justifyContent:"center",textAlign:"center",alignItems:"center",color:"white"}} */}
                      <h1 className="title" style={{ fontWeight: "bold" }}>
                        TRAVEL AROUND THE WORLD
                      </h1>
                    </div>
                  </div>
                </div>
                {/* <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        className=" "
                        width="100%"
                        height="500px"
                        src={home10}
                        // src="https://cdn.pixabay.com/photo/2018/06/12/01/04/road-trip-3469810_1280.jpg"
                        alt="Second Slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        className=""
                        width="100%"
                        height="500px"
                        src={home11}
                        // src="https://media.cntraveler.com/photos/5edfc029b16364ea435ca862/master/pass/Roadtrip-2020-GettyImages-1151192650.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        className=""
                        width="100%"
                        height="500px"
                        src={home8}
                        // src="https://media.cntraveler.com/photos/5edfc029b16364ea435ca862/master/pass/Roadtrip-2020-GettyImages-1151192650.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        className=""
                        width="100%"
                        height="500px"
                        src={home9}
                        // src='https://lp-cms-production.imgix.net/2021-01/GettyRF_450207051.jpg'
                        alt="2First slide"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div> */}

                {/* <Carousel>
                            <Carousel.Item>
                                <div className='home21'>
                                    <img
                                        className=""
                                        width="100%"
                                        height="500px"
                                        src="https://www.imltravel.com/wp-content/uploads/2015/04/Beautiful-Beach-Wallpapers-HD-Pic__1468964249_223.176.25.239.jpg"
                                        alt="First slide"
                                    ></img>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='home21'>

                                    <img
                                        className=""
                                        width="100%"
                                        height="500px"
                                        src='https://cdn.pixabay.com/photo/2018/06/12/01/04/road-trip-3469810_1280.jpg'
                                        alt="2First slide"
                                    ></img>
                                </div>

                            </Carousel.Item>
                            <CarouselItem>
                                <div className='home21'>

                                    <img
                                        className=" "
                                        width="100%"
                                        height="500px"
                                        src="https://media.cntraveler.com/photos/5edfc029b16364ea435ca862/master/pass/Roadtrip-2020-GettyImages-1151192650.jpg"
                                        alt="Second Slide"
                                    ></img>
                                </div>

                                <Carousel.Item />
                            </CarouselItem>
                            <Carousel.Item>
                                <div className='home21'>

                                    <img
                                        className=""
                                        width="100%"
                                        height="500px"
                                        src="https://pickyourtrail.com/blog/wp-content/uploads/2020/05/tatonomusic-1X3YSIuqYeM-unsplash-scaled.jpg"
                                        alt="3First slide"
                                    ></img>
                                </div>
                            </Carousel.Item>
                        </Carousel> */}
              </div>

              <div>
                {/* <div className='row'>
                            <div className='col-lg-6'>hi</div>
                            <div className='col-lg-6'>hello</div>

                        </div> */}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" style={{ padding: "30px" }}>
              <div
                className="home2card col-3"
                style={{ paddingBottom: "30px" }}
              >
                <div class="card">
                  <div
                    className="card3"
                    style={{
                      backgroundImage:
                        "url('https://www.imltravel.com/wp-content/uploads/2015/04/Beautiful-Beach-Wallpapers-HD-Pic__1468964249_223.176.25.239.jpg')",
                    }}
                  >
                    <div class="card-content">
                      <h2 class="card-title" style={{ color: "white" }}>
                        Vacationing Awesome
                      </h2>
                      <p
                        class="class-body"
                        style={{
                          color: "wheat",
                          fontFamily: "Nunito Sans, Sans-serif",
                        }}
                      >
                        It features a variety of live music on special
                        occasions, if you’re looking for something to enjoy.
                        occasions, if you’re looking for something to enjoy.
                        occasions, if you’re looking for something to enjoy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home2card col-3">
                <div class="card">
                  <div
                    className="card3"
                    style={{
                      backgroundImage:
                        "url('https://ucpathjobs.org/wp-content/uploads/2017/11/Spotlight_Globe_802x535.jpg')",
                    }}
                  >
                    <div class="card-content">
                      <h2 class="card-title" style={{ color: "white" }}>
                        Universal Studios
                      </h2>
                      <p
                        class="class-body"
                        style={{
                          color: "wheat",
                          fontFamily: "Nunito Sans, Sans-serif",
                        }}
                      >
                        Perfect for movie buffs, Universal Studios offers an
                        action-packed day filled with thrilling theme park rides
                        and shows in Universal Studios.Enjoy it.
                      </p>
                      <a href="#" class="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home2card col-3">
                <div class="card">
                  <div
                    className="card3"
                    style={{
                      backgroundImage:
                        "url('https://ucpathjobs.org/wp-content/uploads/2017/11/disneyland-2652760_1280-1024x682.jpg')",
                    }}
                  >
                    <div class="card-content">
                      <h2 class="card-title" style={{ color: "white" }}>
                        DisneyLand Kingdom
                      </h2>
                      <p
                        class="class-body"
                        style={{
                          color: "wheat",
                          fontFamily: "Nunito Sans, Sans-serif",
                        }}
                      >
                        If you're coming from Riverside County, Disneyland Park
                        in Anaheim is less than an hour away by car. Whether
                        young or old, taking pictures with Goofy and enjoy.
                      </p>
                      <a href="#" class="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home2card col-3">
                <div class="card">
                  <div
                    className="card3"
                    style={{
                      backgroundImage:
                        "url('https://ucpathjobs.org/wp-content/uploads/2017/11/GRAPES_100803__5-WEB-1024x683.jpg')",
                    }}
                  >
                    <div class="card-content">
                      <h2 class="card-title" style={{ color: "white" }}>
                        Explore Environment
                      </h2>
                      <p
                        class="class-body"
                        style={{
                          color: "wheat",
                          fontFamily: "Nunito Sans, Sans-serif",
                        }}
                      >
                        Everyone love taking pictures with the nature everyone
                        enjoys with it in beautiful way.Nature has its own
                        beauty and observing that in live is a treat to watch.
                      </p>
                      <a href="#" class="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container">
            <div className="crd">
              <div class="row" style={{ padding: "30px" }}>
                <div class="col1">
                  <div class="cardt h-150" style={{ margin: "0px" }}>
                    <div class="card3">
                      <div class="card-content">
                        <h2 class="card-title">Something Awsome</h2>
                        <p class="class-body">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium iste dicta numquam.
                        </p>
                        <a href="#" class="button">
                          Learn more
                        </a>
                      </div>
                    </div>
                    `; */}
          {/* <img
                      src="https://ucpathjobs.org/wp-content/uploads/2017/11/disneyland-2652760_1280-1024x682.jpg"
                      class="card-img-top"
                      alt="Not loading"
                      // height="300px"
                    /> */}
          {/* <div class="card-body">
                      <h5 class="card-title" style={{ color: "firebrick" }}>
                        Disneyland
                      </h5>
                      <p
                        style={{
                          backgroundColor: "whitesmoke",
                          textAlign: "justify",
                        }}
                        class="card-text"
                      >
                        If you're coming from Riverside County, Disneyland Park
                        in Anaheim is less than an hour away by car. Consider
                        getting an annual pass and any average Saturday can
                        become a Disney-themed day at the park. Whether young or
                        old, taking pictures with Goofy or flying through Space
                        Mountain. Whether young or old, Disneyland has something
                        to offer for everyone.Whether young or old
                      </p>
                    </div> */}
          {/* </div>
                </div>
                <div class="col2">
                  <div class="card h-100" style={{ margin: "0px" }}> */}
          {/* <img
                      src="https://ucpathjobs.org/wp-content/uploads/2017/11/GRAPES_100803__5-WEB-1024x683.jpg"
                      class="card-img-top"
                      alt="Not loading"
                      // height="200px"
                    /> */}
          {/* <div class="card-body">
                      <h5 class="card-title" style={{ color: "firebrick" }}>
                        Temecula
                      </h5>
                      <p
                        style={{
                          backgroundColor: "whitesmoke",
                          textAlign: "jsutify",
                        }}
                        class="card-text"
                      >
                        Just 45 minutes from the city of Riverside, you’ll find
                        yourself in Temecula Valley sampling award-winning and
                        artisanal wines. The Temecula Wine Country boasts over
                        40 wineries and has been tagged as a new wine region
                        hotspot.Old Town Temecula also features a variety of
                        antique shops, and live music on special occasions, if
                        you’re looking for something other than to enjoy.
                      </p>
                    </div> */}
          {/* </div>
                </div>
                <div class="col3">
                  <div class="card h-150" style={{ margin: "0px" }}> */}
          {/* <img
                      src="https://ucpathjobs.org/wp-content/uploads/2017/11/Spotlight_Globe_802x535.jpg"
                      class="card-img-top"
                      alt="Not loading"
                      // height="260pxjkjk"
                    /> */}
          {/* <div class="card-body">
                      <h5 class="card-title" style={{ color: "firebrick" }}>
                        Universal Studios
                      </h5>
                      <p
                        style={{
                          backgroundColor: "whitesmoke",
                          textAlign: "justify",
                        }}
                        class="card-text"
                      >
                        Perfect for movie buffs, Universal Studios offers an
                        action-packed day filled with thrilling theme park rides
                        and shows. you can get to Universal Studios in just an
                        hour to spend the day exploring Diagon Alley, Jurassic
                        Park and taking a tour of where famous films like Jaws &
                        Psycho were filmed. You can top off the day at CityWalk,
                        checking out LA's best shops, restaurants, and cinemas.
                      </p>
                    </div> */}
          {/* </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="container">
            <div
              className=""
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "black",
                opacity: "0.5",
              }}
            >
              <div className="container" style={{ padding: "20px" }}>
                <div className="row">
                  <div className="col-3" style={{ color: "whitesmoke" }}>
                    <div className="">
                      <h4>BUILD MY TRIP</h4>
                      <div style={{ padding: "20px" }}>
                        <p style={{ color: " #616161" }}>
                          To Travel is to live and collect moments not things
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3" style={{ color: "whitesmoke" }}>
                    <h4>SUPPORT & HELP</h4>
                    <div style={{ padding: "20px" }}>
                      <p style={{ color: " #616161" }}>
                        <li style={{ cursor: "pointer" }}>Privacy Policy</li>
                        <li style={{ cursor: "pointer" }}>
                          Refund and Cancellation Policy
                        </li>
                        <li style={{ cursor: "pointer" }}>
                          Terms and Conditions
                        </li>
                      </p>
                    </div>
                  </div>

                  <div className="col-3" style={{ color: "whitesmoke" }}>
                    <h4>FOLLOW WITH US</h4>
                    <div style={{ padding: "20px" }}>
                      <p style={{ color: " #616161" }}>
                        Join the thousands of others. There are many
                        destinations to explore
                      </p>
                    </div>
                  </div>
                  <div className="col-3" style={{ color: "whitesmoke" }}>
                    <h4>SERVICES</h4>
                    <div style={{ padding: "20px" }}>
                      <p style={{ color: " #616161" }}>
                        <li style={{ cursor: "pointer" }}>Managed Services</li>
                        <li style={{ cursor: "pointer" }}>Customer care</li>
                        <li style={{ cursor: "pointer" }}>Connect With Us</li>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
            <div style={{ color: "black", textAlign: "center" }}>
              <h6>Copyrights © 2023 BUILD YOUR TRIP. All Rights Reserved.</h6>
            </div>
          </div>
          ;
        </div>
      </div>

      {logout && <Models1 close={disable} />}
    </>
  );
};
export default Home2;

const Models1 = (props) => {
  const home = useNavigate();
  const [confirm, setconfirm] = useState();
  const conhan = () => {
    axios
      .post(
        `http://${API}:8002/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
          },
        }
      )
      .then((res) => {
        console.log("log out successfull");
        sessionStorage.clear();
        sessionStorage.removeItem("islogin");
        setTimeout(() => {
          home("/");
        }, 500);
        console.log("PLLLLLLLLLLLLLLLL", res);
      })
      .catch((err) => {
        console.log(err);

        if (err.response.data.detail == "Invalid token.") {
          sessionStorage.clear();
          sessionStorage.removeItem("islogin");
          setTimeout(() => {
            home("/");
          }, 500);
          // console.log("PPPPPPPPPPPPPPPPPPPPLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
        }
      });
    setTimeout(() => {
      sessionStorage.clear();
      sessionStorage.removeItem("islogin");
      setTimeout(() => {
        home("/");
      }, 500);
    }, 1000);
    // props.setlogin(0)
    // sessionStorage.clear();
    //localStorage.removeItem("TOKEN")
  };
  const cancelhan = () => {
    home("/home2");
  };
  return (
    <>
      <div className="modal1 display-block" style={{ width: "500px" }}>
        <div className="modal-main">
          <div className="modal_home">
            <div className="row">
              <div className="col-11"></div>
              <div
                className="col-1"
                onClick={props.close}
                style={{ cursor: "pointer" }}
              >
                <span class="material-symbols-outlined">close</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h1 style={{ fontSize: "40px" }}>DO YOU WANT TO LOGOUT??</h1>
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4 mt-3">
                <button className="btn btn-outline-danger" onClick={conhan}>
                  CONFIRM
                </button>
              </div>
              <div className="col-lg-4 mt-3">
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={props.close}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
