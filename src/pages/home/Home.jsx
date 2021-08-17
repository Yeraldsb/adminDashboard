import React from 'react'
import "./home.css"
import FeauteredInfo from "../../components/feauterdInfo/FeauteredInfo";
import {Chart} from "../../components/chart/Chart";
import {userData} from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";


export default function Home(){
    return(
        <div className="home">
            <FeauteredInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
