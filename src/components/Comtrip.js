import React, { useEffect } from "react";
import { useState } from "react";
// import Map1 from "./Map1";
import { API } from "../Api";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Tdetails from "./Tdetails";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment/moment";
import PlacesAutocomplete from "react-places-autocomplete";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Navlogo from "./Navlogo";

const Comtrip = (props) => {
  const home = useNavigate();
  const previoustrip = useNavigate();
  const [dis, setdis] = useState([{ day1: "" }]);
  const [adress, setadress] = useState("");
  const [lati, setlati] = useState([]);
  const [budget, setbudget] = useState("");
  const [tripid, settripid] = useState("");
  const [startdate, setStart] = useState("");
  const [todate, setTodate] = useState("");

  const [tripdetails, setTD] = useState([]);
  const [count, setCount] = useState(1);
  const [date, setdate] = useState("");
  const [daylength, setdaylength] = useState("");
  const [array, setarray] = useState([]);
  const [submit, setsubmit] = useState(true);
  const [addbt, setaddbt] = useState(false);
  const [back1, setback1] = useState("");
  const [btn, setbtn] = useState("");
  const [locationlist, setlocatiolist] = useState([]);
  const [latitudelist, setlatitudelist] = useState([]);
  const [fromdatefinal, setfromdatefinal] = useState("");
  const [todatefinal, settodatefinal] = useState("");

  // const [back3, setback3] = useState('')
  const [datesarray, setdatearray] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://${API}:8002/gettrip/${sessionStorage.getItem(
          "USEREMAIL"
        )}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
          },
        }
      )
      .then((res) => {
        // setdaylength(0)
        console.log("LLLLLLLLLLLLL", res);
        let arr = res.data.trips;
        arr.forEach((x) => {
          if (`${sessionStorage.getItem("TRIPID")}` === x.trip_id)
            setdaylength(`${x.days}`);
        });
        // console.log(arr)
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(daylength);

  useEffect(() => {
    settripid(sessionStorage.getItem("TRIPID"));
    setStart(sessionStorage.getItem("STARTDATE"));
    setTodate(sessionStorage.getItem("ENDDATE"));
    setfromdatefinal(sessionStorage.getItem("STARTDATE"));
    settodatefinal(sessionStorage.getItem("ENDDATE"));

    //console.log(props.comid)
    // (settripid(props.comid[0][0]))
    // setStart(props.comid[0][1])
    // setTodate(props.comid[0][2])
    console.log("tripidddd" + sessionStorage.getItem("TRIPID"));
  }, []);
  useEffect(() => {
    console.log(startdate, tripid, todate);
  });
  const [disform, setdisform] = useState(true);
  useEffect(() => {
    if (tripdetails.length > 0) {
      if (daylength == tripdetails.length) {
        setdisform(false);
      }
    }

    console.log("daylength", daylength, tripdetails.length);
    console.log(tripdetails.length);
    if (daylength == tripdetails.length) {
      // setdisform(false)
      setaddbt(true);
      setsubmit(false);
    } else {
      setaddbt(false);
      setsubmit(true);
    }
  });
  // useEffect(()=>{
  //
  // },[])
  const submithandle = (e) => {
    e.preventDefault();
    if (tripdetails.length < daylength - 1) {
      setdis([...dis, { day1: "" }]);
    }
    // if (date) {
    setCount(count + 1);
    // setdates([...dates, date]);

    setTD([
      ...tripdetails,
      {
        day: count,
        date: datesarray[count - 1],
        visit_place: locationlist,
        location: latitudelist,
        budget: budget,
      },
    ]);
    // }
    setlocatiolist([]);
    setlatitudelist([]);
    setbudget("");
    setdate("");
  };

  const fun = (d) => {
    setlati(d);
  };
  const mapdata = (p) => {
    setadress(p);
    // setempty(p)
  };
  // if(daylength===tripdetails.length){
  //     setaddbt(false)
  //     setsubmit(true)

  // }

  const han = () => {
    // console.log(
    //     {
    //         "trip_id":tripid,
    //         "trip_details":details
    //     }
    // )
    // }
    // {
    axios
      .post(
        `http://${API}:8002/CompleteTrip`,

        {
          trip_id: tripid,
          trip_details: tripdetails,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Details Saved Successfully");
        setTimeout(() => {
          home("/home2");
        }, 5000);
        // alert("success");
      })
      .catch(() => {
        alert("enter complete details");
      });
  };
  const minhan = () => {
    const today = startdate.split("-");
    // console.log(today)
    const dd = today[2];
    const mm = today[1];
    const yyyy = today[0];
    return yyyy + "-" + mm + "-" + dd;
  };
  const maxhan = () => {
    const today = todate.split("-");
    // console.log(today)
    const dd = today[2];
    const mm = today[1];
    const yyyy = today[0];
    return yyyy + "-" + mm + "-" + dd;
  };
  // console.log(`daylength` == tripdetails.length)
  // console.log(!`daylength` == tripdetails.length)
  // const add = () => {
  //     if (`daylength` == tripdetails.length) {
  //         return true;
  //     }
  //     else {
  //         return false;
  //     }
  // }

  const setbtn1 = () => {
    previoustrip("/previoustrip");
  };
  // const empty=()=>{

  // }
  const [empty, setempty] = useState("");
  const loacationadd = () => {
    let data = [...locationlist];
    let data1 = [...latitudelist];
    let op = adress;
    let op1 = lati;
    if (op1.length > 0) {
      setlocatiolist([...data, op]);
      setlatitudelist([...data1, op1]);
    }
    setadress("");
  };
  console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPOOOOOOOOOOOOOO", tripdetails);
  const remove = (k) => {
    let a = [...locationlist];
    let b = [...latitudelist];
    a.splice(k, 1);
    b.splice(k, 1);
    setlocatiolist(a);
    setlatitudelist(b);
  };
  const [dates, setdates] = useState([]);
  const datehandle = (e) => {
    let d = [...dates];
    if (dates.length > 0) {
      d.forEach((x) => {
        if (x != e.target.value) {
          setdate(e.target.value);
        } else {
          alert("day is already filled select another date");
          setdate("");
        }
      });
    } else {
      setdate(e.target.value);
    }
  };
  useEffect(() => {
    const getdatearray = (start, end) => {
      const dates = [];
      let currentdate1 = moment(start);
      let lastdate1 = moment(end);
      while (currentdate1 <= lastdate1) {
        dates.push(currentdate1.format("YYYY-MM-DD"));
        currentdate1 = currentdate1.clone().add(1, "days");
      }
      return dates;
    };
    const temp = getdatearray(fromdatefinal, todatefinal);

    setdatearray(temp);
  }, [startdate]);
  const handleChange = (address, lat) => {
    setadress(address);
    setlati(lat);
  };

  const searchOptions = {
    componentRestrictions: { country: ["in"] },

    // bounds: hydBounds,

    // radius: 2000
  };
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))

      .then(({ lat, lng }) => {
        setadress(address); // set the selected address

        setlati([lat, lng]);
      })

      .catch((error) => console.error("Error", error));
  };
  const backy = () => {
    home("/previoustrip");
  };
  const gohome = () => {
    home("/home2");
  };
  return (
    <div className="" style={{ height: "100vh", overflow: "hidden" }}>
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
            // className="buttonnavbar"
            className="btn btn-primary"
          >
            Back
          </p>
          {/* </Link> */}
        </div>
      </nav>
      {/* {datesarray.length > 0 && <div>hello</div>} */}
      <div className="back bg-image" style={{ marginTop: "-32px" }}>
        {/* <div className='btn1'>
                    <Link to='/previoustrip'><button className='btn btn-primary'>Back</button></Link>
                </div> */}
        <div className="card" style={{boxShadow: '2px 2px 2px 2px #d2b6b6',
    backgroundColor: ' #E2EBEE'}}>
          <div className="row">
            <div className="col-md-12">
              <div className="button">
                {/* <Link to="/previoustrip"><button className='btn btn-primary'>BACK</button></Link> */}
              </div>
              <h2 className="text-center">Complete Trip Details</h2>
              <div
                style={{
                  height: "400px",
                  overflow: "auto",
                }}
              >
                {tripdetails.length > 0 &&
                  tripdetails.map((i, k) => {
                    return (
                      <>
                        <div className="row">
                          <div className="col-11">
                            <div className="">
                              <div className="completeday">Day-{i.day}</div>
                            </div>
                            <div className="form-group">
                              <label>Date</label>

                              <input
                                // type="date"
                                disabled="true"
                                className="form-control"
                                value={i.date}
                              />
                            </div>
                            <div className="form-group">
                              <label>Visiting Spots</label>
                              <div
                                className="mt-2 "
                                style={{
                                  overflowX: "auto",
                                  padding: "10px",
                                  backgroundColor: "",
                                  width: "100%",
                                  height: "80px",
                                  border: "1px solid black",
                                  borderRadius: "10px",
                                }}
                              >
                                {i.visit_place.map((i, k) => {
                                  return (
                                    <>
                                      <div className="col-11">
                                        <div className="row">
                                          <div className="col-11">
                                            <div
                                              style={{
                                                lineHeight: "1",
                                                fontSize: "87%",
                                                fontWeight: "490",
                                                fontStyle: "initial",
                                              }}
                                            >
                                              <span class="material-icons">
                                                location_on
                                              </span>{" "}
                                              {i}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="form-group">
                              <label>Budget</label>
                              <input
                                // type="number"
                                disabled
                                className="form-control"
                                value={i.budget}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                {disform && (
                  <form onSubmit={submithandle}>
                    <div className="completeday">Day-{count}</div>

                    {/* {dis.map((i, k) => (
                  <> */}

                    <div className="row">
                      <div className="col-11">
                        <div className="">
                        <div>
                            <label>Date</label>
                            {datesarray &&
                              datesarray.map((i, k) => {
                                if (k == count - 1) {
                                  return (
                                    <>
                                      <input
                                        // type="date"
                                        required
                                        disabled="true"
                                        className="form-control"
                                        // min={minhan()}
                                        // max={maxhan()}
                                        value={i}
                                        // placeholder="selcet date"
                                        // onChange={datehandle}
                                      />
                                    </>
                                  );
                                }
                              })}
                          </div>
                          <label>Visit Spots & Location</label>
                          <div className="row">
                            <div className="col-10">
                              <div className="canvas">
                                <PlacesAutocomplete
                                  value={adress}
                                  onChange={handleChange}
                                  onSelect={handleSelect}
                                  searchOptions={searchOptions}
                                >
                                  {({
                                    getInputProps,
                                    suggestions,
                                    getSuggestionItemProps,
                                    loading,
                                  }) => (
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        {...getInputProps({
                                          placeholder: "Search Places ...",
                                        })}
                                      />

                                      <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map((suggestion) => {
                                          const className = suggestion.active
                                            ? "suggestion-item--active"
                                            : "suggestion-item";
                                          // inline style for demonstration purpose
                                          const style = suggestion.active
                                            ? {
                                                backgroundColor: "#fafafa",
                                                cursor: "pointer",
                                              }
                                            : {
                                                backgroundColor: "#ffffff",
                                                cursor: "pointer",
                                              };
                                          return (
                                            <div
                                              className="input-suggestion"
                                              {...getSuggestionItemProps(
                                                suggestion,
                                                {
                                                  style,
                                                }
                                              )}
                                            >
                                              {/* {suggestion.description.includes({ y }) && ( */}
                                              <>
                                                <i class="material-icons">
                                                  location_on
                                                </i>{" "}
                                                <span>
                                                  {suggestion.description}
                                                </span>
                                              </>
                                              {/* )} */}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </PlacesAutocomplete>
                              </div>
                              {/* <Map1 map1={mapdata} LatLng1={fun} empty={empty} /> */}
                            </div>
                            <div className="col-1" style={{marginLeft: '-13px'}}>
                              <button
                                className="btn btn-outline-primary"
                                onClick={loacationadd}
                                type="button"
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        

                      <div
                        className="mt-2"
                        style={{
                         
                          overflowX: "auto",
                          padding: "10px",
                          backgroundColor: "",
                          width: "100%",
                          height: "80px",
                          border: "1px solid black",
                          borderRadius: "10px",
                        }}
                      >
                        {locationlist &&
                          locationlist.map((i, k) => {
                            return (
                              <>
                                <div className="col-11">
                                  <div className="row">
                                    <div className="col-11">
                                      <div
                                        style={{
                                          lineHeight: "1",
                                          fontSize: "100%",
                                          fontWeight: "490",
                                          fontStyle: "initial",
                                        }}
                                      >
                                        <span class="material-icons">
                                          location_on
                                        </span>{" "}
                                      </div>
                                    </div>

                                    <div
                                      className="col-10"
                                      style={{
                                        lineHeight: "1",
                                        fontSize: "87%",
                                        fontWeight: "490",
                                        fontStyle: "initial",
                                      }}
                                    >
                                      {i}
                                    </div>
                                    <div className="col-1" >
                                      <button
                                        type="button"
                                        onClick={() => remove(k)}
                                        style={{
                                          height: "25px",
                                          width: "30px",
                                          padding: "0px",
                                        }}
                                        className="btn btn-primary"
                                      >
                                        <span class="material-symbols-outlined">
                                          close
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                      </div>
                      <label>Budget</label>
                      <div  className="">
                      
                      <input
                        type="number"
                        required
                        min={1000}
                        step={500}
                        value={budget}
                        placeholder="Enter Day Wise Budget "
                        className="form-control"
                        onChange={(e) => setbudget(e.target.value)}
                      />
                    </div>
                      </div>
                      </div>
                    </div>
                    {/* {datesarray.map((i, k) => {
                                return (
                                  <>
                                    <li key={i}>{i}</li>
                                  </>
                                );
                              })} */}
                    
                    <div>{/* <button type='submit'>ADD</button> */}</div>
                    {/* {dis.length - 1 === k && ( */}
                    <div className="mt-3">
                      {/* {addbt &&  */}
                      <button
                        type="submit"
                        disabled={addbt}
                        className="btn btn-outline-primary"
                      >
                        Add Day
                      </button>
                      {/* } */}
                    </div>
                    {/* )} */}
                    {/* </> */}
                    {/* ))} */}
                  </form>
                )}
              </div>

              {/* {submit && */}
              <div div className="row">
                <div className="col-5"></div>
                <div className="col-2">
                  <button
                    type="submit"
                    onClick={han}
                    disabled={submit}
                    className="btn btn-outline-primary"
                  >
                    Submit
                  </button>
                </div>

                {/* <button
                  onClick={setbtn1}
                  style={{ marginLeft: "250px" }}
                  className="btn btn-primary"
                >
                  Back
                </button> */}
                {/* {daylength && <div>{daylength}</div>} */}
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
    </div>
  );
};
export default Comtrip;
