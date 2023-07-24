import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../Api";
import { useState } from "react";

const Sign = () => {
  const y = useNavigate();

  const [eyesymbol, seteyesymbol] = useState(false);
  const [inputtype, setinputtype] = useState(true);
  const eye = () => {
    if (eyesymbol == false) {
      seteyesymbol(true);
      setinputtype(false);
    } else {
      seteyesymbol(false);
      setinputtype(true);
    }
  };
  const onSubmit = (values) => {
    // localStorage.setItem('EMAIL', values.email)
    // localStorage.setItem('PASSWORD', values.password)
    // console.log({EMAIL:values.email,PASSWORD:values.password})
  };

  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required("Name is required")
      .min(3, "User Name is to short")
      .matches(/^[A-Za-z][A-Za-z0-9_]{7,29}$/, "Iinvalid Username"),
    // .max(10, "user name is to long"),
    email: Yup.string()
      .required("Email is required")
      // .matches(/^[A-Z]$/, 'Email Format Should Be In Lowercase')
      // .matches("text here")
      .matches(
        /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Invalid email address format"
      ),
    // .email("Invalid email  format")
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    password: Yup.string()
      // .min(3, " must contain 3 characters minimum")
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*-+=?&])[A-Za-z\d@$!%*-+=?&]{6,10}$/,
        "Provide strong password"
      )
      .min(6, "Must Contain 6 Characters "),
    // .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password should contain at least one uppercase and lowercase character")
    // .matches(/\d/, "Password should contain at least one number")
    // .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
    confirmpassword: Yup.string()
      .required("Enter Confirm Password")
      .oneOf([Yup.ref("password"), null], "Passwords does not match"),
  });
  // LoginSchema
  //   .isValid({
  //     email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  //   })
  //   .then((t) => {
  //     console.log(t)
  //   })
  // LoginSchema
  //   .isValid({
  //     email: "not.a..valod.e mail",
  //   })
  //   .then((t) => {
  //     console.log(t)
  //   })

  // const [name, setName]=useState('')
  // const [email, setEmail]=useState('')
  // const [password, setPassword]=useState('')
  // const [confirmpassword,setConfirmpassword]=useState("")
  // // const [x,setX]=useState("")
  // const [eerror,setEerror]=useState("")

  // const [perror,setPerror]=useState("")
  // const [cperror,setCperror]=useState("")

  //     const submithandle=(e)=>{
  //         e.preventDefault();
  // console.log("khgfdsfdsfhh")
  //         if (email.length>0){

  //         }

  //         localStorage.setItem('EMAIL',values.email)
  //         localStorage.setItem('PASSWORD',password)

  //     }
  // const fun = () => {
  //   y("/login")
  // }
  const gohome = () => {
    y("/login");
  };
  return (
    <>
      <div className="back bg-image">
        <div
          className="card"
          style={{
            boxShadow: "2px 2px 2px 2px #d2b6b6",
            backgroundColor: "#E2EBEE",
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="">
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
                    <h2 className="text-center">Signup</h2>
                  </div>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmpassword: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values) => {
                    console.log(values);
                    axios
                      .post(
                        `http://${API}:8002/register`,

                        {
                          username: values.name,
                          email: values.email,
                          password: values.password,
                        }
                      )
                      .then((res) => {
                        toast.success("Registration Completed Successfully");

                        setTimeout(function () {
                          window.location.replace("/login");
                        }, 1000);
                        console.log(res);
                      })
                      .catch(() => {
                        toast.warn("Enter correct details !!!!");
                      });
                  }}
                >
                  {({ touched, errors, isSubmitting, values }) =>
                    !isSubmitting ? (
                      <div>
                        <Form>
                          <div className="mb-3">
                            <label>User Name</label>
                            <Field
                              type="name"
                              name="name"
                              placeholder="Enter Username"
                              autoComplete="off"
                              style={{ border: "1px solid black" }}
                              className={`mt-2 form-control
                          ${touched.name && errors.name ? "is-invalid" : ""}`}
                            />

                            <ErrorMessage
                              component="div"
                              name="name"
                              className="invalid-feedback"
                              style={{ position: "absolute" }}
                            />
                          </div>

                          <div className="form-group mb-3">
                            <div className="row">
                              <div className="col-1 mt-1">
                                <span class="material-symbols-outlined">
                                  email
                                </span>
                              </div>

                              <div className="col-10">
                                <label>Email</label>
                              </div>
                            </div>

                            <Field
                              type="email"
                              name="email"
                              placeholder="Enter Email"
                              autoComplete="off"
                              style={{ border: "1px solid black" }}
                              className={`mt-2 form-control
                            ${
                              touched.email && errors.email ? "is-invalid" : ""
                            }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="email"
                              className="invalid-feedback"
                              style={{ position: "absolute" }}
                            />
                          </div>
                          <div className="d-flex ">
                            <div className="me-2 mb-3">
                              <div className="row">
                                <div className="col-1 mt-1">
                                  <span class="material-symbols-outlined">
                                    lock
                                  </span>
                                </div>

                                <div className="col-10">
                                  <label>Password</label>
                                </div>
                              </div>

                              <Field
                                type="password"
                                name="password"
                                autoComplete="off"
                                style={{ border: "1px solid black" }}
                                placeholder="Enter Password"
                                className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                              />
                              <ErrorMessage
                                component="div"
                                name="password"
                                className="invalid-feedback"
                                style={{ position: "absolute" }}
                              />
                            </div>
                            <div className="mb-3">
                              <div>
                                <div className="row">
                                  <div className="col-1 mt-1">
                                    <span class="material-symbols-outlined">
                                      lock
                                    </span>
                                  </div>

                                  <div className="col-10">
                                    <label>Confirm Password</label>
                                  </div>
                                </div>
                                {/* <div className=""> */}
                                <Field
                                  // type="password"
                                  type={`${inputtype ? "password" : "text"}`}
                                  name="confirmpassword"
                                  placeholder="Confirm Password"
                                  style={{ border: "1px solid black" }}
                                  className={`mt-2 form-control
                          ${
                            touched.confirmpassword && errors.confirmpassword
                              ? "is-invalid"
                              : ""
                          }`}
                                />

                                {
                                  <span
                                    style={{
                                      marginLeft: "180px",
                                      position: "absolute",
                                      marginTop: "-30px",
                                      cursor: "pointer",
                                    }}
                                    onClick={eye}
                                    className="material-symbols-outlined"
                                  >{`${
                                    eyesymbol ? "visibility" : "visibility_off"
                                  }`}</span>
                                }

                                {/* </div> */}

                                <ErrorMessage
                                  component="div"
                                  name="confirmpassword"
                                  className="invalid-feedback"
                                  style={{ position: "absolute" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              className="btn btn-outline-primary mt-4"
                              type="submit"
                              onClick={onSubmit}
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                      </div>
                    ) : (
                      (localStorage.setItem("EMAIL", values.email),
                      localStorage.setItem("PASSWORD", values.password))
                      //   <div>
                      //     <h1 className="pt-3 mt-5">Form Submitted</h1>
                      //     <div className="aler alert-success mt-3">
                      //       Thank you for connecting with us !
                      //     </div>
                      //     <ul className="list-group">
                      //       <li className="list-group-item">Email: {values.email}</li>
                      //       <li className="list-group-item">
                      //         Password: {values.password}{" "}
                      //       </li>
                      //     </ul>
                      //   </div>
                    )
                  }
                </Formik>
                <hr />
                <div className="OR">
                  <h5>or</h5>
                </div>
              </div>
              <div className="al">
                <p className="mb-0">
                  Already Have Account?{" "}
                  <Link to="/login" className="m-0">
                    <div>
                      <button
                        type="submit"
                        className="btn btn-outline-primary  mb-2"
                      >
                        {" "}
                        Login
                      </button>
                    </div>
                  </Link>{" "}
                </p>
                {/* <Link to='/login'>

                <button type="submit" className="glow-on-hover"> Login</button>
              </Link> */}
              </div>
              {/* <div className="back">
                    <Link to='/'>BACK</Link>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
export default Sign;
