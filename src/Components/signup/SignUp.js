import React, { useState } from 'react'
import Header from '../header/Header'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const[name,setName] = useState(null);
    const[phoneNumber,setPhoneNumber] = useState(null);
    const[email,setEmail] = useState(null);
    const[password,setPassword] = useState(null);
    const navigate = useNavigate()
    const signUpDoctor = async (event)=>{
        event.preventDefault();
       const response = await axios.post("http://apps.codebetter.in:8082/clinic/auth/doctor/save",{name,phoneNumber,email,password},{
            headers: {
                'Content-Type': 'application/json'
                }
        });
        if(response.data.status){
           navigate('/sign-in')
        }
        else{
            for(let errorObj of response.data.data){
                toast.error(errorObj.message)
            }
        }
    }
    return <>
       <Header/>
       <ToastContainer/>
        <section className="book_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={signUpDoctor}>
                            <h4>
                                SIGN <span>UP</span>
                            </h4>
                            <div className="form-row ">
                                <div className="form-group col-lg-4">
                                    <label for="inputPatientName">Name </label>
                                    <input type="text" onChange={(event)=>setName(event.target.value)} className="form-control" id="inputPatientName" placeholder="" />
                                </div>

                                <div className="form-group col-lg-4">
                                    <label for="inputPhone">Phone Number</label>
                                    <input type="number" onChange={(event)=>setPhoneNumber(event.target.value)} className="form-control" id="inputPhone" placeholder="XXXXXXXXXX" />
                                </div>
                                <div className="form-group col-lg-4">
                                    <label for="inputSymptoms">Email</label>
                                    <input type="text" onChange={(event)=>setEmail(event.target.value)} className="form-control" id="inputSymptoms" placeholder="" />
                                </div>
                            
                            </div>
                            <div className="form-row ">
                            <div className="form-group col-lg-4">
                                    <label for="inputPatientName">password </label>
                                    <input type="password" onChange={(event)=>setPassword(event.target.value)} className="form-control" id="inputPatientName" placeholder="XXXXXXXXXX" />
                                </div>
                            </div>
                            <div className="btn-box">
                                <button type="submit" className="btn ">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </>
}
