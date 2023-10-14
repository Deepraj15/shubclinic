import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

export default function ReceptionistList() {
  const { token, name } = useSelector((store) => store.user)
  const [receptionistList, setReceptionistList] = useState([])
  const config = {
    headers: { Authorization: "Bearer " + token }
  }
  useEffect(() => {
    loadReceptionist()
  }, [])

  const loadReceptionist = async () => {

    let response = await axios.get("http://apps.codebetter.in:8082/clinic/api/reception/lists", config)

    if (response.data.status) {
      setReceptionistList(response.data.data)
    }
    else {
      toast.error("Oops! Something went wrong")
    }

  }


const deleteRecord = async (id) => {
  let response = await axios.put("http://apps.codebetter.in:8082/clinic/api/reception/delete/3", { id }, config)
  if (response.status) {
    let index = receptionistList.findIndex((obj)=>obj.id == id);
    receptionistList.splice(index,1);
    setReceptionistList([...receptionistList])
    toast.success("Successfully Deleted")
  }
  else {
    toast.error("Oops something went wrong")
  }
}

return <>
  <ToastContainer/>
  <Header />
  <table className='table'>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Password</th>
        <th>Address</th>
        <th>Doctor</th>
        <th>Operation</th>
      </tr>
    </thead>
    <tbody>
      {receptionistList.map((receptionist, index) => <tr key={index}>
        <td>{index + 1}</td>
        <td>{receptionist.id}</td>
        <td>{receptionist.name}</td>
        <td>{receptionist.phoneNumber}</td>
        <td>{receptionist.password}</td>
        <td>{receptionist.raddress}</td>
        <td>{name}</td>
        <td><button className='btn btn-outline-danger ' onClick={() => deleteRecord(receptionist.id)}>Delete</button>
          <button className='btn btn-outline-primary ml-3'>Update</button></td>
      </tr>)}
    </tbody>
  </table>

</>
}
