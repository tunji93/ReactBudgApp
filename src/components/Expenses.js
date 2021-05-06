
import React, {useContext} from 'react'

import {Context} from '../useContext/Context'


function Expenses(props) {
    const {deleteItem, incInputs} = useContext(Context)

    const totalInc = () => {
        let total = 0
        incInputs.forEach(element => {
            total+= parseFloat(element.val)
        });
        return total
    }
    const percentage = () => {
        
        if (totalInc()) {
            return Math.round((parseFloat(props.obj.val)/totalInc()) * 100)
        }
        return "---"
    }

    return (
        
        <div className="item clearfix" id="expense-0">
            <div className="item__description">{props.obj.desc}</div>
            <div className="right clearfix">
                <div className="item__value">- {props.obj.val}</div>
                <div className="item__percentage">{percentage()}%</div>
                <div className="item__delete">
                    <button onClick = {()=>{deleteItem(props.obj)}} className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Expenses