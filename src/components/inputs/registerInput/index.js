import './style.css'
import { useField,ErrorMessage } from 'formik'
import {useMediaQuery} from 'react-responsive'
export const RegisterInput = ({placeholder,bottom,...props}) => {
  const [field,meta] = useField(props);
  const view1 = useMediaQuery({
    query: '(min-width: 540px)'
  })
  const view2 = useMediaQuery({
    query: '(min-width: 850px)'
  })
  const view3 = useMediaQuery({
    query: '(min-width: 1170px)'
  })

  const test1 = view3 && field.name ==='firstname' 
  const test2 = view3 && field.name ==='surname' 
  return (
    <div className='input_wrapper register_input_wrap'>
      <input
      className={meta.touched && meta.error  ? 'input_error_border':''}
       placeholder={placeholder}
      name={field.name}
      type={field.type}
      {...field}
      {...props}
      style={{width: `${view1 &&
         (field.name === 'firstname'
          || field.name === 'surname') ? "100%" : view1 &&
           (field.name ==='email' || field.name === 'password') ? '370px' : '300px'
        }`
      }}
       />
       {meta.touched && meta.error &&
      <div   className={!view3?'input_error': 'input_error input_error_desktop'}
    style={{ transformm: "translateY(2px)",
      left:`${test1 ? '-107%' : test2? "107%" : ""}`}}
      >
      {
      meta.touched && meta.error && <ErrorMessage name={field.name}/>
      }
       {
         meta.touched && meta.error &&  <div className={ view3 && field.name !=='surname'? "arrow_right" :
          view3 && field.name=== 'surname'? ' arrow-left': 'arrow_bottom'}>
           
         </div>
      }
      
    </div>
      }
       {meta.touched && meta.error ? <i className='error_icon'></i>: ''}
       
    </div>
  )
}
