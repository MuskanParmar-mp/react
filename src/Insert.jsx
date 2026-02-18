import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Insert() {

  let [frmdata, setFrmdata] = useState({
    name: "",
    age: "",
    contact: "",
    city: ""
  })

  let nav = useNavigate()

  function inputdata(e){
    const { name, value } = e.target
    setFrmdata({ ...frmdata, [name]: value })
  }

  function submit(e){
    e.preventDefault()
    axios.post("http://localhost:3000/userdata", frmdata)
      .then((e) => alert("success..."))

    
    nav("/fetch")
  }

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" name="name" placeholder="Name" onChange={inputdata} />
        <input type="text" name="age" placeholder="Age" onChange={inputdata} />
        <input type="text" name="contact" placeholder="Contact" onChange={inputdata} />
        <input type="text" name="city" placeholder="City" onChange={inputdata} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Insert
