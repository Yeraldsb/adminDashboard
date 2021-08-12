import React from 'react'
import "./sidebar.css"
import {PermIdentity,Storefront,Timeline,Report,WorkOutline, AttachMoney, BarChart, MailOutline,DynamicFeed, ChatBubbleOutline} from '@material-ui/icons'

export default function Menu(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu </h3>
                    <ul className="sidebarList">
                        <li className="sidebarlistItem active">
                            <PermIdentity className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarlistItem">
                            <Storefront className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarlistItem">
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarlistItem">
                            <BarChart className="sidebarIcon" />
                           Reports
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Notifications </h3>
                    <ul className="sidebarList">
                        <li className="sidebarlistItem active">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarlistItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarlistItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Transactions
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Staff </h3>
                    <ul className="sidebarList">
                        <li className="sidebarlistItem active">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarlistItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarlistItem">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    )
}