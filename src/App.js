import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { CreatePostPopup } from './components/createPostPopup';
import { dummyUser } from './dummyData/data';

export const App = () => {
  const [visible,setVisible] = React.useState(false);
  return (
    <div>
     {
      visible && (
        <CreatePostPopup user={dummyUser} setVisible={setVisible}/>
      )
     }
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/" element={<Home  setVisible={setVisible}/>}/>
      </Routes>
    </div>

  )
}  


export default App;
