import React from 'react'

export const AllMenuItem = ({icon, name, description}) => {
  return (
  <div className="all_menu_item hover1">
        <img src={`../../left/${icon}.png`} alt="icon" />
        <div className="all_menu_col">
            <span className='all_menu_col_header'>{name}</span>
            <span>
               {description}
            </span>
        </div>
    </div>
  )
}
 