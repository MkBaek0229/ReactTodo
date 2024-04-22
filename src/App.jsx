import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'
import { useRef } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: '할일' },
        { id: 2, text: '할일' },
        { id: 3, text: '할일' },
    ])
    // state 처리를 하는 영역

    let lastId = useRef(4)

    const onInsert = (text) => {
        const updateTodos = todos.concat({
            id: lastId.current,
            text,
        })

        setTodos(updateTodos)
        lastId.current++
    }

    const onDelete = (id) => {
        // todos의 todo들중 삭제를 선택한 todo는 false로 새배열에서 제외 나머지 todo는 true로 새로운 배열인 updateTodos에 새로 반환한다.
        const updateTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updateTodos)
    }
    // view 를 처리하는 영역
    return (
        <>
            <TodoHeader />
            <TodoForm onInsert={onInsert} />
            {/* 부모 자식간의 데이터를 공유하는 props */}
            <TodoList todos={todos} onDelete={onDelete} />
        </>
    )
}

export default App
