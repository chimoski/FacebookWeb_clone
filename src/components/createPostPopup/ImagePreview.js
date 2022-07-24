import { EmojiPickerBackground } from "./EmojiPickerBackground"
import {useRef} from 'react'
export const ImagePreview = ({text,user,setText, setShowPreview,showPreview, images, setImages}) => {
  const imageInputRef = useRef(null)
  const handleChange =(e)=>{
    let files = Array.from(e.target.files);
    files.forEach(img=>{
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (readEvent)=>{
        setImages((images)=>[...images,readEvent.target.result]);
      }
    })
  }
  return (
    <div className="overflow_a scrollbar">
      <EmojiPickerBackground 
      text ={ text}
      setText ={setText}
      user={user}
      type2
      />

      <div className="add_pics_wrap">
        <input type="file" multiple hidden accept="image/png, image/jpeg" ref={imageInputRef} onChange={handleChange} />
        {
          images && images.length > 0 ? 
          <div className="add_pics_inside1 p0">
            <div className="preview_actions">
              <button>
                <i className="edit_icon"></i>
                Edit
              </button>
              <button   onClick={()=> imageInputRef.current.click()}>
                <i  className="addPhoto_icon"></i>
                Add Photos/Videos
              </button>
            </div>
            <div className="small_white_circle" onClick={()=>setImages([])}>
              <i className="exit_icon"></i>
            </div>
            <div className={
              images.length === 1 ? 'preview1'
              :images.length ===2 ? 'preview2'
              :images.length ===3 ? 'preview3'
              :images.length ===4 ? 'preview4'
              :images.length ===5 ? 'preview5'
              :images.lenght % 2===0 ? 'preview6'
              : 'preview6 singular_grid'
               }>
              {
                images.map((img,i)=>(
                  <img src={img} key={i} alt="" />
                ))
              }
            </div>
          </div>
          : 
          <div className="add_pics_inside1">
            <div className="small_white_circle" onClick={()=> setShowPreview(false)} >
              <i className="exit_icon" ></i>
            </div>
            <div className="add_col" onClick={()=> imageInputRef.current.click()}>
              <div className="add_circle">
                <i className="addPhoto_icon"></i>
              </div>
              <span>Add photos/videos</span>
              <span>or drag and drop</span>
            </div>
          </div>
        }

        <div className="add_pics_inside2">
          <div className="add_circle">
            <i className="phone_icon"></i>
          </div>
          <div className="mobile_text">Add Photos from your mobile device</div>
          <span className="addPhone_btn">Add</span>
        </div>
      </div>
    </div> 
  )
}
