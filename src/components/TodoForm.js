import React from 'react';
import style from './Todoform.css';

const TodoForm = props => {
    return (
        <form className='form'>
            <label>
                To Do:
                <input type='text' name='todo' onChange={(event) => props.changeVal(event.target.value)} value={props.inputValue} />
            </label>
            <input type='button' className='formbutton' value='add todo' onClick={(val) => props.add(props.inputValue)} />
        </form>
    );
}

export default TodoForm;