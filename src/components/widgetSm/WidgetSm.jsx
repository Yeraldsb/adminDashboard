import React from "react";
import Jake from '../img/jake.jpg'
import Leo from '../img/leo.jpg'
import olga from '../img/olga.jpg'
import tara from '../img/tara.jpg'
import './widgetSm.css'
import {Visibility} from "@material-ui/icons";

export default function WidgetSm() {

    const data = [
        {
            id: 1,
            avatar: Jake,
            name: 'Jake Smith',
            position: 'Full Stack Developer'
        },
        {
            id: 1,
            avatar: Leo ,
            name: 'Leonell Campos',
            position: 'Full Stack Developer'
        },
        {
            id: 1,
            avatar: olga ,
            name: 'Olga Sorbie',
            position: 'Full Stack Developer'
        },
        {
            id: 1,
            avatar: tara,
            name: 'Michell Schott',
            position: 'Full Stack Developer'
        },
    ]
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Member </span>
            <div className="WidgetSmContainerList">
                <ul className="widgetSmList">
                    {data.map(user =>
                        <li className="widgetSmItem">
                            <img
                                src={user.avatar}
                                alt=""
                                className="widgetSmImage"/>
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.name} </span>
                                <span className="widgetSmUserTitle">{user.position} </span>
                            </div>
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Display
                            </button>
                        </li>
                    )}
                </ul>

            </div>
        </div>
    )
}