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
        this.setState({ newTodo: event.target.value }); // update newTodo จาก event ที่เกิดขึ้น นำค่า value ไปใส่ newTodo
    };

    newTodo = () => { //ฟังก์ชันเซ็ตค่าไอเทมใหม่ลงไปใน todoItems
        this.setState({ //set ค่า ใน State
            todoItems: [
                ...this.state.todoItems, //แพร่ไอเทมที่มีอยู่ออกมา
                { action: this.state.newTodo, done: false },//add todoItems อันใหม่ อ้างอิงจากค่า newTodo และให้ค่า done เป็น False
            ],
        });
    };

    todoRows = () => //นำค่าใน todoItems โชว์ขึ้นหน้าเว็บ
        this.state.todoItems.map((item) => ( <
            TodoRows key = { item.action } //ส่งค่าไปที่ component TodoRows โดยให้ key คือ item.action
            item = { item } //ค่าใน array แต่ละตัว
            callback = { this.toggleDone } //ฟังชั่นที่ใช้สำหรับ callback เรียกใช้ตัว toggleDone
            />
        ));

    toggleDone = (todo) => //เปลี่ยนค่าภายใน checkbox เป็น true
        this.setState({ //set ค่า ใน State
            todoItems: this.state.todoItems.map((item) => //map ค่าที่ละ item
                item.action === todo.action ? {...item, done: true } : item //ถ้าชื่อ item.action เหมือนกันกับ todo.action ให้แแพร่ค่าของ item และทำการset ค่าของ done เป็น True ถ้าไม่จริงก็ไม่ทำอะไร
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