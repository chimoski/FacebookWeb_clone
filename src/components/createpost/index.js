import { Feeling, LiveVideo, Photo } from '../../svg'
import './style.css'
export const CreatePost = ({user, setVisible}) => {
  return (
    <div className="create_post">
      <div className="create_post_header">
        <img src={user.pic} alt="" />
        <div className="open_post hover2" onClick={()=>setVisible(true)}>
          What's on Your mind, {user?.firstname} ?
        </div>
      </div>
      <div className="create_splitter"></div>
      <div className="create_post_body">
        <div className="create_post_icon hover1">
          <LiveVideo color="#f3425f"/>
          Live Video
        </div>
        <div className="create_post_icon hover1">
          <Photo color="#4bbf67"/>
          Photo/Video
        </div>
        <div className="create_post_icon hover1">
          <Feeling color="#f7b920"/>
          Feeling/Activity
        </div>
      </div>
    </div>
  )
}
