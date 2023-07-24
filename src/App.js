import "./Style.scss";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Trip from "./components/Trip";
import Sign from "./components/Sign";
import Home2 from "./components/Home2";
import Previoustrip from "./components/Previoustrip";
import Tdetails from "./components/Tdetails";
import Budget from "./components/Budget";
// import Logi from './components/Logi';
// import Signup from './components/Signup'
// import Bas from './components/M';
// import CaptchaTest from './components/Aj';
// import Demo from './components/Demo';
import { useEffect, useState } from "react";
import Comtrip from "./components/Comtrip";
import Privaterouter from "./components/Router";
import Accessremove from "./components/Access";

const App = () => {
  // const goto=useNavigate();

  const [tdetails, settdetails] = useState("");
  const [tdetails1, settdetails1] = useState("");
  const [budget, setbudget] = useState("");
  const [tid, settid] = useState("");
  const tripids = (p) => {
    settid(p);
  };
  const tdetailsdata = (d) => {
    settdetails(d);
    settdetails1("");
  };
  const [gdata, setgdata] = useState("");
  const handles = (e) => {
    setgdata(e);
  };
  const tdetailsdata1 = (d) => {
    settdetails1(d);
    settdetails("");
  };
  const [coid, setcoid] = useState([]);
  const cid = (i) => {
    setcoid(() => [i]);
  };
  const [logindata, setlogindata] = useState(0);
  const setlogin = (d) => {
    setlogindata(d);
  };
  // useEffect(() => {

  //   if (localStorage.getItem("token").length>0) {

  //     // goto("/home2");

  //   }
  //   else{
  //     goto('/')
  //   }

  // }, [])
//   const [dis,setdis]=useState(false)
//   const [realTime, setRealTime] = useState(false);
//  const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     let interval;
//     if (realTime==false) {
//       interval = setInterval(() => {
//         console.log('In setInterval');
//         setdis(true)
//       }, 10000);
//     } else {
//        clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, []);
  return (
    <>
    {/* {
      dis &&
<div style={{ backgroundColor:"pink",zIndex:"1",padding:"40px",borderRadius:"20px", width:'600px',height:"200px",position:"absolute",top:"30%",left:"40%"}}>
      <h2>Your Session Going To Expire Choose continue to Stay</h2>
<div className="d-flex" style={{gap:"20px",marginTop:"30px",alignItems:"center"}}>
<button className="btn btn-success">Continue</button>
<button className="btn btn-danger">Logout</button>
  </div>
    </div>
    } */}
    
      <BrowserRouter>
        <Routes>
          {/* <Route path="/t" element={<CaptchaTest/>}/> */}
          {/* <Route path="/signup1" element={<Signup/>}/> */}
          {/* <Route path='/m' element={<Bas/>}/> */}
          {/* <Route path='/login' element={<Logi/>}/> */}
          {/* <Route path='/demo' element={<Demo />} /> */}

          <Route
            path="*"
            //  element={ (sessionStorage.getItem("Access")?.length>0)? <Home2 />:<Home/>}

            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F5F5F5",
                    width: "400px",
                    height: "250px",
                    display: "grid",
                    aligIitems: "center",
                    padding: "10px",
                  }}
                >
                  <h1
                    style={{
                      height: "45px",
                      color: "#FD5D3D",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    404
                  </h1>

                  <div style={{ margin: "1rem" }}></div>

                  <p
                    style={{
                      color: "#171515",
                      fontSize: "18px",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Go back home to learn what we can offer you
                  </p>

                  <Link to="/">
                    <div style={{ margin: "2rem" }}></div>

                    <button
                      style={{
                        height: "71px",
                        width: "200px",
                        backgroundColor: "#FD5D3D",
                      }}
                    >
                      <span style={{ color: "#FFFFFF" }}>Back home</span>
                    </button>
                  </Link>
                </div>
              </div>
            }
          />
          <Route element={<Accessremove />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setlogin={setlogin} />} />
            <Route path="/signup" element={<Sign />} />
          </Route>

          

          <Route element={<Privaterouter />}>
          <Route
            path="/trip"
            element={
              <Trip map1={handles} tripid={tripids} logindata={logindata} />
            }
          />
            <Route path="/budget" element={<Budget />} />

            <Route path="/home2" element={<Home2 />} />
            <Route
              path="/previoustrip"
              element={
                <Previoustrip
                  tdetailsdata={tdetailsdata}
                  tdetailsdata1={tdetailsdata1}
                  comtripid={cid}
                />
              }
            />
            <Route
              path="/tdetails"
              element={<Tdetails data={tdetails} data1={tdetails1} />}
            />
            <Route
              path="/Comtrip"
              element={
                <Comtrip
                  data={Comtrip}
                  data1={gdata}
                  idtrip={tid}
                  comid={coid}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
