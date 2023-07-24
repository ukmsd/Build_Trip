import React, { useEffect } from "react";
import { useState } from "react";
import Tdetails from "./Tdetails";
import axios from "axios";
import { toast } from "react-toastify";
import { object } from "yup";
import { useNavigate } from "react-router-dom";
import Navlogo from "./Navlogo";
import { API } from "../Api";



const Budget = () => {
  const gohome1 = useNavigate();
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [amount, setamount] = useState("");
  const [completedetails, setcompletedetails] = useState([]);
  const [dismodal1, setdismodal1] = useState(false);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [tripid, settripid] = useState("");
  const [data, setdata] = useState([]);
  const [contribut, setcontribut] = useState([]);
  const [diff, setdiff] = useState([]);
  const [disablebutton, setdisablebutton] = useState();
  // const a = Object.keys(data[0]);
  // const b = Object.values(data[0]);

  useEffect(() => {
    // console.log(
    //   `http://${API}:8002/future/${sessionStorage.getItem(
    //     "USERID"
    //   )}/`
    // );
    // console.log(sessionStorage.getItem("TOKEN"));
    axios
      .get(
        `http://${API}:8002/future/${sessionStorage.getItem("SPENTTRIPID")}/`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
          },
        }
      )
      .then((res) => {
        setcompletedetails(res.data.user.email);
        // setstartdate(res.data.user.start_date)
        // setenddate(res.data.user.end_date)
        console.log(res)
        // console.log(res.data.user.start_date)
      })
      .catch((e) => console.log(e));
  }, []);
  // useEffect(() => {
  //     console.log(`http://${API}:8002/ExpensesAPI_tripid/${sessionStorage.getItem("SPENTTRIPID")}/`)
  //     axios.get(`http://${API}:8002/ExpensesAPI_tripid/${sessionStorage.getItem("SPENTTRIPID")}/`,
  //         { headers: { "Authorization": `Bearer ${sessionStorage.getItem("TOKEN")}` } }
  //     )
  //         .then(
  //             res => {

  //                 // console.log(res)
  //             }
  //         )
  //         .catch((e) => console.log(e))

  // }, [])
  useEffect(() => {
    settripid(sessionStorage.getItem("SPENTTRIPID"));
    setstartdate(sessionStorage.getItem("STARTDATE"));
    setenddate(sessionStorage.getItem("ENDDATE"));
    let y = sessionStorage.getItem("EXPENSEBUTTON");
    if (y == "true") {
      setdisablebutton(true);
    } else if (y == "false") {
      setdisablebutton(false);
    }
  }, []);
  const handle1 = () => {
    setdismodal1(true);
  };

  const closemodal1 = () => {
    setdismodal1(false);
  };
  const modal1close = () => {
    setdismodal1(false);
    window.location.reload();
  };
  useEffect(() => {
    // console.log(
    //   `http://${API}:8002/ExpensesAPI_tripid/${sessionStorage.getItem(
    //     "SPENTTRIPID"
    //   )}/`
    // );
    axios
      .get(
        `http://${API}:8002/get-Tripid/${sessionStorage.getItem(
          "SPENTTRIPID"
        )}/`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
          },
        }
      )
      .then((res) => {
        // console.log("////////////////////////", res.data);
        setdata([res.data]);
        // console.log("dummy", res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    let temp = [],
      temp2 = [];
    completedetails.forEach((i, k) => {
      temp.push(`total_${i}_contributed`);
    });
    setcontribut(temp);
    // console.log(completedetails);
    completedetails.forEach((i, k) => {
      temp2.push(`total_${i}_difference`);
    });
    setdiff(temp2);
  }, [completedetails]);
  // console.log(contribut, diff);
  const setback1 = () => {
    setdismodal1(false);
  };
  const gohome = () => {
    gohome1("/home2");
  };
  // console.log(typeof disablebutton);
  const back = () => {
    gohome1("/previoustrip");
  };
  return (
    <>
    <div style={{backgroundColor:"#E2EBEE"}}>
          <nav className="navbar justify-content-between">
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
              <ul>
                
                <li>
                  {" "}
                  {disablebutton && (
                    <button
                      onClick={handle1}
                      // style={{ marginRight: "30px" }}
                      style={{border: "none", fontFamily: "Nunito Sans, Sans-serif",
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor:"pointer",
    
                      // color: '#000000',
                      padding: "0px 8px 0px 8px" ,marginRight: "30px"  }}

                      className="buttonnavbar"
                    >
                      Add Expense
                    </button>
                  )}
                </li>
                <li>
                  <button
                    onClick={back}
                    // style={{ marginRight: "30px" }}
                    style={{ border: "none", fontFamily: "Nunito Sans, Sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor:"pointer",
  
                    // color: '#000000',
                    padding: "0px 8px 0px 8px" ,marginRight: "30px"  }}
                    
                    className="btn btn-primary"
                  >
                    Back
                  </button>
                </li>
                {/* <li><button onClick={gohome} className="btn btn-link">Go To Home</button></li> */}
              </ul>
            </div>
          </nav>
        </div>
      {/* <div style={{ backgroundColor: "", height: "80vh" }}> */}

      <div className="back5">
        
        <div className="">
          <div className="container">
            {data.length==0 && <>
            <div style={{position:"absolute",top:"40%",left:"30%"}}>
              <h1>NO EXPENSES ADDED TILL NOW </h1>
            </div>
            </>}
            {data &&
              data.map((i, k) => {
                return (
                  <>
                    <div className="row" style={{ padding: "25px" }}>
                      <div
                        className="col-6 p-3"
                        style={{ backgroundColor: "whitesmoke" }}
                      >
                        <div className="row">
                          <div
                            className="col-12"
                            style={{ backgroundColor: "", padding: "5px" }}
                          >
                            <div
                              className="card"
                              style={{ textAlign: "center" }}
                            >
                              <h2>Total Budget</h2>
                              <h3>
                                <i class="material-symbols-outlined">
                                  currency_rupee
                                </i>
                                {i.total_budget}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-12"
                            style={{
                              backgroundColor: "whitesmoke",
                              padding: "5px",
                            }}
                          >
                            <div className="card" style={{ height: "390px" }}>
                              <div
                                className="card-header"
                                style={{
                                  textAlign: "center",
                                  height: "40px",
                                  backgroundColor: "pink",
                                }}
                              >
                                Contributed
                              </div>
                              <div
                                className="card-body"
                                style={{ overflow: "auto" }}
                              >
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th style={{ color: "black" }}>Mail</th>
                                      <th style={{ color: "black" }}>
                                        Total Contributed
                                      </th>
                                    </tr>
                                  </thead>
                                  {completedetails &&
                                    completedetails.map((j, l) => {
                                      return (
                                        <>
                                          <tbody>
                                            <tr>
                                              <td style={{ color: "black" }}>
                                                {j}
                                              </td>
                                              <td style={{ color: "black" }}>
                                                {
                                                  i[
                                                    "total_" +
                                                      j +
                                                      "_contributed"
                                                  ]
                                                }
                                              </td>
                                            </tr>
                                          </tbody>
                                        </>
                                      );
                                    })}
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-6 p-3"
                        style={{ backgroundColor: "whitesmoke" }}
                      >
                        <div className="row">
                          <div
                            className="col-12"
                            style={{ backgroundColor: "", padding: "5px" }}
                          >
                            <div
                              className="card"
                              style={{ textAlign: "center" }}
                            >
                              <h2>Total Average</h2>
                              <h3>
                                <i class="material-symbols-outlined">
                                  currency_rupee
                                </i>
                                {i.total_average}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-12"
                            style={{
                              backgroundColor: "whitesmoke",
                              padding: "5px",
                            }}
                          >
                            <div className="card" style={{ height: "390px" }}>
                              <div
                                className="card-header"
                                style={{
                                  textAlign: "center",
                                  height: "40px",
                                  backgroundColor: "pink",
                                }}
                              >
                                Difference
                              </div>
                              <div
                                className="card-body"
                                style={{ overflow: "auto" }}
                              >
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th style={{ color: "black" }}>Mail</th>
                                      <th style={{ color: "black" }}>
                                        Total Difference
                                      </th>
                                    </tr>
                                  </thead>
                                  {completedetails &&
                                    completedetails.map((j, k) => {
                                      return (
                                        <>
                                          <tbody>
                                            <tr>
                                              <td style={{ color: "black" }}>
                                                {j}
                                              </td>
                                              <td style={{ color: "black" }}>
                                                {
                                                  i[
                                                    "total_" + j + "_difference"
                                                  ]
                                                }
                                              </td>
                                            </tr>
                                          </tbody>
                                        </>
                                      );
                                    })}
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

            {/* <table>
                            <td>
                                {data &&
                                    data.map((i, k) => {



                                        return (
                                            <>

                                                <tr>
                                                    <th><h2 style={{ color: "black" }}>Total Budget</h2> </th>
                                                    <th><h2 style={{ color: "black" }}>Total Average</h2></th>

                                                </tr>
                                                <tr className="m-5px">
                                                    <td><h2>{i.total_budget}</h2></td>
                                                    <td><h2>{i.total_average}</h2></td>
                                                </tr>
                                                <td>
                                                    <td>CONTRIBUTED</td>

                                                    <tr>
                                                        <td>
                                                            {completedetails && completedetails.map((j, l) => {
                                                                return (<>
                                                                    <tr>
                                                                        <td>total {j} contributed </td>:
                                                                        <td>{(i["total_" + j + "_contributed"])}</td>
                                                                    </tr>


                                                                </>)
                                                            })}




                                                        </td>
                                                    </tr>
                                                </td>
                                                <td>
                                                    <td>DIFFERENCE</td>

                                                    <tr>
                                                        <td>
                                                            {completedetails && completedetails.map((j, k) => {
                                                                return (
                                                                    <tr>
                                                                        <td>total {j} difference</td>

                                                                        <td>{(i["total_" + j + "_difference"])}</td>


                                                                    </tr>

                                                                )
                                                            })}

                                                        </td>

                                                    </tr>
                                                </td>

                                            </>
                                        );
                                    }
                                    )}
                            </td>

                        </table> */}
          </div>
        </div>
      </div>
      {/* <div className="back" style={{position:"absolute",top:"0px",lef:"0px",width:"100%",height:"100vh"}}> */}
      {dismodal1 && (
        <Modal1
          setback1={setback1}
          modal1close={modal1close}
          closemodal1={closemodal1}
          tripid={tripid}
          completedetails={completedetails}
          startdate={startdate}
          enddate={enddate}
        />
      )}

      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default Budget;

const Modal1 = (props) => {
  const [description, setdescription] = useState("");
  const [tamount, settamount] = useState("");
  const [date, setdate] = useState("");
  const [amounts, setamounts] = useState(Array(props.completedetails.length));
  const [disable, setdisable] = useState(true);
  const [email, setemail] = useState(sessionStorage.getItem("USEREMAIL"));
  const [place, setplace] = useState("");
  const [time, settime] = useState("");
  const [expenses, setexpenses] = useState([]);
  const [exdata, setexdata] = useState([]);

  const [tempexid, settempexid] = useState();
  const minhan = () => {
    const today = props.startdate.split("-");
    // console.log(today)
    const dd = today[2].padStart(2, "0");
    const mm = today[1];
    const yyyy = today[0];
    return yyyy + "-" + mm + "-" + dd;
  };
  const maxhan = () => {
    const today = props.enddate.split("-");
    // console.log(today)
    const dd = today[2].padStart(2, "0");
    const mm = today[1];
    const yyyy = today[0];
    return yyyy + "-" + mm + "-" + dd;
  };
  const [o, seto] = useState(0);
  const [sum, setsum] = useState("");
  // useEffect(() => {

  //     amounts.forEach((x) => {
  //         return o=o+x
  //     })
  //     if (tamount == sum) {
  //         setdisable(false)
  //     }
  //     else {
  //         setdisable(true)
  //     }
  // })
  const handlechange = (k, j) => {
    setamounts((prev) => {
      const updatedamount = [...prev];
      updatedamount[k] = j;
      return updatedamount;
    });
  };
  const [render, setrender] = useState(0);
  // console.log(amounts)
  const submithan = (e) => {
    e.preventDefault();
    let s = [
      // ...exdata,
      {
        date: date,
        time: time,
        email: email,
        description: description,
        amount: tamount,
        place_of_expenses: place,
      },
    ];
    // setexpenses([s])
    // console.log({
    //   trip_id: props.tripid,
    //   expenses_details: expenses,
    // });

    setexpenses([...expenses, s]);

    setTimeout(() => {
      // if (email) {
        axios
          .post(
            `http://${API}:8002/Budgetpostcall/`,
            {
              trip_id: props.tripid,
              expenses_id: tempexid,
              trip_emails: props.completedetails,
              expenses_details: s,
            },
            {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
              },
            }
          )
          .then((res) => {
            console.log(res)
            setrender(render + 1);
            axios
              .post(
                `http://${API}:8002/SplitAmount`,
                {
                  trip_id: props.tripid,
                  expenses_id: `${res.data.expenses_id}`,
                },
                {
                  headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
                  },
                }
              )
              .then((res) => {
                console.log("expenennnnnnnnn     v" + res);
              })
              .catch(() => {
                toast.warn("Error");
              });
            k();
            console.log("pocpocpoc", res.data.expenses_id);
            // setemail("")
            setdescription("");
            setplace("");
            setdate("");
            settime("");
            settamount("");
          })
          .catch(() => {
            toast.warn("Error");
          });
    //   } else {
    //     alert("select email");
    //   }
    }, 1000);

    // console.log({
    //   trip_id: props.tripid,

    //   expenses_details: expenses,
    // });
    // console.log({ date: date, time: time, place: place, description: description, name: email, tamount: tamount })

    // console.log({ emails: props.completedetails, description: description, tamount: tamount, amounts: amounts, date: date })
    // window.location.reload();
  };

  const [perperson, setperperson] = useState("0.00");
  const tamountchange = (e) => {
    settamount(e.target.value);
    let a = e.target.value;
    let b = props.completedetails.length;
    let c = +a / +b;
    setperperson(c);
    // return c
  };
  useEffect(() => {
    // console.log(
    //   `http://${API}:8002/ExpensesAPI_tripid/${props.tripid}/`
    // );
    axios
      .get(
        `http://${API}:8002/ExpensesAPI_tripid/${props.tripid}/`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
          },
        }
      )
      .then((res) => {
        setexdata(res.data[0].expenses_details);
        settempexid(res.data[0].expense_id);

        // console.log(res.data[0].expenses_details);
        // console.log(res.data[0].expense_id);
        // console.log(res);
      })
      .catch((e) => console.log(e));
  }, [render]);
  // console.log(tempexid);
  // const fulldetails = () => {
  //   axios
  //     .post(
  //       `http://${API}:8002/SplitAmount`,
  //       {
  //         trip_id: props.tripid,
  //         expenses_id: `${tempexid}`,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("expenennnnnnnnn" + res);
  //     })
  //     .catch(() => {
  //       toast.warn("Error");
  //     });

  //   setTimeout(() => {
  //     props.modal1close();
  //   }, 1000);
  //   // props.closemodal1()
  // };
  const k = () => {
    if (exdata) {
      axios
        .post(
          `http://${API}:8002/SplitAmount`,
          {
            trip_id: props.tripid,
            expenses_id: `${tempexid}`,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("TOKEN")}`,
            },
          }
        )
        .then((res) => {
          console.log("expenennnnnnnnn     v" + res);
        })
        .catch(() => {
          toast.warn("Error");
        });

      setTimeout(() => {
        props.modal1close();
      }, 0);
    }
  };
  return (
    <>
      <div className="modal2 bg-image ">
        <div className="container-fluid">
          <div className="row mt-3">
            <div onClick={props.setback1}
                        
                           style={{cursor: "pointer",position:"absolute",marginLeft:'91%',top:"47px",zIndex:"1",padding:"2px"}}><button className="btn btn-danger" ><span class="material-symbols-outlined " >Close

</span></button></div>
            <div className="col-md-6 col-sm-12 col-12">
              <div className="card mt-0" style={{ width: "100%" }}>
                <h2 style={{backgroundColor: "whitesmoke",textAlign:"center"}}>Add Expense</h2>
                <div className="">
                  <form onSubmit={submithan}>
                    <label>Email:</label>
                    <input className="form-control" disabled value={email}/>
                    {/* <select name="email" id="name" className="form-control"> */}
                    {/* <select
                      name="name"
                      id="name"
                      required
                      onChange={(e) => setemail(e.target.value)}
                      className="form-control"
                    >
                      <option name="name" selected disabled>
                        Select email
                      </option>
                      {props.completedetails &&
                        props.completedetails.map((i, k) => {
                          return (
                            <option name="name">{i}</option>

                            // <option value={i} name="email">{i}</option>
                          );
                        })}
                    </select> */}
                    {/* </select> */}

                    <div>
                      <label>Description</label>
                      <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label>Place</label>
                      <input
                        type="text"
                        className="form-control"
                        value={place}
                        onChange={(e) => setplace(e.target.value)}
                        required
                      />
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <label>Date</label>
                        <input
                          type="date"
                          min={minhan()}
                          max={maxhan()}
                          required
                          value={date}
                          onChange={(e) => setdate(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Time</label>
                        <input
                          type="time"
                          className="form-control"
                          value={time}
                          onChange={(e) => settime(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      {/* <label>AMOUNT</label> */}
                      <div className="row">
                        <div className="col-2 d-flex mt-4">
                          <div className="">
                          <label>Amount</label>
                          </div>
                          <div className="mt-2">
                          <span class="material-symbols-outlined">
                            currency_rupee
                          </span>
                          </div>
                          <div>

                          </div>
                          
                        </div>
                        <div className="col-10 mt-4">
                          <input
                            type="number"
                            required
                            value={tamount}
                            className="form-control"
                            onChange={tamountchange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      Average Amount Per Person In INR:
                      <b>{perperson}</b>
                      {/* <p class="material-symbols-outlined ">currency_rupee
                                            </p> */}
                    </div>

                    <div className=" row d-flex pt-2">
                      <div className="col-8"></div>
                      <div className="col-3">
                        <button type="submit" className="btn btn-outline-primary m-2">
                          Save
                        </button>
                      </div>

                      {/* <div className="col-5">
                        <a
                          onClick={props.setback1}
                          className=" mt-4"
                          style={{ cursor: "pointer" }}
                        >
                          Back
                        </a>
                      </div> */}
                    </div>
                  </form>
                  <div className="text-center row">
                    <div className="col-4"></div>
                    {/* <div className="col-4">
                      <button
                        type="submit"
                        onClick={fulldetails}
                        className="glow-on-hover"
                      >
                        Submit
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {exdata && (
              <div className="expense col-md-6 col-sm-12 col-12">
                <div>
                  <table className="table table-striped"
                   style={{ borderRadius: "1%", padding:"30px"}}
                   >
                    <h2
                      style={{
                        position: "sticky",
                        top: "0px",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      Expense Details
                    </h2>

                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Place</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exdata &&
                        exdata.map((i, k) => {
                          return (
                            <>
                              <tr>
                                <td>{i.email}</td>
                                <td>{i.description}</td>
                                <td>{i.place_of_expenses}</td>
                                <td>{i.date}</td>
                                <td>{i.time}</td>
                                <td>{i.amount}</td>
                              </tr>
                              {/* <tr>
                                <td>{i.email}</td>
                                <td>{i.description}</td>
                                <td>{i.place_of_expenses}</td>
                                <td>{i.date}</td>
                                <td>{i.time}</td>
                                <td>{i.amount}</td>
                              </tr><tr>
                                <td>{i.email}</td>
                                <td>{i.description}</td>
                                <td>{i.place_of_expenses}</td>
                                <td>{i.date}</td>
                                <td>{i.time}</td>
                                <td>{i.amount}</td>
                              </tr><tr>
                                <td>{i.email}</td>
                                <td>{i.description}</td>
                                <td>{i.place_of_expenses}</td>
                                <td>{i.date}</td>
                                <td>{i.time}</td>
                                <td>{i.amount}</td>
                              </tr><tr>
                                <td>{i.email}</td>
                                <td>{i.description}</td>
                                <td>{i.place_of_expenses}</td>
                                <td>{i.date}</td>
                                <td>{i.time}</td>
                                <td>{i.amount}</td>
                              </tr> */}
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
