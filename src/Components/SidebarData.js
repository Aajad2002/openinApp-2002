import Chart_fill from '../assets/Chart_fill.png';
import Chat from '../assets/Chart.png';
import User from '../assets/User.png';
import Calendar from '../assets/Calendar.png';
import Setting from '../assets/Setting.png';
// import { FiPieChart } from 'react-icons/fi';
import revenuesa from '../assets/revenuesa.png';
import transaction from '../assets/transaction.png';
import like from '../assets/like.png';
import users from '../assets/users.png';

export const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Transactions", src: Chat },
    { title: "Schedule ", src: Calendar },
    { title: "Users", src: User },
    { title: "Setting", src: Setting },
  ];

export  const cardsData = [
    {
      id: 1,
      image: revenuesa,
      name: "Total Revenues",
      price: "$2,129,430",
      discount: "+2.5%"
    },
    {
      id: 2,
      image: transaction,
      name: "Total Transactions",
      price: "1,520",
      discount: "+1.7%"
    },
    {
      id: 3,
      image: like,
      name: "Total Likes",
      price: "9,721",
      discount: "+1.4%"
    },
    {
      id: 4,
      image: users,
      name: "Total Users",
      price: "9,721",
      discount: "+4.2%"
    }
  ];