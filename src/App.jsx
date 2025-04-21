import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Authentication from "./Components/Authentication"
import Profile from "./Components/Profile"
import Feed from "./Components/Feed"
export default function App() {
  return (
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />} >
      <Route path="/" element={<Feed/>}></Route>
      <Route path='/login' element={<Authentication/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      </Route>
      
    </Routes>

    </BrowserRouter>

  )
}