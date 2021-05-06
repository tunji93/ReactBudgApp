
import React, {useContext} from 'react'

import {Context} from '../useContext/Context'


function Expenses(props) {
    const {deleteItem} = useContext(Context)

    return (
        
        <div className="item clearfix" id="expense-0">
            <div className="item__description">{props.obj.desc}</div>
            <div className="right clearfix">
                <div className="item__value">- {props.obj.val}</div>
                <div className="item__percentage"></div>
                <div className="item__delete">
                    <button onClick = {()=>{deleteItem(props.obj)}} className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Expenses