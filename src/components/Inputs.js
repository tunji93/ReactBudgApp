import React, {useState} from 'react'

function Inputs({manageClick}) {

    const [desc, setDesc] = useState('')
    const [val, setValue] = useState('')
    const [type, setType] = useState('')
    
    const handleChange = (e) => {
       if (e.target.type === "text" ) {
          setDesc(e.target.value)
       }
       else if (e.target.type === "number") {
           setValue(e.target.value)
           
       }
       else {
           setType(e.target.value)
           
       }
    }
    const handleClick = () => {
       const obj = {
           id: new Date().toLocaleTimeString(),
           desc,
           val,
           type
       }
       manageClick(obj)
    }
 
return (
    <div className="add">
        <div className="add__container">
            <select onChange = {handleChange} type = "select" className="add__type" value = {type} name='Type'>
                <option value="inc">+</option>
                <option value="exp">-</option>
            </select>
            <input onChange = {handleChange}  name = "Desc" value = {desc} type="text" className="add__description" placeholder="Add description"/>
            <input onChange = {handleChange} name = "Value" value = {val} type="number" className="add__value" placeholder="Value"  />
            <button onClick = {handleClick} className="add__btn"><i className="ion-ios-checkmark-outline"></i></button>
            
        </div>
    </div>
           
                
    )
    
}

export default Inputs