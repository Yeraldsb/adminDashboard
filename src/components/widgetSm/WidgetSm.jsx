import React from "react";
import Jake from '../img/jake.jpg'
import './widgetSm.css'
import {Visibility} from "@material-ui/icons";

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Member </span>
            <ul className="widgetSmList">
                <li className="widgetSmItem">
                    <img
                        src={Jake}
                        alt=""
                        className="widgetSmImage"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmItem">
                    <img
                        src={Jake}
                        alt=""
                        className="widgetSmImage"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmItem">
                    <img
                        src={Jake}
                        alt=""
                        className="widgetSmImage"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmItem">
                    <img
                        src={Jake}
                        alt=""
                    className="widgetSmImage"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmItem">
                    <img
                        src={Jake}
                        alt=""
                        className="widgetSmImage"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}