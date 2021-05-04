
import React from 'react'


function Expenses(props) {

    return (
        <div className="item clearfix" id="expense-0">
            <div className="item__description">{props.obj.desc}</div>
            <div className="right clearfix">
                <div className="item__value">- {props.obj.val}</div>
                <div className="item__percentage">21%</div>
                <div className="item__delete">
                    <button onClick = {()=>props.handleClick(props.obj.id)} className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Expenses