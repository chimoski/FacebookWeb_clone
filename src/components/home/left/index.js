import{ useState }from 'react'
import { LeftLink } from './LeftLink'
import './style.css'
import { left } from '../../../data/home'
import { Link } from 'react-router-dom'
import { ArrowDown1 } from '../../../svg'
import { Shortcut } from './Shortcut'

export const LeftHome = ({dummyUser}) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className='left_home scrollbar'>
        <Link to="/profile" className="left_link hover1">
          <img src={dummyUser?.pic} alt="" />
          <span>{dummyUser?.firstname} {dummyUser?.surname }</span>
        </Link>
        {
          left.slice(0,9).map((link,i)=>{
            return(
               <LeftLink key={i} 
               img={link.img}
                notification={link.notification}
                 text={link.text} />
            )
          })
        }
      {
        !seeMore && 
        <div className="left_link hover1" onClick={()=> setSeeMore(true)}>
        <div className="small_circle" >
          <ArrowDown1 />
        </div>
        <span>see more</span>
      </div>
      }
        <div className="more_left">
        {
         seeMore && 
         left.slice(9).map((link,i)=>{
          return(
             <LeftLink key={i} 
             img={link.img}
              notification={link.notification}
               text={link.text} />
          )
        })
        }
       {
         seeMore && 
         <div className="left_link hover1" onClick={()=> setSeeMore(false)}>
         <div className="small_circle rotate">
           <ArrowDown1 />
         </div>
         <span>see less</span>
       </div>
       }
        </div>
        <div className="splitter"></div>
        <div className="shortcuts">
          <div className="heading">Your shortcuts</div>
          <div className="edit_shortcuts">Edit</div>
        </div>
        <div className="shortcut_list">
          <Shortcut
          link =""
          img="../../images/ytb.png"
          name="My youtube channel"
           />
            <Shortcut
          link =""
          img="../../images/insta.png"
          name="My youtube channel"
           />
        </div>

        <div className= 'relative_fb_copyright'>
          <Link to="/">Privacy </Link><span>.</span>
          <Link to="/">Terms </Link><span>.</span>
          <Link to="/">Advertisin </Link><span>.</span>
          <Link to="/">Ad choices <i className="ad_choices_icon"></i>{" "} </Link><span>.</span>
          <Link to="/">Cookies </Link><span>.</span>
          <Link to="/">More </Link><span>.</span>
          <Link to="/">Meta &copy; 2022</Link><span>.</span>
        </div>
    </div>
  )
}
