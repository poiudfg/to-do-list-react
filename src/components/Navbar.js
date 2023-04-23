import React, { Component } from "react";
export class Navbar extends Component {
    render = () => (
        <div className="col-12">
            <h2 className="bg-primary text-while text-center p2">
                {this.props.name} TO DO LIST
            </h2>
        </div>
    );
}