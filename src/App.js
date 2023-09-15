import { useContext } from "react";
import Signin from "./Components/Authentication";
import Sidebar from "./Components/Sidebar";
import { AuthContext } from "./Components/AuthProvider";

export default function App() {
  const {isAuth}=useContext(AuthContext)
  return (
   <div className="bg-[#F8FAFF]">
    {isAuth ? <Sidebar/>:<Signin/>}   
   </div>
  )
}