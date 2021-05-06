import React, {useState} from 'react'


const Context = React.createContext()



function Provider(props) {
    const [input, setInput] = useState({desc: "", val: "", type: "inc" })
    const [incInputs,setIncInputs] = useState([])
    const [expInputs,setExpInputs] = useState([])

    const handleChange= (e)=> {
       const {value,name} = e.target
       setInput(prev=> (
           {...prev,
           [name]:value}
       )
           
       )
    }
    const handleInputs = () => {
        const addInput ={
            id: new Date().toLocaleTimeString(),
            ...input
        }
        if (addInput.type ==="inc") {
            setIncInputs(prev=> [...prev, addInput])
        }
        else {
            setExpInputs(prev=> [...prev, addInput])
        }
    }


    return (
        <>
            <div className="add">
                <div className="add__container">
                    <select  onChange = {handleChange} type = "select" className="add__type" name='type' value = {input.type}>
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input onChange = {handleChange} type="text" className="add__description" placeholder="Add description" value= {input.desc} name="desc"/>
                    <input onChange = {handleChange} type="number" className="add__value" placeholder="Value" value = {input.val} name="val" />
                    <button onClick = {handleInputs}className="add__btn"><i className="ion-ios-checkmark-outline"></i></button>
                    
                </div>
            </div>
            <Context.Provider value={{incInputs, expInputs}}>
                {props.children}
            </Context.Provider>
        </>
        
    )

}
export {Provider, Context}