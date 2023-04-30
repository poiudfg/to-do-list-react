import React, { Component } from "react";
export class Navbar extends Component {
    //รับค่า name มาแสดงหน้าเว็บ
    render = () => (
        <div className="col-12">
            <h2 className="text-while text-center p2">
                {this.props.name} TO DO LIST 
            </h2>
        </div>
    );
}