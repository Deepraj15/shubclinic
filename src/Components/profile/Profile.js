import { ToastContainer } from "react-toastify";
import Header from "../header/Header";
import { useSelector } from "react-redux";

export default function Profile(){
    const {isLoggedIn,token,id,name,email,phoneNumber} = useSelector((store)=>store.user);
    return <>
     <Header/>
     <ToastContainer/>
     <section className="book_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <h4>
                PROFI<span>LE</span>
              </h4>
              <div className="form-row ">
              <div className="form-group col-lg-4">
                  <label for="inputPatientName">ID</label>
                  <input value={id} type="text" className="form-control" id="inputPatientName" placeholder="" />
                </div>

                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Name</label>
                  <input value={name} type="text" className="form-control" id="inputPatientName" placeholder="" />
                </div>

                <div className="form-group col-lg-4">
                  <label for="inputPhone">Phone Number</label>
                  <input value={phoneNumber} type="number" className="form-control" id="inputPhone" placeholder="XXXXXXXXXX" />
                </div>
              </div>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label for="inputPatientName">Email</label>
                  <input value={email} type="text"  className="form-control" id="inputPatientName" placeholder="xxxxxxxx" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
 
    </>
}