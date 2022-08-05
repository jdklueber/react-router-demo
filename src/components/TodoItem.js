function TodoItem({todo, updateTodo}) {
    const onClickHandler = () => {
        const newTodo = {...todo};
        newTodo.complete = true;
        updateTodo(newTodo);
    }

    return (
        <div onClick={onClickHandler}>
            {todo.task} - {todo.complete? "Done" : "Pending"}
        </div>
    );
}

export default TodoItem;