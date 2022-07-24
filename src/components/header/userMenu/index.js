import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { DisplayAcces } from './DisplayAcces';
import { HelpSupport } from './Help&Support';
import { Settings } from './Settings';

export const UserMenu = ({dummyUser}) => {
    const [visible, setVisible] = useState(0);
  return (
    
       <div className='menu'>
           {
             visible === 0 &&
                <div>
                <Link to="/profile" className='menu_header hover3'>
               <img width='300px' src={dummyUser?.pic} alt="" />
               <div className="menu_col">
                   <span>
                       {dummyUser.firstname}
                   
                       {dummyUser.surname}
                   </span>
                   <span>See your profile</span>
               </div>
           </Link>
           <div className="menu_splitter"></div>
           <div className="menu_main hover3">
               <div className="small_circle">
                   <i className="report_filled_icon"></i>
               </div>
               <div className="menu_col">
                   <div className="menu_span1">Give feedback</div>
                   <div className="menu_span1">Help us improve facebook</div>
               </div>
           </div>
           <div className="menu_splitter"></div>
           <div className="menu_item hover3" onClick={()=> setVisible(1)}>
               <div className="small_circle">
                   <i className="settings_filled_icon"></i>
               </div>
               <span>settings & privacy</span>
               <div className="rarrow">
                   <i className="right_icon"></i>
               </div>
           </div>
           <div className="menu_item hover3"  onClick={()=> setVisible(2)}>
               <div className="small_circle">
                   <i className="help_filled_icon"></i>
               </div>
               <span>Help & support</span>
               <div className="rarrow">
                   <i className="right_icon"></i>
               </div>
           </div>
           <div className="menu_item hover3" onClick={()=> setVisible(3)}>
               <div className="small_circle">
                   <i className="dark_filled_icon"></i>
               </div>
               <span>Display & Accessibility</span>
               <div className="rarrow">
                   <i className="right_icon"></i>
               </div>
           </div>
           <div className="menu_item hover3">
               <div className="small_circle">
                   <i className="logout_filled_icon"></i>
               </div>
               <span>Log out</span>
           </div>
          </div>
           }
               {
                   visible === 1  && 
                   <Settings  setVisible={setVisible}/>
               }
               {
                   visible === 2  && 
                   <HelpSupport  setVisible={setVisible}/>
               }
               {
                   visible === 3  && 
                   <DisplayAcces  setVisible={setVisible}/>
               }
   </div>
  )
}
