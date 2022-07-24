import { Header } from "../../components/header"
import { LeftHome } from "../../components/home/left"
import { RightHome } from "../../components/home/right"
import { dummyUser } from "../../dummyData/data"
import { Stories } from "../../components/stories"
import './style.css'
import { CreatePost } from "../../components/createpost"
export const Home = ({setVisible}) => {
  return (
   <>
   
    <div className="home">
    <Header/>
      <LeftHome dummyUser={dummyUser}/> 
      <div className="home_middle">
        <Stories/>
        <CreatePost user ={dummyUser} setVisible={setVisible}/>
      </div>
      <RightHome user={dummyUser}/>
    </div>
   </>
  )
}
