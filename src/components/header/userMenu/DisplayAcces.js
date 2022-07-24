import React from 'react'

export const DisplayAcces = ({setVisible}) => {
  return (
   <div className="absolute_wrap">
       <div className="absolute_wrap_header">
           <div className="circle hover1" onClick={()=> setVisible(0)}>
               <i className="arrow_back_icon"></i>
           </div>
           Display & accesibility
       </div>
       <div className="menu_main">
           <div className="small_circle">
               <i className="dark_filled_icon"></i>
           </div>
            <div className="menu_col">
           <span className="menu_span1">Dark Mode</span>
           <span className="menu_span2">Adjust the appearance of facebook to reduce glare and give your eye a break
         </span>
       </div>
     </div>
     <label htmlFor='darkOff'>
         <span>OFF</span>
         <input type="radio" name='dark' id='darkOff'/>
     </label>
     <label htmlFor='darkOn'>
         <span>ON</span>
         <input type="radio" name='dark' id='darkOn'/>
     </label>

     <div className="menu_main">
           <div className="small_circle">
               <i className="dark_filled_icon"></i>
           </div>
            <div className="menu_col">
           <span className="menu_span1">Compact Mode</span>
           <span className="menu_span2">Adjust the appearance of facebook to reduce glare and give your eye a break
         </span>
       </div>
     </div>
     <label htmlFor='compactOff'>
         <span>OFF</span>
         <input type="radio" name='compact' id='compactOff'/>
     </label>
     <label htmlFor='darkOn'>
         <span>ON</span>
         <input type="radio" name='compact' id='compactOn'/>
     </label>
     <div className="menu_item hover3">
         <div className="small_circle">
             <i className="keyboard_icon"></i>
             
         </div>
       <span>
           keyboard
       </span>
       <div className="rarrow">
           <i className="right_icon"></i>
       </div>
     </div>
   </div>
  )
}
