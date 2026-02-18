import { Route, Routes } from "react-router-dom"
import Insert from "./Insert"
import Fetch from "./Fetch"

function App(){
  return(
    <>
      <Routes>
        <Route index element={<Insert />} />
        <Route path="/fetch" element={<Fetch />} />
      </Routes>
    </>
  )
}

export default App
