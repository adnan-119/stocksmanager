import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Stocks from './userpages/Stocks'
import Portfolio from './userpages/Portfolio'
import Transactions from './userpages/Transactions'
import Help from './userpages/Help'
import Profile from './userpages/Profile'
import Login from './userpages/Login'
import UserRegistration from './userpages/UserRegistration'
import './style.css'

export default function NavBar() {
  return (
    <div align="left" className='navbar'> 
    <div className='ul'>
        <ul>
            <li className='Home'><Link to='/' class="Home" >Stock Manager</Link></li>    
                
        </ul>
        
        <ul>
            <li style={{marginLeft:"50px"}}><Link to='/home'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/transactions'>Transactions</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/help'>Help</Link></li>
            
        </ul>
        <div className='hr'>
          <hr/>
       </div>
       </div>

       <div>
        <Routes>
            <Route path='/' Component={Login}/>
            <Route path='/home' Component={Stocks}/>
            <Route path='/portfolio' Component={Portfolio}/>
            <Route path='/transactions' Component={Transactions}/>
            <Route path='/profile' Component={Profile}/>
            <Route path='/help' Component={Help}/>
            <Route path='/login' Component={Login}/>
            <Route path='/registration' Component={UserRegistration}/>
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
