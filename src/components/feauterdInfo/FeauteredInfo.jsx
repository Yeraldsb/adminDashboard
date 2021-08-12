import React from 'react'
import "./feauteredInfo.css"
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'


export default function FeauteredInfo(){
    return(
        <div className="featured">
            <div className="feauteredItem">
                <span className="featutedTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="feauteredMoney">$2.41</span>
                    <span className="feauteredMoneyRate">
                        -11.4 <ArrowDownward className="feauteredIcon negative"/>
                    </span>
                </div>
                <span className="feauteredSub">Compare to last month</span>
            </div>

            <div className="feauteredItem">
                <span className="featutedTitle">Sales </span>
                <div className="featuredMoneyContainer">
                    <span className="feauteredMoney">$4.415</span>
                    <span className="feauteredMoneyRate">
                        -1.4 <ArrowDownward className="feauteredIcon negative" />
                    </span>
                </div>
                <span className="feauteredSub">Compare to last month</span>
            </div>

            <div className="feauteredItem">
                <span className="featutedTitle"> Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="feauteredMoney">$2.225</span>
                    <span className="feauteredMoneyRate">
                        +2.4 <ArrowUpward className="feauteredIcon " />
                    </span>
                </div>
                <span className="feauteredSub">Compare to last month</span>
            </div>
        </div>
    )
}
