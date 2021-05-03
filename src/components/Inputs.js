import React, {useState} from 'react'


function Inputs(props) {

    const [inputs, setInputs] = useState({desc: "", val: "", type: "inc" })

    const handleChange = (e) => {
        const {name , value} = e.target
        setInputs(prevInputs => (
            {...prevInputs,
            [name]:value}
        ))
} 
    const handleInputs = () => {
        const data = {
            id: new Date().toISOString(),
            ...inputs
        }
        props.exportInputs(data)
        
        console.log(data)
        
    }
    




    return (
        <div className="add">
            <div className="add__container">
                <select  onChange = {handleChange} type = "select" className="add__type" name='type' value = {inputs.type}>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input onChange = {handleChange} type="text" className="add__description" placeholder="Add description" value= {inputs.desc} name="desc"/>
                <input onChange = {handleChange} type="number" className="add__value" placeholder="Value" value = {inputs.val} name="val" />
                <button onClick = {handleInputs}className="add__btn"><i className="ion-ios-checkmark-outline"></i></button>
                
            </div>
        </div>
               
                    
        )
}
    
 

    


export default Inputs