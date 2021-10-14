import React from "react";
import {Link, useLocation} from "react-router-dom";
import './User.css'
import oli from '../../components/img/oli.jpg'

import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish
} from "@material-ui/icons";



export default function User(props) {
    const locationData = useLocation()
    const [usuarioInfo, setUsuarioInfo] = React.useState(locationData.state?.item || {
        username: "",
        avatar: "",
        email: "",
        status: "",
        transaction: "",
        phone: ""
    });


    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setUsuarioInfo((info) => {
            return {
                ...info,
                [name]: value
            }
        })
    }

    function handleSubmit() {

    }

    return (

        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle"> Edit User </h1>
                <Link to="/newUser">
                    <button className="userAddButton"> Create</button>
                </Link>
            </div>

            <div className="userContainer">

                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            className="userShowImg"
                            src={usuarioInfo.avatar}
                            alt=""
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{usuarioInfo.id}</span>
                            <span className="userShowUserTitle">Software Engineer </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">{usuarioInfo.username}</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+1 123 856 14</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">AnnaBeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">New York | Usa</span>
                        </div>
                    </div>
                </div>

                <form action="" onSubmit={handleSubmit}>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit </span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label htmlFor="">Full Name</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={usuarioInfo.username}
                                        onChange={handleChange}
                                        className="userUpdateInput"
                                    />
                                </div>

                                <div className="userUpdateItem">
                                    <label htmlFor="">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={usuarioInfo.email}
                                        onChange={handleChange}
                                        className="userUpdateInput"
                                    />
                                </div>

                                <div className="userUpdateItem">
                                    <label htmlFor="">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={usuarioInfo.phone}
                                        onChange={handleChange}
                                        className="userUpdateInput"
                                    />
                                </div>

                                <div className="userUpdateItem">
                                    <label htmlFor="">Address</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        className="userUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img
                                        className="userUpdateImg"
                                        src={oli}
                                        alt=""/>
                                    <label htmlFor="file">
                                        <Publish className="userUpdateIcon"/>
                                    </label>
                                    <input type="file" id="file" style={{display: "none"}}/>
                                </div>
                                <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
                            </div>
                        </form>
                    </div>
                </form>
            </div>
        </div>
)
}