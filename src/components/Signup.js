import { Link,useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

const Signup=()=>{
    const homepage=useNavigate();
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmpassword,setConfirmpassword]=useState("")
    // const [x,setX]=useState("")
    const [eerror,setEerror]=useState("")

    const [perror,setPerror]=useState("")
    const [cperror,setCperror]=useState("")

    const submithandle=(e)=>{
        e.preventDefault();
// console.log("khgfdsfdsfhh")
        if (email.length>0){
            
        }

        localStorage.setItem('EMAIL',email)
        localStorage.setItem('PASSWORD',password)
        homepage("/login")

    }
    

    return(
        <>
        <div className="back">
        
        
        <div className="form">
        <h1>signup</h1>
            <form onSubmit={submithandle}>
                <div>
                    <div className="form-group">
                        <label>NAME</label>
                        <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className="form-group">
                        <label>EMAIL</label>
                        <input type="email" name="email"  className="form-control" value={email} onBlur={()=>setEerror("email required")} onChange={(e)=>{setEmail(e.target.value)}} onFocus={()=>setEerror("")} />
                        {email.length>0? email.includes('@gmail.com') ? "":"email invalid":""}
                        {eerror}
                        

                    </div>
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input type="password" name="password" className="form-control" value={password} onBlur={()=>setPerror("password is required")} onFocus={()=>setPerror("")} onChange={(e)=>{setPassword(e.target.value)}}  />
                        {password.length>0? password.includes('@')? "":"choose strong password":""}
                        {perror}
                    </div>
                    <div className="form-group">
                        <label> CONFIRM PASSWORD</label>
                        <input type="password" name="confirmpassword" className="form-control"  onBlur={()=>setCperror("")} value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}} />
                        {password !== confirmpassword ? "confirm password and password to not match":""}
                        {cperror}
                    </div>
                    <button type="submit">SIGNUP</button>
                </div>
            </form>
            <hr/>
            <div className="OR">
                <h4>or</h4>
            </div>
        </div>
        <div className="">
        <p>already have account?</p>
            <Link to='/login'>
                
                <button  type="submit" className="btn btn-lg bth-block btn-secondary"> login</button>
            </Link>
        </div>

        </div>
        </>
    )
}
export default Signup;