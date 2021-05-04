import React from 'react'


function Header(props) {
    const month = new Date().toLocaleString("default", { month: "long" })
    const year =  new Date().getFullYear()
    const percentage = () => (
        props.totalInc? `${Math.round((props.totalExp /props.totalInc) * 100)}%` : "---"
    )
    return (
        
        <header>
            <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{`${month} ${year}`}</span>:

                </div>
                
                <div className="budget__value">{props.totalInc - props.totalExp}</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">+ {props.totalInc}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                        
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- {props.totalExp}</div>
                        <div className="budget__expenses--percentage">{percentage()}</div>
                    </div>
                </div>
            </div>
          </div>
        </header>
    )
}

export default Header