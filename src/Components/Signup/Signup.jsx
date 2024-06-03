import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [emailErrors,setEmailErrors]=useState("")
  const [statsCode,setStatsCode]=useState(0)
  // const [flag , setFlag]=useState(false);
  const [accept, setAccept] = useState(false);
  const regist = "http://127.0.0.1:8000/api/register";

  const supmit = async (e) => {
    let flag = true;

    e.preventDefault();

    setAccept(true);

    if (name === "" || password.length < 8 || email === "" || passwordR !== password) {
      flag = false;
    } else flag = true;
    if (flag) {
      try {
        const res = await axios.post(regist, {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        });
        console.log(res);
        // ckeck if status === 200 go to home ppage
        if(res.status === 200 ){
          window.localStorage.setItem("email",email)
          window.location.pathname='/'
        }
      } catch (error) {
        console.log(error.response.data.message);
        console.log(error.response.status);
        setStatsCode(error.response.status)
        setEmailErrors(error.response.data.message)
        console.log(emailErrors);
        window.alert(error.response.data.message)
      }
    }
  };

  return (
    <>
       <div className="">
        <Header/>
      <div className="father">
        <div className="left"></div>
        <div className="register">
          <div className="head" style={{ textAlign: "center", width: "100%" }}>
            <h1 style={{ margin: " 50px 0 10px 0" }}>Dream XD</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, totam?
            </p>
            {/* {accept && statsCode === 422 && <p className="email_error">{emailErrors}</p>} */}
          </div>
          <form action="" onSubmit={supmit}>
            <div
              className="form-head"
              style={{ textAlign: "center", margin: "0 0 10px 0" }}
            >
              <h3>Sign Up</h3>
            </div>
            <div className="form-group">
              <lable htmlFor="name">Name</lable>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <lable htmlFor="email">Email</lable>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
                  {accept && statsCode === 422 && <p className="alert-danger">{emailErrors}</p>}
            </div>
            <div className="form-group">
              <lable htmlFor="password">password</lable>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your password"
                required
              />
              {password.length < 8 && accept && (
                <p className="alert-danger">Password must be 8 characters</p>
              )}
            </div>
            <div className="form-group">
              <lable htmlFor="repeat">repeatPassword</lable>
              <input
                type="password"
                name="repeat"
                id="repeat"
                value={passwordR}
                onChange={(e) => setPasswordR(e.target.value)}
                placeholder="Enter Your repeatPassword"
                required
              />
              {passwordR !== password && accept && (
                <p className="alert-danger">Password did not match</p>
              )}
            </div>
            <div className="form-submit" style={{ textAlign: "center" }}>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
