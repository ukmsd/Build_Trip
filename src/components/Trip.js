import { useEffect, useState } from "react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import trip from "./images/tripimage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
// import Dummy from "./Dummy";
// import { useEffect } from "react";
import Map1 from "./Map";
import axios from "axios";
import { API } from "../Api";

// import { toast } from "react-toastify";
import { toast, ToastContainer } from "react-toastify";
import { number } from "yup";

// import GoogleMapReact from 'google-map-react';

const Trip = (props) => {
  const back = useNavigate();
  const [place, setPlace] = useState("");
  const [fromdate, setFromdate] = useState("");
  const [todate, setTodate] = useState("");
  const [budget, setbudget] = useState("");
  const [date, setDate] = useState(new Date());
  // const currentDate = new Date();
  // const [emails,setEmails]=useState('');
  const [tags, setTags] = useState([]);
  const [tagtext, settagtext] = useState(false);
  const [dismodel, setdismodel] = useState(false);
  const [days, setdays] = useState("");
  const [latitude, setlatitude] = useState([]);
  const [tid, settid] = useState("");
  const [email, setemail] = useState("");

  const addTags = (e) => {
    let d = [...tags];
    if (email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
      if (!emailPattern.test(email)) {
        toast.warn("Invalid Email Address");
      } else if (tags.length > 0) {
        d.forEach((x) => {
          if (x != email) {
            setTags([...tags, email]);
            setemail("");
          } else {
            toast.warn("email already exists");
          }
        });
      } else if (tags.length == 0) {
        setTags([...tags, email]);
        setemail("");
      }

      // else{
      //   toast.warn("Email already exists")

      // }

      // settagtext(false);
    } else {
      toast.warn("Enter Email");
    }
  };
  const removeTags = (e) => {
    setTags(tags.filter((_, index) => index !== e));
  };
  const [token, settoken] = useState("");
  useEffect(() => {
    settoken(sessionStorage.getItem("TOKEN"));
    console.log(token);
  }, []);
  console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" + token);
  const [invitebtn, setinvitebtn] = useState(false);
  const invited = () => {
    setinvitebtn(true);
  };
  const formhandle = (e) => {
    e.preventDefault();
    let a = place;
    let b = fromdate;
    let c = todate;
    let d = tags;
    let f = budget;
    let g = data;
    var date1 = new Date(b);
    var date2 = new Date(c);
    var time_difference = date2.getTime() - date1.getTime();
    var result = time_difference / (1000 * 60 * 60 * 24);
    let h = result + 1;
    setdays(h);
    console.log({
      Place: a,
      Fromdate: b,
      Todate: c,
      Tags: d,
      Budget: f,
      Geolocation: g,
      days: h,
      LATLANG: latitude,
    });
    sessionStorage.setItem("STARTDATE", b);
    sessionStorage.setItem("ENDDATE", c);

    if (tags.length > 0) {
      {
        invited();
      }
      axios
        .post(
          `http://${API}:8002/createtrip`,

          {
            trip_name: place,
            start_date: fromdate,
            end_date: todate,
            days: h,
            email: tags,
            budget: budget,
            address: data,
            location: latitude,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          settid(res.data.trip_id);
          sessionStorage.setItem("tid", res.data.trip_id);
          sessionStorage.setItem("USERID", res.data.user_id);
          sessionStorage.setItem("TRIPID", res.data.trip_id);
          setPlace("");
          // setinvitebtn(false);

          // if(res.statusText==="OK"){
          //     setdismodel(true)
          // }

          setTimeout(() => {
            setdismodel(true);
          }, 100);
        })
        .catch(() => {
          toast.warn("Enter Correct details");
        });
    } else {
      toast.warn("Enter All Details");
    }

    // console.log(Dummy)

    props.tripid(tid);
  };
  const text = () => {
    settagtext(true);
  };

  const [data, setdata] = useState("");
  const fun = (d) => {
    setdata(d);
    console.log("data" + data);
  };
  const fun12 = (c) => {
    setlatitude(c);
  };
  props.map1(data);

  useEffect(() => {
    console.log("asdddd" + sessionStorage.getItem("TOKEN"));
  }, []);

  const mindate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const mindate1 = () => {
    const today = fromdate.split("-");
    const dd = today[2];
    const mm = today[1];
    const yyyy = today[0];
    return yyyy + "-" + mm + "-" + dd;
  };
  const dummy = () => {
    toast.warn("User Must First Login !!!");
    setTimeout(() => {
      window.location.replace("/login");
    }, 2000);
  };
  const handleKeyPress = (e) => {
    const invalidKeys = ["+", "-", "="];
    if (invalidKeys.includes(e.key)) {
      e.preventDefault(); 
    }
  };
  
  useEffect(() => {
    // alert(sessionStorage.getItem("USEREMAIL"))
    setTags([...tags, sessionStorage.getItem("USEREMAIL")]);
  }, []);

  return (
    <>
      <div
        className="back bg-image"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="card" style={{ padding: "10px 30px",boxShadow: '2px 2px 2px 2px #d2b6b6',
    backgroundColor: 'whitesmoke' }}>
              <div className="">
                <div className="col-1">
                  <Link to="/home2">
                    <span
                      style={{
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                        color: "black",
                      }}
                      class="material-symbols-outlined"
                    >
                      arrow_back
                    </span>
                  </Link>
                </div>
                <h2 className="text-center">Plan A Trip</h2>

                <form onSubmit={formhandle}>
                  <div>
                    <div className="form-group">
                      <label>Trip Name :</label>
                      <input
                        style={{ border: "1px solid blackj" }}
                        type="text"
                        className="form-control"
                        name="placename"
                        value={place}
                        onKeyDown={(e) => handleKeyPress(e)}
                        placeholder="Enter Trip Name"
                        required
                        onChange={(e) => setPlace(e.target.value)}
                      />
                    </div>
                    <div className="form-group ">
                      {/* <label>DATE</label> */}
                      <label style={{ whiteSpace: "nowrap" }}>Date :</label>

                      <div className="row dates ">
                       
                        <div className="col-md-12">
                          <div className="row">
                          {/* <div className="col-md-2">
                          From
                        </div> */}
                            <div className="col-md-6 d-flex">
                            <label style={{padding:"2px",paddingTop:"4px"}}>From: </label> <input
                                type="date"
                                min={mindate()}
                                style={{ border: "1px solid blackj" }}
                                className="form-control"
                                required
                                value={fromdate}
                                // value={fromdate.toISOString().substr(0, 10)}
                                onChange={(e) => setFromdate(e.target.value)}
                                // onChange={(e) => {
                                //     const selectedDate = new Date(e.target.value);
                                //     if (selectedDate >= currentDate) {
                                //         setFromdate(selectedDate);
                                //     }
                                // }
                                // }
                              />
                            </div>
                            {/* <div className="col-4"> */}

                            {/* <DatePicker selected={date}  dateFormatCalendar="DD-MM-YYYY"  className="form-control" required minDate={new Date()} onChange={(d)=>setDate(d)}/> */}
                            {/* </div> */}
                            {/* <div className="col-md-2">
                          To
                        </div> */}
                            <div className="col-md-6 d-flex">
                            <label style={{padding:"2px",paddingTop:"4px"}}>To: </label>
                            <input
                                type="date"
                                min={mindate1()}
                                style={{ border: "1px solid blackj" }}
                                className="form-control"
                                value={todate}
                                required
                                onChange={(e) => setTodate(e.target.value)}
                              />
                            </div>
                            {/* <div className="col-4"> */}

                            {/* <DatePicker selected={todate}  dateFormatCalendar="DD-MM-YYYY" minDate={date} className="form-control" onChange={(p=>{setTodate(p)})}/> */}

                            {/* </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Estimated Budget:</label>{" "}
                      <input
                        style={{ border: "1px solid black" }}
                        type="number"
                        required
                        min={0}
                        step={1}
                        value={budget}
                        placeholder="Enter Estimated Budget"
                        onChange={(e) => setbudget(e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e)}
                        className="form-control"
                      />
                    </div>
                    {/* <div className="form-group ">
                      <label> ESTIMATED BUDGET:</label>
                      <input
                        style={{ border: "1px solid black" }}
                        type="number"
                        required
                        min={1000}
                        step={500}
                        pattern="[0-9]*"
                        value={budget}
                        onChange={(e) => setbudget(e.target.value)}
                        className="form-control"
                      />
                    </div> */}
                    <div className=" form-group ">
                      <label>State Location:</label>
                      <Map1 map={fun} LatLng={fun12} />

                      {/* <input  style={{ border: "1px solid blackj"}} type="search" className="form-control" /> */}
                    </div>

                    <div className="form-group">
                      <div className="tags-input">
                        <label>Emails :</label>
                        <div className="row">
                          <div className="col-10">
                            <input
                              style={{ border: "1px solid black" }}
                              type="email"
                              value={email}
                              onKeyDown={(e) => handleKeyPress(e)}
                              onChange={(e) => setemail(e.target.value)}
                              className="form-control mb-1"
                              placeholder="Enter Email"
                              // onKeyDown={(e) =>
                              //   e.key === "Tab" ? addTags(e) : null
                              // }
                            />
                          </div>
                          <div className="col-1">
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              onClick={addTags}
                            >
                              Add
                            </button>
                          </div>
                        </div>

                        {/* <input
                          style={{ border: "1px solid black" }}
                          type="email"
                          onChange={text}
                          className="form-control mb-1"
                          placeholder="Enter Email"
                          // onKeyDown={(e) =>
                          //   e.key === "Tab" ? addTags(e) : null
                          // }
                        /> */}
                        {/* {tagtext && (
                          <div className="">enter tab key to add email</div>
                        )} */}
                      </div>
                    </div>
                    <div
                      className="emailbox"
                      required
                      style={{ border: "1px solid black" }}
                    >
                      <div className="col-12">
                        <ul>
                          {tags.map((i, index) => (
                            <li key={index} className="eachemail">
                              <span>{i}</span>
                              {index === 0 ? (
                                " "
                              ) : (
                                <button>
                                  <i onClick={() => removeTags(index)}>
                                    <button
                                      type="button"
                                      class="close"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </i>
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {sessionStorage.getItem("Access") ? (
                      <div className="text-center mt-3" style={{}}>
                        <button
                          style={{
                            color: "black",
                            width: "145px",
                            height: "40px",
                          }}
                          type="submit"
                          className="btn btn-outline-primary"
                          disabled={invitebtn}
                        >
                          Invite
                        </button>
                      </div>
                    ) : (
                      <div className="text-center mt-3">
                        <button
                          onClick={dummy}
                          className="full btn btn-primary"
                        >
                          INVITE
                        </button>
                      </div>
                    )}
                  </div>
                </form>
                {dismodel && (
                  <Modals
                    tids={tid}
                    data={place}
                    data1={fromdate}
                    data2={todate}
                    data3={budget}
                    data4={tags}
                    data5={data}
                    data6={days}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default Trip;

const Modals = (props) => {
  const hide = () => {
    props.hide();
  };
  return (
    <>
      <div className="modal display-block">
        <section className="modal-main" style={{ width: "46%" }}>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h6>
                YOUR TRIP CREATED SUCCESSFULLY GOTO{" "}
                <Link
                  to="/previoustrip"
                  style={{
                    marginLeft: "0px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  TRAVEL HISTORY
                </Link>
                AND FILL DAY WISE DETAILS{" "}
              </h6>
              {/* <div className=" col-lg-12">
              <h1 style={{ textAlign: "center" }}>This is your trip id:</h1>
            </div>
            <div className=" col-lg-12">
              <h6 style={{ textAlign: "center" }}>{props.tids}</h6>
            </div> */}

              <div className="mt-5" style={{ marginLeft: "230px" }}>
                {/* <Link to="/Comtrip">
                <button type="button" class="btn btn-outline-primary me-4">
                  Complete Trip Details
                </button>
              </Link> */}

                <Link to="/home2">
                  <button type="button" class="btn btn-outline-primary">
                    OK, GO TO HOME >>>>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
