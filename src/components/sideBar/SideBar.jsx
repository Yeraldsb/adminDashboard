import React from 'react'
import "./sidebar.css"
import {LineStyle,Timeline, TrendingUp} from '@material-ui/icons'
import Menu from "./Menu";

export default function SideBar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard </h3>
                    <ul className="sidebarList">
                        <li className="sidebarlistItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarlistItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarlistItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>

                    <Menu />
                </div>
            </div>
        </div>
    )
}