import React, { useState } from 'react'
import Header from '../header/Header'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function AddReceptionist() {
    const[name,setName] = useState(null);
    const[phoneNumber,setPhoneNumber] = useState(null);
    const[email,setEmail] = useState(null);
    const[password,setPassword] = useState(null);
    const[raddress,setRaddress] = useState(null);
    const {token} = useSelector((store)=>store.user)
    const saveRecord = async(event)=>{
        event.preventDefault();
        const config = {
            headers : { Authorization: 'Bearer ' + token }
        }
        let response = await axios.post("http://apps.codebetter.in:8082/clinic/api/reception/save",{name,phoneNumber,email,password,raddress},config);

        if(response.data.status){
            toast.success("Receptionist successfully saved")
        }
        else{
            toast.error("Operation is failed")
        }


    }
  return <>
    <Header/>
       <ToastContainer/>
        <section className="book_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={saveRecord}>
                            <h4>
                                ADD-<span>RECEPTIONIST</span>
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
                            <div className="form-group col-lg-4">
                                    <label for="inputPatientName">Address </label>
                                    <input type="text" onChange={(event)=>setRaddress(event.target.value)} className="form-control" id="inputPatientName" placeholder="XXXXXXXXXX" />
                                </div>
                            </div>
                            <div className="btn-box">
                                <button type="submit" className="btn ">ADD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

  </>
}
