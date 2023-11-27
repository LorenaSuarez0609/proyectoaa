import React from 'react'
import { FcEmptyTrash } from "react-icons/fc";
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
    todo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
}) => {
    return (
        <li>
            <span
                onClick={() => handleCompleteTodo(todo.id)}>
                <label 
                    className= {`container-done ${todo.done ? 'active' : ''}`}
                    ></label>
            </span>
            <TodoUpdate todo = {todo} handleUpdateTodo={handleUpdateTodo} />
            <button 
                clasName="btn-delete" 
                onClick ={() => handleDeleteTodo(todo.id)}
            >
                <FcEmptyTrash />
            </button>
        </li>
    );
};
