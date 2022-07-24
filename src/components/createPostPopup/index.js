import './style.css';
import {useState} from 'react';
import { EmojiPickerBackground } from './EmojiPickerBackground';
import {AddToYourPost} from './AddToYourPost'
import { ImagePreview } from './ImagePreview';
import { createPost } from '../../functions/post';
import {PulseLoader} from 'react-spinners/PulseLoader';
import { PostError } from './PostError';
import { uploadImages } from '../../functions/uploadImages';

export const CreatePostPopup = ({user,setVisible}) => {
    const [text, setText] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [background, setBackground] = useState('');
    const [error, setError] = useState('An error occurred');
    const response = async()=>{
        if(background){
        setLoading(true);
        const data = await createPost(null,background,text,null,user.id,user.token);
        setBackground("");
        setText("");
        setShowPreview(false);
        setLoading(false);

        if(response === 'ok') {
            setBackground("");
            setText("");
            setShowPreview(false);
        } else{
           setError(response);
        } 
        } else if(images && images.length){
            setLoading(true);
            const postImages = images.map(img=>{
                return dataURLtoBlob(img)
            })
            const path =`${user.username}/post Images`
            const formData = newFormData();
            formData.append("path",path)
            postImages.forEach(image=>{
                formData,append("file", image);
            });
            const response = await uploadImages(formData,path)
        } else if(text){
            setLoading(true);
            const data = await createPost(null,background,text,null,user.id,user.token);
            setBackground("");
            setText("");
            setShowPreview(false);
            setLoading(false);

        } else{
        
        }
       
       
  
  return (
    <div className='blur'>
        <div className="postbox">
        {error && (
              <PostError error={error} setError = {setError} />
        )
        }
            <div className="box_header">
                <div className="circle_icon" onClick={()=>setVisible(false)}>
                    <i className="exit_icon"></i>
                </div>
                <span>Create post</span>
            </div>
            <div className="box_profile">
                <img  src={user.pic} alt="" className='box_profile_img' />
                <div className="box_col">
                    <div className="box_profile_name">
                        {user.firstname} {user.surname}
                    </div>
                    <div className="box_privacy">
                        <img src="../../..//icons/public.png" alt="" />
                        <span>Public</span>
                        <i className="arrowDown_icon"></i>
                    </div>
                </div>
            </div>
            {
               ! showPreview ? (
            <>

              <EmojiPickerBackground
              text ={ text}
              setText ={setText}
              user={user}
              showPreview={showPreview}
              background={background}
              setBackground={setBackground}
              
            />
            </>
                )
                :
                <ImagePreview
                user={user}
                text={text}
                setText={setText}
                showPreview={showPreview}
                setShowPreview={setShowPreview}
                images={images}
                setImages = {setImages}
                 />
            }
         <AddToYourPost
          setShowPreview={setShowPreview}
          />
         <button
         disabled={loading}
          className="post_submit">
            {/* {loading ?<PulseLoader color="#fff" size={5}/> : 'Post'} */}
            Post
            </button>
        </div>
    </div>
  )
}
}
