import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import AdminHome from './adminpages/AdminHome'
import AdminViewUsers from './adminpages/AdminViewUsers'
import DeleteUsers from './adminpages/DeleteUsers'
import InsertUsers from './adminpages/InsertUsers'
import './style.css'

export default function NavBarAdmin() {
  return (
    <div align="left" className='navbar'> 
    <div className='ul'>
        <ul>
            <li className='Home'><Link to='/' class="Home" >Stock Manager </Link><i style={{color:'red'}}>Admin</i></li>   
            
        </ul>
        <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/AdminViewUsers'>View Users</Link></li>  
        <li><Link to='/DeleteUsers'>Delete Users</Link></li>
        <li><Link to='/InsertUsers'>Insert Users</Link></li>
       
        </ul>
        <div className='hr'>
          <hr/>
       </div>
       </div>

       <div>
        <Routes>
            <Route path='/' Component={AdminHome}/>
            <Route path='/home' Component={AdminHome}/>
            <Route path='/AdminViewUsers' Component={AdminViewUsers}/>
            <Route path='/DeleteUsers' Component={DeleteUsers}/>
            <Route path='/InsertUsers' Component={InsertUsers}/>
        </Routes>  
          <br/>
          <br/>
          
        <footer>
          <p style={{color:"white"}}>&copy; 2024 Stocksmanager. All rights reserved.</p>
        </footer>
        </div>
    </div>
  )
}
