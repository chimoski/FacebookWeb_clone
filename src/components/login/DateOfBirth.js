import { useMediaQuery } from "react-responsive"
export const DateOfBirth = ({bDay,bMonth,bYear,handleChange,years,days,months,dateErrors}) => {
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
    style={{marginBottom:`${!view3 && dateErrors ? '4rem' :'0'} `}}
    >
        
        <select name="bDay" value={bDay} onChange={handleChange}>
            {days.map((day,i)=>{
                return(
                    <option value={day} key={i}>{day}</option>
                )
            })}
        </select>
        <select name="bMonth" value={bMonth} onChange={handleChange}>
            {months.map((month,i)=>{
                return(
                    <option value={month} key={i}>{month}</option>
                )
            })}
        </select>
        <select name="bYear" value={bYear} onChange={handleChange}>
            {years.map((year,i)=>{
                return(
                    <option value={year} key={i}>{year}</option>
                )
            })}
        </select>
        {dateErrors &&
         <div className={!view3 ? 'input_error': 'input_error input_error_left' }>
             <div className={!view3? "arrow_bottom" : "arrow_right"}
             style={{top:`${view3 ? '15px' :'-10px' }`}}
             ></div>
            {dateErrors}
            </div>}
    </div>
  )
}
