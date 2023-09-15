import { useContext, useState } from "react";
import { Menus, cardsData } from "./SidebarData";
import control from "../assets/control.png";
import Card from "./Card";
import Recharts from "./BarChart";
import { Donut } from "./Donut";
import AddProfileButton from "./AddProfileButton";
import { BsSearch } from "react-icons/bs"
import { FaRegBell } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import ModalAddProfileButton from "./ModalAddProfileButton";
import { AuthContext } from "./AuthProvider";
import instagram from "../assets/installgram.png"
import youtube from "../assets/youtube.png"
import whatsapp from "../assets/whatsapp.png"
import message from "../assets/mail.png"

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user,check } = useContext(AuthContext)
  console.log(user)
  const openModal = () => {
    setIsModalOpen(!open);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleBurger = () => {
    setOpen(!open)
  }
  return (
    <div className="flex p-4">
      <div
        className={`md:w-[19%] md:static absolute text-white z-[5]  md:min-h-full  top-[8%] ${open ? "left-[0] w-[60%]" : "-left-[100%]"
          }   bg-blue-600 p-5  pt-8  duration-1000 rounded-xl`}
      >

        <div className="p-2">
          <h1
            className={`text-white origin-left font-medium text-[28px] duration-200`}
          >
            Board.
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:text-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >
              <img src={Menu.src} alt="" />
              <span className={`origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[100%] md:w-[75%]  ml-8 p-2">
        <div className="w-full flex justify-between items-center px-2 mb-2">
          <div onClick={handleBurger} className="md:hidden block text-2xl font-bold font-[poppins] ">

            {!open ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </div>
          <h1 className="text-2xl font-bold font-[poppins] ">Dashboard</h1>
          <div className="flex">

            <div className="w-[200px] md:block h-[25px] flex justify-between items-center hidden bg-white text-slate-400 rounded-full px-4">Search.... <BsSearch className="inline-block" />  </div>
            <FaRegBell className="text-[18px] font-bold ml-3" />
            <img className="rounded-full w-[20px] h-[20px] ml-3 " src="https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="profile" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
          {cardsData.map((card) => (
            <Card
              Key={card.id}
              image={card.image}
              name={card.name}
              price={card.price}
              discount={card.discount}
            />
          ))}
        </div>
        <Recharts />
        <div className="flex flex-col md:flex-row items-center gap-9">
          <div className="w-full md:w-1/2">
            <Donut />
          </div>
          <div className="w-full md:w-1/2">
            {
              !check? <AddProfileButton onButtonClick={openModal} /> : <div className="bg-white w-full h-[370px]  p-8 rounded-[20px] shadow-md mt-6">
                <h1 className="font-[poppins] font-bold text-[24px]">{user.name}</h1>
                <div className="grid grid-cols-2 gap-11 m-auto justify-between mt-12 ml-8">
                  <div className="flex items-center underline">
                    <img className="w-[60px]" src={whatsapp} alt="instagram" />
                    {user.mobile}
                  </div>
                  <div className="flex items-center underline">
                    <img className="w-[60px]"  src={instagram} alt="instagram" />
                    {user.instagram}
                  </div>
                  <div className="flex items-center underline">
                    <img className="w-[60px]"  src={message} alt="instagram" />
                    {user.email}
                  </div>
                  <div className="flex items-center underline ">
                    <img className="w-[60px]"  src={youtube} alt="instagram" />
                    {user.youtube}
                  </div>


                </div>
              </div>
            }

          </div>
        </div>
        {isModalOpen && <ModalAddProfileButton closeModal={closeModal} />}
      </div>

    </div>
  );
};
export default Sidebar;