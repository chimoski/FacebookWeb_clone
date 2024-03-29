import React from 'react'

export const HelpSupport = ({setVisible}) => {
  return (
    <div className='absolute_wrap'>
        <div className="absolute_wrap_header">
            <div className="circle" onClick={()=> setVisible(0)}>
                <i className="arrow_back_icon"></i>
            </div>
            Help & Support
        </div>
        <div className="menu_item hover3">
            <div className="small_circle">
                <i className="help_center_icon"></i>
            </div>
            <span>Help center</span>
        </div>
        <div className="menu_item hover3">
            <div className="small_circle">
                <i className="email_icon"></i>
            </div>
            <span>Support inbox</span>
        </div>

        <div className="menu_item hover3">
            <div className="small_circle">
                <i className="info_filled_icon"></i>
            </div>
            <span>Report a problem</span>
        </div>
    </div>
  )
}
