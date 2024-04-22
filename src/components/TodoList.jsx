function TodoList({ todos, onDelete }) {
    return (
        <>
            <ul>
                {todos.map((todo, i) => (
                    <>
                        <li>{todo.text}</li>
                        <button onClick={() => onDelete(i)}>삭제</button>
                    </>
                ))}
            </ul>
        </>
    )
}

export default TodoList
