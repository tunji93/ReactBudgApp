import React, {useContext} from 'react'
import {Context} from "../useContext/Context"


function Header(props) {

    const {incInputs, expInputs} = useContext(Context)
    const month = new Date().toLocaleString("default", { month: "long" })
    const year =  new Date().getFullYear()
    const totalInc = () => {
        let total = 0
        incInputs.forEach(element => {
            total+= parseFloat(element.val)
        });
        return total
        
    }
    const totalExp = () => {
        let total = 0
        expInputs.forEach(element => {
            total+= parseFloat(element.val)
        });
        return total
    }
    const Total = totalInc() - totalExp()

    const percentage = () => {
        if (totalInc()) {
            return Math.round((totalExp()/totalInc()) * 100)
        }
        return "---"
    }
    
    return (
        
        <header>
            <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{`${month} ${year}`}</span>:

                </div>
                
                <div className="budget__value">{Total}</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">+ {totalInc()}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                        
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- {totalExp()}</div>
                        <div className="budget__expenses--percentage">{percentage()}%</div>
                    </div>
                </div>
            </div>
          </div>
        </header>
    )
}

export default Header