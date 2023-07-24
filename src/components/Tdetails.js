import React from "react";
import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import Navlogo from "./Navlogo";
import { API } from "../Api";
// import googleMapReact from 'google-map-react';
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Tdetails = (props) => {
  const budget = useNavigate();
  const gohome1 = useNavigate();
  const previoustrip = useNavigate();
  const Book = useNavigate();
  // const [abc, setabc] = useState(props.data);
  // const [def, setdef] = useState(props.data1);
  const [datas, setdatas] = useState([]);
  const [datas1, setdatas1] = useState([]);
  const [urls, seturl] = useState("");
  const [showmap, setshowmap] = useState("hyderabad");
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");
  const [day, setday] = useState("1");
  const [back, setback] = useState("");
  const [locindex, setlocindex] = useState(0);
  const [book, setbook] = useState();
  useEffect(() => {
    // console.log(`http://${API}:8002/future/${abc}/`);
    console.log(sessionStorage.getItem("TOKEN"));
    axios
      .get(
        `http://${API}:8002/future/${sessionStorage.getItem("TDETAILS.JS")}/`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
          },
        }
      )
      .then((res) => {
        setdatas(res.data.trip_details);
        console.log(res);
      })
      .catch((e) => console.log(e));
    // return(
    //   setdatas([])
    // )
  }, []);
  const maphandle1 = (q) => {
    // alert("yyyyyyyyyyyyyyyyyy")
    // setlocindex(q);

    // setlocindex(j)

    // console.log("KKKKKKKKK",k)
    console.log("qqqqqqqqq", q);

    // let h = [...datas]
    // let j = h[k].location
    // console.log("llllllllllllllllllllllllllllllll:",j)
    const lat = q[0];
    const long = q[1];
    const iframedata = document.getElementById("iframeId");

    iframedata.src = `https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`;
  };
  const setback1 = () => {
    previoustrip("/previoustrip");
  };
  const gohome = () => {
    gohome1("/home2");
  };
  console.log("qwedata", datas);

  const bookingroom = () => {
    window.open(
      "https://www.booking.com/index.en.html?aid=309654;label=hotels-english-en-india-hx02gXfz6EHpTdUXfvS5MAS432876510917:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-22550601:lp9062141:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg;ws=&gclid=EAIaIQobChMI4Z3Ny-bx_wIVNIdLBR2MKAWBEAAYASAAEgK51_D_BwE",
      "_blank"
    );
  };
  const backy = () => {
    budget("/previoustrip");
  };
  return (
    <>
      <nav
        className="navbar justify-content-between"
        style={{ backgroundColor: "#E2EBEE" }}
      >
        <p
          onClick={gohome}
          style={{ cursor: "pointer" }}
          className="navbar-brand"
        >
          <div
            className="brand d-flex"
            style={{ gap: "10px", paddingLeft: "20px", cursor: "pointer" }}
          >
            <Navlogo />
            <h4 className="ki" style={{ marginTop: "4px" }}>
              BUILD YOUR TRIP
            </h4>
          </div>
        </p>

        <div className=" justify-content-end">
          {/* <ul> */}
          {/* <li>  {disablebutton && <button onClick={handle1} className="btn btn-primary">ADD EXPENSE</button>}</li> */}
          {/* <li><button onClick={gohome} className="btn btn-link">Go To Home</button></li> */}
          {/* </ul> */}
        </div>
        <div style={{ marginRight: "40px" }}>
          {/* <Link to="/previoustrip"> */}
          <p
            onClick={backy}
            //  style={{ boxShadow: "3px 4px" }}
            style={{
              border: "none",
              fontFamily: "Nunito Sans, Sans-serif",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              marginRight: "40px",

              // color: '#000000',
              padding: "0px 8px 0px 8px",
            }}
            className="btn btn-primary"

            //  className="buttonnavbar"
          >
            Back
          </p>
          {/* </Link> */}
        </div>
      </nav>
      <div className="back">
        <div className="row">
          {datas.length == 0 && (
            <h2
              style={{
                position: "absolute",
                top: "40%",
                left: "30%",
              }}
            >
              THERE IS NO TRIP DETAILS FOR THIS TRIP
            </h2>
          )}
          {datas && (
            <>
              <div className="col-lg-3 mt-3">
                {/* <div className='' style={{backgroundColor:"white", width:"347px"}}>
              <button style={{ backgroundColor: "white" }} onClick={setback1} className='btn btn-link'>BACK</button>
            </div> */}
                <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                  Day Details
                </h4>
                <div style={{ paddingRight: "20px" }}>
                  <select
                    className="form-select"
                    name="day"
                    onChange={(e) => setday(e.target.value)}
                    style={{ width: "300px", margin: "auto" }}
                  >
                    {datas.map((i, k) => {
                      return (
                        <>
                          <option value={k + 1}>Day {k + 1}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <br />

                <div className="tdetailsm">
                  {datas.map((i, k) => {
                    if (day == k + 1) {
                      return (
                        // <li key={k}>
                        <div className="card">
                          <div className="card-header">
                            <h3 style={{ color: "black" }}>Day:{i.day}</h3>
                          </div>
                          <div
                            className="card-body a"
                            // style={{ minWidth: "max-content" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignitems: "center",
                                gap: "35%",
                              }}
                            >
                              <p>Date</p>
                              <p>{i.date}</p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignitems: "center",
                                gap: "23%",
                              }}
                            >
                              <p>Budget</p>
                              <p>
                                <span
                                  class="material-symbols-outlined"
                                  // style={{marginTop:"-10px"}}
                                >
                                  currency_rupee
                                  {i.budget}
                                </span>
                              </p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignitems: "center",
                                gap: "11%",
                                // marginTop:"-10px"
                              }}
                            >
                              <p>Visit Spots</p>
                              <div>
                                {i.visit_place.map((p, q) => {
                                  return (
                                    <>
                                      <div style={{ display: "flex" }}>
                                        <i
                                          key={q}
                                          style={{
                                            display: "flex",
                                            color: `#${(
                                              Math.random() *
                                              0xfffff *
                                              1000000
                                            )
                                              .toString(16)
                                              .slice(0, 6)}`,
                                            cursor: "pointer",
                                          }}
                                          onClick={() => {
                                            maphandle1(i.location[q]);
                                            // setlocindex(q);
                                          }}
                                          // className={
                                          //   locindex === q ? "locback" : ""
                                          // }
                                        >
                                          <span
                                            class="material-icons"
                                            style={{
                                              paddingTop: "6px",

                                              color: "green",
                                              cursor: "pointer",
                                            }}
                                          >
                                            location_on
                                          </span>{" "}
                                          <p
                                            style={{
                                              paddingTop: "6px",
                                              width: "100%",
                                              lineHeight: "1",
                                              fontSize: "87%",
                                              fontWeight: "490",
                                              fontStyle: "initial",
                                            }}
                                          >
                                            {p}
                                          </p>
                                        </i>
                                      </div>

                                      {/* {(i.location[q])} */}
                                      {maphandle1(i.location[0])}
                                    </>
                                  );
                                })}
                              </div>
                            </div>

                            {/* <table className='table'>
                              <thead>
                                <tr>
                                  <th style={{color:"black"}}>DATE</th>
                                  <td style={{color:"black"}}>DATE</td>
                                </tr>
                                <tr>
                                <th style={{color:"black"}}>BUDGET</th>
                                <td style={{color:"black",display: "inline-flex",fontSize: "larger"}}><span class="material-symbols-outlined" style={{ paddingTop: "5px" }}>
                            currency_rupee</span>{i.budget}</td>
                                </tr>
                                <tr>
                                <th style={{color:"black", verticalAlign: "middle"}}>VISIT SPOTS</th>
                                <td style={{color:"black"}}>{i.visit_place.map((p, q) => {
                                    return (
                                      <>
                                        <tr style={{color:"black"}}>
                                          <i key={q} onClick={() => maphandle1(i.location[q])} ><span class="material-icons">location_on</span>{" "}{p}ttttttttttttttttttttt</i>
                                          
                                        </tr>

                                        {maphandle1(i.location[0])}
                                      </>
                                    )

                                  })}</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  
                                  
                                </tr>
                              </tbody>
                            </table> */}
                          </div>

                          {/* <div style={{ marginRight: "50px" }}><h6>Date:</h6>
                            <div style={{ paddingTop: "5px", paddingRight: "40px" }}>{i.date}</div>
                          </div>
                          <div style={{ marginRight: "50px", paddingRight: "35px" }}><h6>Budget:</h6><span class="material-symbols-outlined" style={{ paddingTop: "5px" }}>
                            currency_rupee</span>
                            {i.budget}
                          </div>
                          <div><h5 onClick={() => maphandle1(k)}>
                            <h6>Visit_Place:</h6></h5></div>
                          <div>
                            {i.visit_place.map((p, q) => {
                              return (
                                <>
                                  <div>
                                    <i key={q} onClick={() => maphandle1(i.location[q])} ><span class="material-icons">location_on</span>{" "}{p}</i>

                                  </div>

                                  {/* {(i.location[q])} */}
                          {maphandle1(i.location[0])}
                          {/* </> */}
                          {/* ) */}

                          {/* })} */}
                          {/* </div> */}

                          {/* {maphandle1(k)} */}
                          {/* <div> */}
                          {/* <button onClick={submithandle} className='btn btn-outline-primary'>Spent Amount</button> */}
                          {/* </div> */}
                        </div>

                        // </li>
                      );
                    }

                    // }
                  })}
                </div>
                <div>
                  <button
                    onClick={bookingroom}
                    style={{ marginTop: "30px", marginLeft: "80px" }}
                    className="btn btn-primary"
                  >
                    Book A Room
                  </button>
                </div>
              </div>
              <div className="col-lg-9">
                <iframe
                  id="iframeId"
                  style={{ height: "100vh", width: "100%" }}
                ></iframe>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Tdetails;
