import React from 'react'



function Income(props) {

    return (
        <div className="item clearfix" id="income-0">
            <div className="item__description">{props.obj.desc}</div>
            <div className="right clearfix">
                <div className="item__value">+ {props.obj.val}</div>
                <div className="item__delete">
                    <button className="item__delete--btn">
                        <i className="ion-ios-close-outline"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Income