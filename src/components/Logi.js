// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useEffect } from "react";

// const Logi = () => {

//   useEffect(() => {
//   semail(localStorage.getItem("EMAIL"))
//   spassword(localStorage.getItem("PASSWORD"))
//   }, [])

//   const LoginSchema = Yup.object().shape({
//     semail:Yup.string(),
//     spassword:Yup.string(),
//     email: Yup.string()
//       .required("Email is required")
//       .email("Invalid email address format")
//       .oneOf([Yup.ref("semail"),null], "email not sign in"),
//     password: Yup.string()
//       .min(3, "Password must be 3 characters minimum")
//       .required("Password is required")
//       .oneOf([Yup.ref("spassword"),null], "password is incorrect"),
    

//   });

//   // const [name, setName]=useState('')
//   // const [email, setEmail]=useState('')
//   // const [password, setPassword]=useState('')
//   // const [confirmpassword,setConfirmpassword]=useState("")
//   // // const [x,setX]=useState("")
//   // const [eerror,setEerror]=useState("")

//   // const [perror,setPerror]=useState("")
//   // const [cperror,setCperror]=useState("")

//   //     const submithandle=(e)=>{
//   //         e.preventDefault();
//   // console.log("khgfdsfdsfhh")
//   //         if (email.length>0){

//   //         }

//   //         localStorage.setItem('EMAIL',values.email)
//   //         localStorage.setItem('PASSWORD',password)


//   //     }


//   return (
//     <>
//       <div className="back">


//         <div className="form">
//           <h1>signup</h1>
//           <Formik
//             initialValues={{  email: "", password: "",semail:'',spassword:'' }}
//             validationSchema={LoginSchema}
//             onSubmit={(values) => {
//               console.log(values);
//             }}
//           >
//             {({ touched, errors, isSubmitting, values }) =>
//               !isSubmitting ? (
//                 <div>

//                   <Form>
                    

//                     <div className="form-group">
//                       <label>Email</label>
//                       <Field
//                         type="email"
//                         name="email"
//                         placeholder="enter email"
//                         autoComplete="off"
//                         className={`mt-2 form-control
//                             ${touched.email && errors.email ? "is-invalid" : ""
//                           }`}
//                       />
//                       <ErrorMessage
//                         component="div"
//                         name="email"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                     <div>
//                       <label>Password</label>
//                       <Field
//                         type="password"
//                         name="password"
//                         autoComplete='off'

//                         placeholder="enter password"
//                         className={`mt-2 form-control
//                           ${touched.password && errors.password
//                             ? "is-invalid"
//                             : ""
//                           }`}
//                       />
//                       <ErrorMessage
//                         component="div"
//                         name="password"
//                         className="invalid-feedback"
//                       />
//                     </div>
                    
//                     <button className="full btn btn-primary"
//                       type="submit"
//                       onClick={onSubmit}
//                     >
//                       Submit
//                     </button>
                  
                    
//                   </Form>
                  
//                 </div>
//               ) : (
//                 ""
//                 //   <div>
//                 //     <h1 className="pt-3 mt-5">Form Submitted</h1>
//                 //     <div className="aler alert-success mt-3">
//                 //       Thank you for connecting with us !
//                 //     </div>
//                 //     <ul className="list-group">
//                 //       <li className="list-group-item">Email: {values.email}</li>
//                 //       <li className="list-group-item">
//                 //         Password: {values.password}{" "}
//                 //       </li>
//                 //     </ul>
//                 //   </div>
//               )
//             }
//           </Formik>
//           <hr />
//           <div className="OR">
//             <h4>or</h4>
//           </div>
//         </div>
//         <div className="al">
//           <p>already have account?</p>
//           <Link to='/login'>

//             <button type="submit" className="btn btn-lg bth-block btn-secondary"> login</button>
//           </Link>
          
//         </div>
//         <div className="back">
//                     <Link to='/'>BACK</Link>
//                   </div>

//       </div>
//     </>
//   )
// }
// export default Logi;