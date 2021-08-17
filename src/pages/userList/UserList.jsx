import React, {useState} from "react";
import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {UserRows} from '../../dummyData';
import {Link} from "react-router-dom";

export default function UserList(){
    const [data,setData] = useState(UserRows);

    const handleDelete = (id)=>{
        setData(data.filter((item) => item.id !== id));
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: ' User', width: 200, renderCell: (params)=>{
                return(
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt=""/>
                        {params.row.username}
                    </div>
                )
            } },
        { field: 'email', headerName: 'Email', width: 200},
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field:"action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"./user/" + params.row.id}>
                            <button className="userNameEdit"> Edit </button>
                        </Link>

                        <DeleteOutline className="userNameDelete" onClick={()=> handleDelete(params.row.id)}/>
                    </>

                )
            }
        }
    ];


    return(
        <div className="userList">
            <DataGrid
                rows={data} disaebleSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}