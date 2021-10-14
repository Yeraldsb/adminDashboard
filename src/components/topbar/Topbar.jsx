import React from 'react'
import yeraldin from '../img/yeraldin.jpg'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {

    return (
        <div className="topbar">
            <div className="topbarWraper">
                <div className="topLeft">
                    <span className="logo"> Admin Dashboard </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={yeraldin} className="topAvatar"  alt="hola" />
                </div>

            </div>

        </div>
    )
}