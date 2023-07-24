import "bootstrap/dist/css/bootstrap.css";
import Dummy from "./Dummy";
// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link, json, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { auto } from "@popperjs/core";
import { date } from "yup";
import Navlogo from "./Navlogo";
import { API } from "../Api";
// import { Type } from "react-toastify/dist/utils";
// import { Link } from 'react-router-dom';

const Ptrips = (props) => {
  const gohome1 = useNavigate();
  const tdetails = useNavigate();
  const arr1 = [];
  const arr2 = [];
  // const currentDate = new Date();
  const [show, setShow] = useState(Dummy);
  const [past, setpast] = useState(arr1);
  const [current, setcurrent] = useState(arr2);
  const [f, setf] = useState([]);
  const [g, setg] = useState([]);
  const [df, setdf] = useState(true);
  const [dp, setdp] = useState(false);
  const [du, setdu] = useState(false);
  const budget = useNavigate();
  const [gg, setgg] = useState([]);
  const [upcoming, setupcoming] = useState([]);
  const [allemails, setallemails] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsperpage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = f.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const customStyles = {
    cells: {
      style: {
        padding: "10px",
      },
    },
    headcells: {
      style: {
        backgroundColor: "#f8f8f8",
      },
    },
  };
  const totalPages = Math.ceil(f.length / itemsPerPage);
  const pageNumbers = [];
  const maxPageNumbers = 5;

  if (totalPages <= maxPageNumbers) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const leftDotIndex = Math.max(currentPage - 2, 1);
    const rightDotIndex = Math.min(currentPage + 2, totalPages);

    if (currentPage <= maxPageNumbers - 2) {
      for (let i = 1; i <= maxPageNumbers - 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - maxPageNumbers + 3) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages - maxPageNumbers + 2; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = leftDotIndex; i <= rightDotIndex; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }
  }

  useEffect(() => {
    // console.log("tokens", sessionStorage.getItem("TOKEN"));
    // console.log(sessionStorage.getItem("USERID"));
    // console.log("op"+`http://${API}.amazonaws.com:8002/future/${localStorage.getItem("USERID")}`)
    axios
      .get(
        `http://${API}:8002/gettrip/${sessionStorage.getItem("USEREMAIL")}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
          },
        }
      )
      .then((res) => {
        // console.log("play1", res);
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        let dday = (yyyy + "-" + mm + "-" + dd).split("-").join("");
        // console.log("PPPPPPPPPPPPPPPPP", (yyyy + "-" + mm + "-" + dd).split("-").join(""))
        let arr = res.data.trips;
        console.log(res.data.trips);

        //         let arro=arrQ.filter((a) => a.forEach((x) => {
        //           [x.email].forEach((i)=>{
        //             if(i==`${sessionStorage.getItem("USEREMAIL")}`){
        // return a;
        //             }
        //           })
        //         }))
        //         let arr=arro
        // console.log("arro",arro)

        // console.log('res',)
        arr.sort((a, b) => (a.start_date > b.start_date ? 1 : -1));
        let arr1 = arr.filter((a) => a.start_date.split("-").join("") >= dday);

        let arr2 = arr.filter((a) => a.start_date.split("-").join("") < dday);
        let arr3 = arr.find((a) => a.start_date.split("-").join("") >= dday);
        // console.log("PPPPPPPPPPPPP", (res.data[0].start_date))

        setf(arr1);
        setg(arr2);
        setupcoming([arr3]);
        // console.log("dsteeeeeeeeeee", new Date())
      })
      .then((res) => {
        alert("futrure5555555555555555" + res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  // useEffect(() => {
  // axios.get(`http://ec2-13-233-151-187.ap-south-1.compute.amazonaws.com:8002/past/645cea4d1dc847f1100c0186`,
  // { headers:{"Authorization":`Bearer ${localStorage.get("TOKEN")}`} }
  // )
  // .then(
  //     res => {
  //         setg(res.data)
  //     }
  // )
  // .then(
  //     res => {
  //         console.log("lo")
  //         console.log(res)
  //     }
  // )
  // .catch((e) => console.log(e))
  // }, []);

  // useEffect(() => {
  //     const date = new Date();
  //     const year = date.getFullYear();
  //     const month = String(date.getMonth() + 1).padStart(2, '0');
  //     const day = String(date.getDate()).padStart(2, '0');
  //     const today = `${year}-${month}-${day}`

  //     let d = [...Dummy]
  //     d.forEach((x, i) => {
  //         console.log(x)
  //         let arr1 = []
  //         let arr2 = []
  //         // console.log("before" + x.Fromdate)
  //         let temp = d[i].Fromdate.split('-').reverse().join('-')
  //         // console.log("after" + temp)
  //         console.log(today)
  //         if (temp < today) {
  //             arr1.push(d[i])

  //         }
  //         else {
  //             arr2.push(d[i])
  //         }

  //     })
  //     // console.log("arr1" + arr1)
  //     // console.log("arr2" + arr2)

  //     setpast([...arr1])
  //     setcurrent([...arr2])
  // }, [])

  // const deletehandle = (k) => {
  //     let d = [...show]
  //     console.log("abcd" + d)
  //     d.splice(k, 1)
  //     console.log("abcde" + d)
  //     setShow(d)

  // }
  const detailhandle = (trip_id) => {
    let d = [...currentItems];
    let data = d[trip_id].trip_id;
    // let obj=[]
    // obj.push(Object.values(data))

    // console.log(data);
    props.tdetailsdata(data);
    localStorage.setItem("TRIPIDTDETAILS", data);
    sessionStorage.setItem("TDETAILS.JS", data);

    tdetails("/tdetails");
  };
  const detailhandleupc = (trip_id) => {
    let d = [...upcoming];
    let data = d[trip_id].trip_id;
    // let obj=[]
    // obj.push(Object.values(data))

    // console.log(data);
    props.tdetailsdata(data);
    localStorage.setItem("TRIPIDTDETAILS", data);
    sessionStorage.setItem("TDETAILS.JS", data);

    tdetails("/tdetails");
  };
  const detailhandle123 = (trip_id) => {
    let d = [...currentItems1];
    let data = d[trip_id].trip_id;
    // let obj=[]
    // obj.push(Object.values(data))

    // console.log(data);
    props.tdetailsdata(data);
    localStorage.setItem("TRIPIDTDETAILS", data);
    sessionStorage.setItem("TDETAILS.JS", data);

    tdetails("/tdetails");
  };

  const disf = () => {
    setdf(true);
    setdp(false);
    setdu(false);
  };
  const disp = () => {
    setdf(false);
    setdp(true);
    setdu(false);
  };
  const disu = () => {
    setdf(false);
    setdp(false);
    setdu(true);
  };

  const tid = (trip_id) => {
    let a = [...currentItems];
    let b = a[trip_id].trip_id;
    let c = a[trip_id].start_date;
    let d = a[trip_id].end_date;
    sessionStorage.setItem("TRIPID", b);
    sessionStorage.setItem("STARTDATE", c);
    sessionStorage.setItem("ENDDATE", d);
    // props.comtripid(e)
    tdetails("/Comtrip");
  };

  const tidupc = (trip_id) => {
    let a = [...upcoming];
    let b = a[trip_id].trip_id;
    let c = a[trip_id].start_date;
    let d = a[trip_id].end_date;
    sessionStorage.setItem("TRIPID", b);
    sessionStorage.setItem("STARTDATE", c);
    sessionStorage.setItem("ENDDATE", d);
    // props.comtripid(e)
    tdetails("/Comtrip");
  };
  const submithandle = (trip_id) => {
    let a = [...currentItems];
    let b = a[trip_id].trip_id;
    let c = a[trip_id].start_date;
    let d = a[trip_id].end_date;
    sessionStorage.setItem("SPENTTRIPID", b);
    sessionStorage.setItem("STARTDATE", c);
    sessionStorage.setItem("ENDDATE", d);
    sessionStorage.setItem("EXPENSEBUTTON", true);
    budget("/budget");
  };
  const submithandleupc = (trip_id) => {
    let a = [...upcoming];
    let b = a[trip_id].trip_id;
    let c = a[trip_id].start_date;
    let d = a[trip_id].end_date;
    sessionStorage.setItem("SPENTTRIPID", b);
    sessionStorage.setItem("STARTDATE", c);
    sessionStorage.setItem("ENDDATE", d);
    sessionStorage.setItem("EXPENSEBUTTON", true);
    budget("/budget");
  };
  const submithandle123 = (trip_id) => {
    let a = [...currentItems1];
    let b = a[trip_id].trip_id;
    let c = a[trip_id].start_date;
    let d = a[trip_id].end_date;
    sessionStorage.setItem("SPENTTRIPID", b);
    sessionStorage.setItem("STARTDATE", c);
    sessionStorage.setItem("ENDDATE", d);
    sessionStorage.setItem("EXPENSEBUTTON", false);

    budget("/budget");
  };

  const gohome = () => {
    gohome1("/home2");
  };
  // useEffect(() => {
  //     console.log(`http://${API}.amazonaws.com:8002/future/${sessionStorage.getItem("USERID")}/${abc}/`)
  //     console.log(sessionStorage.getItem("TOKEN"))
  //     axios.get(`http://${API}.amazonaws.com:8002/future/${sessionStorage.getItem("USERID")}//`,
  //       { headers: { "Authorization": `Bearer ${sessionStorage.getItem("TOKEN")}` } }
  //     )
  //       .then(
  //         res => {
  //         //   setdatas(res.data.trip_details)
  //           console.log(res)
  //         }
  //       )
  //       .catch((e) => console.log(e))

  //   }, [])
  // useEffect(() => {
  //   let data = [...g];
  //   let da = [];
  //   data.map((i, k) => {
  //     axios
  //       .get(
  //         `http://${API}.amazonaws.com:8002/future/${sessionStorage.getItem(
  //           "USERID"
  //         )}/${i.trip_id}/`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         // console.log("play", res);
  //         if (res.data.trip_details.length !== 0) {
  //           da.push(i);
  //           // console.log(i.trip_name);
  //           // console.log("tripss", res.data.trip_details.length);
  //         }
  //       });
  //   });
  //   setgg(da);
  // }, [g]);
  // console.log("GG", gg.length);
  const [currentPage1, setCurrentPage1] = useState(1);
  const [itemsPerPage1, setitemsperpage1] = useState(3);
  const indexOfLastItem1 = currentPage1 * itemsPerPage1;
  const indexOfFirstItem1 = indexOfLastItem1 - itemsPerPage1;
  const currentItems1 = g.slice(indexOfFirstItem1, indexOfLastItem1);

  const paginate1 = (pageNumber1) => setCurrentPage1(pageNumber1);
  const customStyles1 = {
    cells: {
      style: {
        padding: "10px",
      },
    },
    headcells: {
      style: {
        backgroundColor: "#f8f8f8",
      },
    },
  };
  const totalPages1 = Math.ceil(g.length / itemsPerPage1);
  const pageNumbers1 = [];
  const maxPageNumbers1 = 5;

  if (totalPages1 <= maxPageNumbers1) {
    for (let i = 1; i <= totalPages1; i++) {
      pageNumbers1.push(i);
    }
  } else {
    const leftDotIndex = Math.max(currentPage1 - 2, 1);
    const rightDotIndex = Math.min(currentPage1 + 2, totalPages1);

    if (currentPage1 <= maxPageNumbers1 - 2) {
      for (let i = 1; i <= maxPageNumbers1 - 1; i++) {
        pageNumbers1.push(i);
      }
      pageNumbers1.push("...");
      pageNumbers1.push(totalPages1);
    } else if (currentPage1 >= totalPages1 - maxPageNumbers1 + 3) {
      pageNumbers1.push(1);
      pageNumbers1.push("...");
      for (let i = totalPages1 - maxPageNumbers1 + 2; i <= totalPages1; i++) {
        pageNumbers1.push(i);
      }
    } else {
      pageNumbers1.push(1);
      pageNumbers1.push("...");
      for (let i = leftDotIndex; i <= rightDotIndex; i++) {
        pageNumbers1.push(i);
      }
      pageNumbers1.push("...");
      pageNumbers1.push(totalPages1);
    }
  }
  const [edit, setedit] = useState([]);
  // console.log("pppppppppppppppedit", edit);
  const gotohome = () => {
    budget("/home2");
  };
  console.log("allemails", allemails);
  function toCamelCase(inputString) {
    const words = inputString.split(" ");
    const camelCaseString =
      words[0].toLowerCase() +
      words
        .slice(1)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    return camelCaseString;
  }

  return (
    <>
      <div className="" style={{ boxShadow: "0px 0px 20px 0px" }}>
        <nav
          className="navbar  justify-content-between"
          style={{
            boxShadow: "0px 0px 70px 0px",
            height: "70px",
            backgroundColor: "#E2EBEE",
          }}
        >
          <p onClick={gohome} className="navbar-brand">
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
            <ul>
              {/* <li><Link to="/signup"><button>SIGNUP</button></Link></li> */}
              <li>
                <p
                  className="buttonnavbar m-2"
                  // style={{ boxShadow: "3px 4px" }}
                  style={{
                    border: "none",
                    fontFamily: "Nunito Sans, Sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",

                    // color: '#000000',
                    padding: "0px 8px 0px 8px",
                  }}
                  onClick={disu}
                >
                  Upcoming Trip
                </p>
              </li>
              <li>
                <p
                  className=" buttonnavbar   m-2"
                  // style={{ boxShadow: "3px 4px" }}
                  style={{
                    border: "none",
                    fontFamily: "Nunito Sans, Sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",

                    // color: '#000000',
                    padding: "0px 8px 0px 8px",
                  }}
                  onClick={disf}
                >
                  Future Trips
                </p>
              </li>

              <li>
                <p
                  className="buttonnavbar"
                  // style={{ boxShadow: "3px 4px" }}
                  onClick={disp}
                  style={{
                    border: "none",
                    fontFamily: "Nunito Sans, Sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    // color: '#000000',
                    padding: "0px 8px 0px 8px",
                  }}
                >
                  Past Trips
                </p>
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
                  // className="buttonnavbar m-2"
                  className="btn btn-primary m-2"
                  // style={{ boxShadow: "3px 4px" }}

                  onClick={gotohome}
                >
                  Back
                </p>
              </li>
              {/* <Link to='/home2'><button className='btn btn-link'>BACK</button></Link> */}
            </ul>
          </div>
        </nav>
      </div>
      <div className="back123">
        <div className="">
          <div className="">
            {df && (
              <>
                <div>
                  {currentItems.length == 0 && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          top: "40%",
                          left: "30%",
                        }}
                      >
                        <h1>THERE IS NO TRIPS PLANNED IN FUTURE</h1>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="containe "
                  style={{
                    padding: "0px 30px",
                    backgroundColor: "gray",
                  }}
                >
                  <div>
                    <h1 className="pt1">Future Trips</h1>
                  </div>
                  <ul
                    style={{
                      display: "block",
                      textAlign: "-webkit-center",
                      marginBottom: "0",
                      padding: "0",
                    }}
                  >
                    {currentItems.map((item, trip_id) => {
                      //  if(axios
                      //     .get(
                      //       `http://${API}.amazonaws.com:8002/future/${sessionStorage.getItem(
                      //         "USERID"
                      //       )}/${item.trip_id}/`,
                      //       {
                      //         headers: {
                      //           Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
                      //         },
                      //       }
                      //     )
                      //     .then((res) => {
                      //       console.log(res.data);
                      //       if (res.data.trip_details.length !== 0) {
                      //         return(

                      //         setedit([...edit,"fill"])
                      //         )
                      //       }
                      //       else{
                      //         setedit([...edit,"edit"])
                      //       }
                      //     }))
                      return (
                        <>
                          <li key={item.trip_id}>
                            <div
                              className="card box"
                              style={{ backgroundColor: "#f5f5f500" }}
                            >
                              <div
                                className="card1"
                                style={{ backgroundColor: "#f5f5f500" }}
                              >
                                <div>
                                  <div>
                                    <h4
                                      style={{
                                        textAlign: "center",
                                        // backgroundColor: "whitesmoke",
                                        fontSize: "30px",
                                      }}
                                    >
                                      {item.trip_name[0].toUpperCase() +
                                        item.trip_name.slice(1).toLowerCase()}
                                    </h4>
                                  </div>
                                  <div>
                                    {/* {(item.email)} */}
                                    {/* {[item.email].forEach((x)=>{
                                      return(
                                        <>
                                        <div>
                                          {x}
                                          </div></>
                                      )
                                    })} */}
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Total No of Days:
                                      </span>
                                      <span>{item.days}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Start Date:
                                      </span>
                                      <span>{item.start_date}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        End Date:
                                      </span>
                                      <span> {item.end_date}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <p
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Visiting Place:
                                      </p>
                                      <p
                                        style={{
                                          color: "green",

                                          fontWeight: "bold",
                                        }}
                                      >
                                        <div className="d-flex">
                                          <div>
                                            <span
                                              class="material-icons"
                                              style={{
                                                // paddingTop: "6px",
                                                // marginTop:"6px",

                                                color: "green",
                                              }}
                                            >
                                              location_on
                                            </span>
                                          </div>
                                          <div style={{ fontSize: "13px" }}>
                                            {item.address}
                                          </div>
                                        </div>
                                      </p>
                                    </h6>
                                  </div>
                                </div>
                                <div
                                  className=" "
                                  style={{
                                    position: "absolute",
                                    bottom: "20px",
                                  }}
                                >
                                  <div className=" mb-2">
                                    <button
                                      type="button"
                                      class="btn btn-outline-primary"
                                      onClick={() => tid(trip_id)}
                                      style={{
                                        width: "200px",
                                        // boxShadow: "3px 4px",
                                        // padding: "1px",
                                      }}
                                    >
                                      Fill Day Wise Details
                                    </button>
                                  </div>

                                  <div
                                    onClick={() => detailhandle(trip_id)}
                                    className=" mb-2"
                                  >
                                    <button
                                      className="btn btn-outline-primary"
                                      style={{
                                        width: "200px",

                                        // border: "",
                                        // boxShadow: "3px 4px",
                                      }}
                                    >
                                      Trip Details
                                    </button>
                                  </div>

                                  <div className="mb-2">
                                    <button
                                      onClick={() => submithandle(trip_id)}
                                      className="btn btn-outline-primary"
                                      style={{
                                        width: "200px",
                                      }}
                                      // style={{ border: "", boxShadow: "3px 4px" }}
                                    >
                                      Budget
                                    </button>
                                  </div>
                                </div>
                                {/* <div className=''><button onClick={() => deletehandle(k)} className='btn btn-info'>delete</button></div> */}
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="pagination-btn  d-flex justify-content-center">
                  {pageNumbers.map((pageNumber, index) => {
                    if (pageNumber === "...") {
                      return (
                        <span key={index} className="pagination-dots">
                          {}
                        </span>
                      );
                    }
                    return (
                      <div className="d-flex flex-column justify-content-center">
                        <button
                          key={index}
                          className={`pagination-item ${
                            currentPage === pageNumber ? "active" : ""
                          }`}
                          onClick={() => paginate(pageNumber)}
                          style={{ margin: "13px 2px" }}
                        >
                          {pageNumber}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {dp && (
              <>
                <div>
                  {currentItems1.length == 0 && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          top: "40%",
                          left: "30%",
                        }}
                      >
                        <h1>NO TRIP IS COMPLETED YET</h1>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="containe"
                  style={{
                    padding: "0px 30px",
                    backgroundColor: "gray",
                  }}
                >
                  <div>
                    <h1 className="pt1">Past Trips</h1>
                  </div>
                  <ul
                    style={{
                      display: "block",
                      textAlign: "-webkit-center",
                      marginBottom: "0",
                      padding: "0",
                    }}
                  >
                    {currentItems1.map((item, trip_id) => {
                      return (
                        <>
                          <li key={item.trip_id}>
                            <div
                              className="card box"
                              style={{ backgroundColor: "#f5f5f500" }}
                            >
                              <div
                                className="card1"
                                style={{ backgroundColor: "#f5f5f500" }}
                              >
                                <div>
                                  <div>
                                    <h4>
                                      {" "}
                                      {item.trip_name[0].toUpperCase() +
                                        item.trip_name.slice(1).toLowerCase()}
                                    </h4>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Total No of Days:
                                      </span>
                                      <span>{item.days}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Start Date:
                                      </span>
                                      <span>{item.start_date}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        End Date:
                                      </span>
                                      <span> {item.end_date}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <p
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Visiting Place:
                                      </p>
                                      <p
                                        style={{
                                          color: "green",

                                          fontWeight: "bold",
                                        }}
                                      >
                                        <div className="d-flex">
                                          <div>
                                            <span
                                              class="material-icons"
                                              style={{
                                                // paddingTop: "6px",
                                                // marginTop:"6px",

                                                color: "green",
                                              }}
                                            >
                                              location_on
                                            </span>
                                          </div>
                                          <div style={{ fontSize: "13px" }}>
                                            {item.address}
                                          </div>
                                        </div>
                                      </p>
                                    </h6>
                                  </div>
                                </div>
                                <div
                                  className=" "
                                  style={{
                                    position: "absolute",
                                    bottom: "70px",
                                  }}
                                >
                                  <div
                                    onClick={() => detailhandle123(trip_id)}
                                    className=" mb-2"
                                  >
                                    <button
                                      // className="glow-on-hover"
                                      // style={{ border: "none" }}
                                      className="btn btn-outline-primary"
                                      style={{
                                        width: "200px",
                                      }}
                                    >
                                      Trip Details
                                    </button>
                                  </div>

                                  <div className="">
                                    <button
                                      onClick={() => submithandle123(trip_id)}
                                      // className="glow-on-hover"
                                      // style={{ border: "none" }}
                                      className="btn btn-outline-primary"
                                      style={{
                                        width: "200px",
                                      }}
                                    >
                                      Spent Amount
                                    </button>
                                  </div>
                                </div>
                                {/* <div className=''><button onClick={() => deletehandle(k)} className='btn btn-info'>delete</button></div> */}
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="pagination-btn  d-flex justify-content-center">
                  {pageNumbers1.map((pageNumber1, index) => {
                    if (pageNumber1 === "...") {
                      return (
                        <span key={index} className="pagination-dots">
                          {}
                        </span>
                      );
                    }
                    return (
                      <div className="d-flex flex-column justify-content-center">
                        <button
                          key={index}
                          className={`pagination-item ${
                            currentPage1 === pageNumber1 ? "active" : ""
                          }`}
                          onClick={() => paginate1(pageNumber1)}
                          style={{ margin: "13px 2px" }}
                        >
                          {pageNumber1}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {du && (
              <>
                {upcoming.length == 0 && (
                  <>
                    <div
                      style={{ position: "absolute", top: "40%", left: "30%" }}
                    >
                      <h1>THERE IS NO TRIPS PLANNED IN FUTURE</h1>
                    </div>
                  </>
                )}
                <div
                  className="containe"
                  style={{
                    padding: "0px 30px",
                    backgroundColor: "gray",
                  }}
                >
                  <div>
                    <h1 className="pt1">Upcoming Trip</h1>
                  </div>
                  <ul
                    style={{
                      display: "block",
                      textAlign: "-webkit-center",
                      marginBottom: "0",
                      padding: "0",
                    }}
                  >
                    {upcoming.map((item, trip_id) => {
                      return (
                        <>
                          <li key={item.trip_id}>
                            <div
                              className="card box"
                              style={{ backgroundColor: "#f5f5f500" }}
                            >
                              <div
                                className="card1"
                                style={{ backgroundColor: "#f5f5f500" }}
                              >
                                <div>
                                  <div>
                                    <h4>
                                      {" "}
                                      {item.trip_name[0].toUpperCase() +
                                        item.trip_name.slice(1).toLowerCase()}
                                    </h4>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Total No of Days:
                                      </span>
                                      <span>{item.days}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Start Date:
                                      </span>
                                      <span>{item.start_date}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <span
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        End Date:
                                      </span>
                                      <span> {item.end_date}</span>
                                    </h6>
                                  </div>
                                  <div>
                                    <h6 style={{ textAlign: "left" }}>
                                      <p
                                        style={{
                                          fontSize: "15px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        Visiting Place:
                                      </p>
                                      <p
                                        style={{
                                          color: "green",

                                          fontWeight: "bold",
                                        }}
                                      >
                                        <div className="d-flex">
                                          <div>
                                            <span
                                              class="material-icons"
                                              style={{
                                                // paddingTop: "6px",
                                                // marginTop:"6px",

                                                color: "green",
                                              }}
                                            >
                                              location_on
                                            </span>
                                          </div>
                                          <div style={{ fontSize: "13px" }}>
                                            {item.address}
                                          </div>
                                        </div>
                                      </p>
                                    </h6>
                                  </div>

                                  <div className=" mb-2">
                                    <button
                                      type="button"
                                      // class="glow-on-hover"
                                      className="btn btn-outline-primary"
                                      onClick={() => tidupc(trip_id)}
                                      style={{
                                        border: "",
                                        width: "200px",

                                        // boxShadow: "3px 4px",
                                      }}
                                    >
                                      Fill Day Wise Details{" "}
                                    </button>
                                  </div>
                                  <div
                                    onClick={() => detailhandleupc(trip_id)}
                                    className=" mb-2"
                                  >
                                    <button
                                      // className="glow-on-hover"
                                      className="btn btn-outline-primary"
                                      style={{
                                        width: "200px",
                                        border: "",
                                        // boxShadow: "3px 4px",
                                      }}
                                    >
                                      Trip Details
                                    </button>
                                  </div>
                                  <div className="">
                                    <button
                                      onClick={() => submithandleupc(trip_id)}
                                      // className="glow-on-hover"
                                      className="btn btn-outline-primary"
                                      style={{
                                        width: "200px",
                                        border: "",
                                        // boxShadow: "3px 4px",
                                      }}
                                    >
                                      Budget
                                    </button>
                                  </div>
                                  {/* <div className=''><button onClick={() => deletehandle(k)} className='btn btn-info'>delete</button></div> */}
                                </div>
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Ptrips;
