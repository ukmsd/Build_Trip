import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { API } from "../Api";
// import Cap from "./Aj";/co

const Login = (props) => {
  const homepage = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [caperr, setcaperr] = useState("");
  const [eyesymbol, seteyesymbol] = useState(false);
  const [inputtype, setinputtype] = useState(true);
  // const [semail, setSemail] = useState('');
  // const [spassword, setSpassword] = useState("");
  // let tt="ioioioioioio"
  const eye = () => {
    if (eyesymbol == false) {
      seteyesymbol(true);
      setinputtype(false);
    } else {
      seteyesymbol(false);
      setinputtype(true);
    }
  };
  const submithandle = (e) => {
    e.preventDefault();
    console.log({ EMAIL: email, PASSWORD: password });
    if (captcha) {
      setcaperr("");
      axios
        .post(`http://${API}:8002/login`, {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            // if (res.status === 200) {
            // alert(res.token)
            sessionStorage.setItem("USEREMAIL", email);
            localStorage.setItem("token", res.data.token);
            sessionStorage.setItem("Access", res.data.token);
            console.log(res.data.token.access);
            console.log(res.data);
            sessionStorage.setItem("TOKEN", res.data.token.access);
            sessionStorage.setItem("USERID", res.data.user_id);
            toast.success("Logged in successfully");

            sessionStorage.setItem("islogin", "1");
            props.setlogin(1);
            // setTimeout(function () {
            //   window.location.replace("/home2");
            // }, 2000);
          }

          // }
        )
        .catch(() => {
          toast.warn("unsuccesfull! enter correct details");
        });
    } else {
      setcaperr("Please Verify Captcha...........");
    }
    // if (email !== semail) {
    //     alert("login details not found")
    // }
    // else if (password !== spassword) {

    //     alert('invalid email and password')
    // }
    // else {
    //     alert("login successfull")
    //     homepage('/home2')

    // }
  };

  // useEffect(() => {
  //     setSemail(localStorage.getItem('EMAIL'))
  //     setSpassword(localStorage.getItem('PASSWORD'))
  // }, [])
  const [captcha, setcaptcha] = useState(false);
  const changecaptcha = (res) => {
    setcaptcha(true);
    setcaperr("");
  };
  console.log(`${API}`);
  const gohome = () => {
    homepage("/");
  };
  const emailchange = (e) => {
    let a = e.target.value;
    let b = a.toLowerCase();
    setEmail(b);
  };
  return (
    <>
      <div className="back centered-login-form" style={{ height: "100vh" }}>
        <div className="back bg-imagelogin">
          <div
            // style={{ position: "absolute", transform: "translate(0%,0%)" }}
            className="row "
          >
            {/* <div className="col-sm-1 col-md-2 col-lg-4"></div> */}
            <div className="col-md-12">
              <div
                className="card"
                style={{
                  boxShadow: "2px 2px 2px 2px #d2b6b6",
                  backgroundColor: "#E2EBEE",
                }}
              >
                <div className="a">
                  <div className="row">
                    <div className="col-1">
                      <span
                        style={{
                          position: "absolute",
                          top: "5px",
                          left: "5px",
                          cursor: "pointer",
                        }}
                        onClick={gohome}
                        class="material-symbols-outlined"
                      >
                        arrow_back
                      </span>
                    </div>
                    <div className="col-11">
                      <h2 className="text-center">Login</h2>
                    </div>
                  </div>

                  <form onSubmit={submithandle}>
                    <div className="">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-1 mt-1">
                            <span class="material-symbols-outlined">email</span>
                          </div>

                          <div className="col-10">
                            <label>Email</label>
                          </div>
                        </div>
                        <div className="row">
                          {/* <div className="col-1 mt-2">
                            <span class="material-symbols-outlined">email</span>
                          </div> */}
                          <div className="col-12">
                            <input
                              type="email"
                              placeholder="Enter Email"
                              style={{ border: "1px solid black" }}
                              className="form-control"
                              value={email}
                              onChange={emailchange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-1 mt-1">
                            <span class="material-symbols-outlined">
                              lock_open
                            </span>
                          </div>

                          <div className="col-10">
                            <label>Password</label>
                          </div>
                        </div>

                        <div className="row">
                          {/* <div className="col-1 mt-2">
                            <span class="material-symbols-outlined">
                              lock_open
                            </span>
                          </div> */}
                          <div className=" col-12 d-flex">
                            <input
                              type={`${inputtype ? "password" : "text"}`}
                              placeholder="Enter Password"
                              className="form-control"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              style={{ border: "1px solid black" }}
                              required
                            />
                            <span
                              style={{
                                marginLeft: "-30px",
                                marginTop: "5px",
                                cursor: "pointer",
                              }}
                              onClick={eye}
                              className="material-symbols-outlined"
                            >{`${
                              eyesymbol ? "visibility" : "visibility_off"
                            }`}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4" style={{ marginBottom: "25px" }}>
                        <ReCAPTCHA
                          sitekey="6LfVii4kAAAAAJ8_m87S4NKEcvgpNvCcMtskDBnQ"
                          style={{ width: "100%" }}
                          onChange={changecaptcha}
                          required
                        />
                        <div style={{ color: "red", position: "absolute" }}>
                          {caperr}
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="formbutton text-center">
                          <button
                            className="btn btn-outline-primary"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                  <hr />
                  <div className="OR">
                    <h5>or</h5>
                  </div>
                </div>

                <div className="al">
                  <p>Don't Have An Account? </p>

                  <Link to="/signup">
                    <button type="submit" className="btn btn-outline-primary">
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-sm-1 col-md-2 col-lg-4"></div> */}
      </div>
      {/* <div className ="back">
                    <Link to='/'>BACK</Link>
                </div> */}
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
export default Login;
