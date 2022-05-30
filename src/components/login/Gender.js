import { useMediaQuery } from "react-responsive"
export const Gender = ({handleChange,genderError}) => {
  const view1 = useMediaQuery({
    query: '(min-width: 540px)'
  })
  const view2 = useMediaQuery({
    query: '(min-width: 850px)'
  })
  const view3 = useMediaQuery({
    query: '(min-width: 1170px)'
  })
  return (
    <div className="reg_grid"
    style={{marginBottom: `${!view3 &&  genderError && '50px'}`}}
    >
    <label htmlFor='male'>
        Male
        <input 
        type="radio"
         name="gender" 
         id="male"
         value='male'
         onChange={handleChange}
          />
    </label>
    
    <label htmlFor='female'>
        Female
        <input 
        type="radio"
         name="gender" 
         id="female"
         value='female'
         onChange={handleChange}
          />
    </label>
    <label htmlFor='custom'>
        Custom
        <input 
        type="radio"
         name="gender" 
         id="custom"
         value='custom'
         onChange={handleChange}
          />
    </label>
    {genderError &&
      <div className={!view3 ? 'input_error': 'input_error input_error_left' }>
      <div className={!view3? "arrow_bottom" : "arrow_right"}
      style={{top:`${view3 ? '15px' :'-10px' }`}}
      ></div>
     {genderError}
     </div>}
 </div>
  )
}
