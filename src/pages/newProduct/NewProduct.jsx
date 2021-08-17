import * as React from "react";
import './newProduct.css'

export default function NewProduct(){
    return(
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form action="" className="addProductForm">
                <div className="addProductItem">
                    <label >Image</label>
                    <input type="file" id="file"/>
                </div>
                <div className="addProductItem">
                    <label >Name</label>
                    <input type="file" placeholder="Apple Airpods"/>
                </div>
                <div className="addProductItem">
                    <label >Stock</label>
                    <input type="file" placeholder="123"/>
                </div>
                <div className="addProductItem">
                    <select name="active" id="active" >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}