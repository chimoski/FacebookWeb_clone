import './style.css'
import { useField,ErrorMessage } from 'formik'
import {useMediaQuery} from 'react-responsive'
export const LoginInput = ({placeholder,bottom,...props}) => {
  const [field,meta] = useField(props);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
  return (
    <div className='input_wrapper'>
      {meta.touched && meta.error && !bottom &&
      <div className= {!isDesktopOrLaptop?'input_error': 'input_error input_error_desktop'}>
      {
      meta.touched && meta.error && <ErrorMessage name={field.name}/>
      }
      {
         meta.touched && meta.error && <div className={ !isDesktopOrLaptop?"arrow_top": 'arrow_right'}>

         </div>
      }
    </div>
      }
    
      <input
      className={meta.touched && meta.error  ? 'input_error_border':''}
       placeholder={placeholder}
      name={field.name}
      type={field.type}
      {...field}
      {...props}
       />
       {meta.touched && meta.error && bottom &&
      <div className={!isDesktopOrLaptop?'input_error': 'input_error input_error_desktop'}>
      {
      meta.touched && meta.error && <ErrorMessage name={field.name}/>
      }
       {
         meta.touched && meta.error &&  <div className={ !isDesktopOrLaptop?"arrow_bottom": 'arrow_right'}>
           
         </div>
      }
      
    </div>
      }
       {meta.touched && meta.error ? <i style={{top: `${!bottom && !isDesktopOrLaptop ? '55%' : '15px'}`}} className='error_icon'></i>: ''}
       
    </div>
  )
}
