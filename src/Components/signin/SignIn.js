import { useState } from "react";
import About from "../about/About";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Testimonial from "../testimonial/Testimonial";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux-config/UserSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = async (event)=>{
    event.preventDefault();
    let response = await axios.post("http://apps.codebetter.in:8082/clinic/auth/login",{email,password},{headers: {
      'Content-Type': 'application/json'
    }});

    if(response.data.status){
      toast.success("SIGN Success...");
      let email = response.data.data.email;
      let token = response.data.msg;
      let name = response.data.data.name;
      let phoneNumber = response.data.data.phoneNumber;
      let id = response.data.data.id;
      dispatch(setUser({email,token,name,phoneNumber,id}));
      navigate("/profile");
    }
    else{
      toast.error("Sign Failed...");
    }
  }
  return <>
    <Header />
    <ToastContainer />
    <section className="book_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={signIn}>
              <h4>
                SIGN <span>IN</span>
              </h4>
              <div className="form-row ">
               
                <div className="form-group col-lg-4">
                  <label for="inputSymptoms">Email</label>
                  <input type="text" onChange={(event) => setEmail(event.target.value)} className="form-control" id="inputSymptoms" placeholder="name@gmail.com" />
                </div>
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Password</label>
                  <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" id="inputPatientName" placeholder="xxxxxxxx" />
                </div>
              </div>
              
              <div className="btn-box">
                <button type="submit" className="btn ">Sign IN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Testimonial />
    <About />
    <Footer />
  </>
}
