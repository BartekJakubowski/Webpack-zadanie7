import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';
import Todo from '../components/Todo.js';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
                },  {
                id: 2,
                text: 'wash the dishes'
                },  {
                id: 3,
                text: 'feed my cat'
                }],
            text: ''
        };
    }
    
    changeValue(value) {
        this.setState({text: value});
    }
    
    addToDo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo]; //push todo na koncu tablicy
        this.setState({data}); //({data}) to samo co ({data: data})
    }
    
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title='To Do List' number={`Number of things to be done: ${this.state.data.length}`}/>
                <TodoForm add={(val) => this.addToDo(val)} changeVal={(value) => this.changeValue(value)} inputValue={this.state.text} />
                <TodoList data={this.state.data} remove={(id) => this.removeTodo(id)}/>
            </div>
        );
    }
}

export default App;