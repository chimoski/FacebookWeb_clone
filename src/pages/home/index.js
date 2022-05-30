import { Header } from "../../components/header"
import {useRef, useState} from 'react'
import useClickOutside from "../../helpers/clickOutside"

export const Home = () => {
  const [visible, setVisible] = useState(true)
  const el = useRef(null)
  useClickOutside(el, ()=>{
    setVisible(false);
  });
 

  return (
    <div >
      <Header/>
    </div>
  )
}
