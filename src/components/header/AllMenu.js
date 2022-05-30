import React from 'react'
import {menu, create} from '../../data/allMenu'
import { AllMenuItem } from './AllMenuItem'

export const AllMenu = () => {
  return (
    <div className='all_menu'>
        <div className="all_menu_header">
            menu
        </div>
        <div className="all_menu_wrap scrollbar">
           <div className="all_left">
           <div className="all_menu_search">
                <i className="amm_s_ic"></i>
                <input type="text" placeholder='search menu'/>
            </div>
            <div className="all_menu_group">
           <div className="all_menu_group_header">Social</div>
              {menu.slice(0,6).map((item,i)=>{
             return(
                <AllMenuItem key={i} name={item.name} description={item.description} icon={item.icon} />
             )
          })}
          </div>
          <div className="all_menu_group">
           <div className="all_menu_group_header">Entertainment</div>
              {menu.slice(6,9).map((item,i)=>{
             return(
                <AllMenuItem key={i} name={item.name} description={item.description} icon={item.icon} />
             )
          })}
          </div>
          <div className="all_menu_group">
           <div className="all_menu_group_header">Shopping</div>
              {menu.slice(9,11).map((item,i)=>{
             return(
                <AllMenuItem key={i} name={item.name} description={item.description} icon={item.icon} />
             )
          })}
          </div>
          <div className="all_menu_group">
           <div className="all_menu_group_header">Personal</div>
              {menu.slice(11,15).map((item,i)=>{
             return(
                <AllMenuItem  key={i} name={item.name} description={item.description} icon={item.icon} />
             )
          })}
          </div>
          <div className="all_menu_group">
           <div className="all_menu_group_header">Professional</div>
              {menu.slice(15,17).map((item,i)=>{
             return(
                <AllMenuItem key={i} name={item.name} description={item.description} icon={item.icon} />
             )
          })}
          </div>
          <div className="all_menu_group">
           <div className="all_menu_group_header">More from meta</div>
              {menu.slice(21,23).map((item,i)=>{
             return(
                <AllMenuItem key={i} name={item.name} description={item.description} icon={item.icon} />
             )
          })}
          </div>
           </div>
           <div className="all_right">
               <div className="all_right_header">Create</div>
              {create.map((item,i)=>{
                  return(
                    <div className="all_right_item hover1"  key={i}>
                   <div className="all_right_circle">
                       <i className={item.icon}></i>
                       
                   </div>
                   <span>{item.name}</span>
                    </div>
                  )
              })}
           </div>
        </div>
    </div>
  )
}
