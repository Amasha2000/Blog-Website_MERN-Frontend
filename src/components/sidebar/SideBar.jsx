import React,{useState,useEffect} from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SideBar() {

  const [cats, setCats] = useState([]);
  

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  },[]);

  return (
    <div className='sidebar'>
      <div className="sideBarItem">
        <span className="sideBarTitle">
          ABOUT ME
        </span>
        <img src="https://www.edarabia.com/wp-content/uploads/2015/11/7-ways-to-become-the-person-everyone-respects.jpg" alt="" width="250px" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nisi nobis asperiores eius fugiat maiores molestias suscipit voluptates facere quibusdam! 
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">
          CATEGORIES
        </span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <Link key={c.name} to={`/?cat=${c.name}`} className='link'>
            <li className="sideBarListItem">
            {c.name}
            </li>
            </Link>
          ))}        
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">
          FOLLOW US
        </span>
        <div className="sideBarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
