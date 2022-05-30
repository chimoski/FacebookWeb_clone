import React, {useRef, useState, useEffect} from 'react'
import useClickOutside from '../../helpers/clickOutside';
import { Return, Search } from '../../svg'

export const SearchMenu = ({color ,setShowSearchMenu}) => {
    const [showIcon, setShowIcon] = useState(true);
    let el = useRef(null);
    let input = useRef(null);
    useClickOutside (el, ()=>{
        setShowSearchMenu(false);
    })
    const focusOnClick =()=>{
        input.current.focus();
    }
    useEffect(() => {
    input.current.focus();
    }, []);


    

  return (
   <div className="header_left search_area scrollbar" ref={el}>
       <div className="search_wrap" >
           <div className="header_logo">
               <div className="circle hover1" onClick={()=> setShowSearchMenu(false)}>
                   <Return color={color}/>
               </div>
           </div>
           <div className="search" onClick={focusOnClick} >
               <div>
                  {showIcon &&  <Search color={color}/>}
               </div>
               <input type="text" placeholder='Search facebook' ref={input} onBlur={()=> setShowIcon(true)}  onFocus={()=> setShowIcon(false)}/>
           </div>
       </div>
       <div className="search_history_header">
           <span>Recent searches</span>
           <a>Edit</a>
       </div>
       <div className="search_history"></div>
       <div className="search_result scrollbar">
       </div>
   </div>
  )
}
