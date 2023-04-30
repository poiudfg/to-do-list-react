# to-do-list-react
To-do lists are a list of tasks that an individual needs to complete or accomplish. Tasks are typically put in order by priority or importance. A to-do list can be written on a piece of paper or by utilizing task management software.

### index :
* [install](#npm-install )
* [React App](#Getting-Started-with-Create-React-App)
* [oop](#OOP)

# npm install 

 * install node_moudule

```bash
npm install
```

 * install bootstrap 5 react

```bash
npm install react-bootstrap bootstrap
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# OOP

  Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

### The following class diagram has.

![image](https://user-images.githubusercontent.com/94011063/235308772-1024920b-e7d6-4a2c-87e4-dbb0bae3a9e5.png)

From the class diargram, it can be seen that App, todoRow and Navbar are subclass component

### Class 1 : Component

React lets define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, Use methods are called in the following order of a component is being created and inserted into the DOM:

* constructor()
* render()

[Detail React.Component](https://legacy.reactjs.org/docs/react-component.html)

### Class 2 : App

```js
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
```
### Class 3 : Navbar

```js
export class Navbar extends Component {
    render = () => (
        <div className="col-12">
            <h2 className="text-while text-center p2">
                {this.props.name} TO DO LIST
            </h2>
        </div>
    );
}
```

### Class 4 : TodoRows

```js
export class TodoRows extends Component {
    render = () => (
      <tr>
        <td>{this.props.item.action}</td>
        <td>
          <input 
            type="checkbox"
            checked={this.props.item.done}
            onChange ={ () => this.props.callback(this.props.item)}
          />
        </td>
      </tr>
    );
}
```
