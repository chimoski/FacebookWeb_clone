import './style.css'
import { Link } from 'react-router-dom'
import {ArrowDown, Friends, Gaming, HomeActive, Logo, Market, Menu, Messenger, Notifications, Search,  Watch} from '../../svg';
import { dummyUser } from '../../dummyData/data';
import { SearchMenu } from './SearchMenu';
import {useState, useRef} from 'react'
import { AllMenu } from './AllMenu';
import useClickOutside from '../../helpers/clickOutside';
import { UserMenu } from './userMenu';

export const Header = () => {
  const color = '#65676b'
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const allMenu = useRef(null);
  const userMenu = useRef(null);
  useClickOutside(allMenu,()=>{
    setShowAllMenu(false);
   
  })
  useClickOutside(userMenu,()=>{
    setShowUserMenu(false);
  })
   
  return (
      <header>
        <div className="header_left">
          <Link to='/' className='header_logo'>
                <div className="circle">
                    <Logo/>
                </div>
            </Link>
            <div className="search search1" onClick={()=> setShowSearchMenu(true)}>
                  <Search color={color} />
                  <input type="text"
                placeholder='Search facebook'
                className='hide_input'
                 />
                </div>
        
        </div>
  {showSearchMenu &&   <SearchMenu color={color}  setShowSearchMenu={ setShowSearchMenu} />}
        <div className="header_middle">
          <Link to='/' className="middle_icon active">
          <HomeActive />
          </Link>
          <Link to='/' className="middle_icon hover1">
          <Friends color={color}/>
          </Link>
          <Link to='/' className="middle_icon hover1">
          <div className="middle_notifications">9+</div>
          <Watch color={color}/>
          </Link>
          <Link to='/' className="middle_icon hover1">
          <Market color={color}/>
          </Link>
           <Link to='/' className="middle_icon hover1">
          <Gaming color={color}/>
          </Link>
        </div>
        <div className="header_right">
          <Link to='/pofile' className='profile_link hover1'>
          <img src={dummyUser?.pic} alt="" />
          <span>{dummyUser?.firstname}</span>
          </Link>
          <div className={`circle_icon hover1 ${showAllMenu && 'active_header'}`} ref={allMenu} >
            <div  onClick ={()=>setShowAllMenu(prev=> !prev)} >
            <Menu/>
            </div>
            {showAllMenu &&  <AllMenu />}
          </div>
          <div className="circle_icon hover1">
             <Messenger/>
          </div>
          <div className="circle_icon hover1">
             <Notifications/>
             <div className="right_notifications">5</div>
          </div>
          <div className={`circle_icon hover1  ${!showUserMenu ? '': 'active_header'}`}  ref={userMenu}>
            <div onClick={()=> setShowUserMenu(!showUserMenu)}>
            <ArrowDown/>
            </div>
            {
              showUserMenu &&  <UserMenu dummyUser={dummyUser}/>
            }
          </div>
         
        </div>
      </header>
  )
}
