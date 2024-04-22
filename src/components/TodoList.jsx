function TodoList({ todos, onDelete }) {
    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <>
                        <li>
                            {' '}
                            {todo.id} /{todo.text}
                        </li>
                        <button onClick={() => onDelete(todo.id)}>삭제</button>
                    </>
                ))}
            </ul>
        </>
    )
}

export default TodoList
