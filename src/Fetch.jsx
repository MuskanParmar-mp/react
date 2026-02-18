import axios from "axios"
import { useEffect, useState } from "react"

function Fetch(){

  let [apidata, setApidata] = useState([])
  let [show,setShow] = useState(false)
  let [editdata,seteditdata] = useState()

  function mydelete(id){
    axios.delete(`http://localhost:3000/userdata/${id}`)
    .then((e)=>alert("deleted..."))
  }

  function editinput(e){
    const {name,value} = e.target 
    seteditdata({...editdata,[name]:value})
  }

  function finalsubmit(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/userdata/${editdata.id}` , editdata)
    .then((e)=>alert("updated.."))
  }

  useEffect(()=>{
    axios.get("http://localhost:3000/userdata")
      .then((r)=>setApidata(r.data))
  },[mydelete])

  return(
    <>
      <h1>Get data</h1>

      <table border="">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Contact</th>
          <th>City</th>
        </tr>

        {
          apidata.map((e)=>(
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.contact}</td>
              <td>{e.city}</td>
              <td> <button onClick={()=>mydelete(e.id)}>Delete</button></td>
              <td> <button onClick={()=>(setShow(true),seteditdata(e))}>Edit</button></td>
            </tr>
          ))
        }

      </table>

      {
        show && <form onSubmit={finalsubmit}>
          <label htmlFor=""> ID </label>
          <input type="text" value={editdata.id}  name="id" onChange={editinput}/> <br/><br/>

          <label htmlFor=""> Name </label>
          <input type="text" value={editdata.name} name="name" onChange={editinput}/> <br/><br/>

          <label htmlFor=""> Age </label>
          <input type="text" value={editdata.age} name="age" onChange={editinput}/> <br/><br/>

           <label htmlFor=""> City </label>
          <input type="text" value={editdata.city} name="contact" onChange={editinput}/> <br/><br/>

          <input type="submit" /> <br/><br/>

        </form>
      }
    </>
  )
}

export default Fetch
