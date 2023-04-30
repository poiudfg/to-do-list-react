import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { TodoRows } from './components/TodoRows';
import './App.css';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'BOCCHI',
            todoItems: [
                //{action:' ', done: true},

            ],
            newTodo: '',
        };
    }

    updateValue = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    newTodo = () => {
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                { action: this.state.newTodo, done: false },
            ],
        });
    };

    todoRows = () =>
        this.state.todoItems.map((item) => ( <
            TodoRows key = { item.action }
            item = { item }
            callback = { this.toggleDone }
            />
        ));

    toggleDone = (todo) =>
        this.setState({
            todoItems: this.state.todoItems.map((item) =>
                item.action === todo.action ? {...item, done: true } : item
            ),
        });

    render = () => ( 
        <div className = "container" >
            <div className = "row" >
                <div className = 'head' >
                    <Navbar name = { this.state.userName }/> 
                </div> 
                <div className = 'col-12' >
                    <input className = 'form-control' placeholder = 'Enter Text' value = { this.state.newTodo } onChange = { this.updateValue }/> 
                    <button class = 'button' onClick = { this.newTodo } > Add </button> 
                </div> 
                <div className = 'col-12' >
                    <table className = 'table' >
                        <thead >
                            <tr >
                                <th > Task </th> 
                                <th > Complete </th> 
                            </tr> 
                        </thead> 
                    <tbody > { this.todoRows() } </tbody> 
                    </table> 
                </div> 
            </div> 
        </div>
    )
}