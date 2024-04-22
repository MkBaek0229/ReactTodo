import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'

function App() {
    const [todos, setTodos] = useState([
        {
            text: '할일1',
        },
        {
            text: '할일2',
        },
        {
            text: '할일3',
        },
    ])
    // state 처리를 하는 영역

    const onInsert = (str) => {
        setTodos([...todos, str])
    }

    const onDelete = (index) => {
        // todos의 todo들중 삭제를 선택한 todo는 false로 새배열에서 제외 todo는 true로 새로운 배열인 updateTodos에 새로 반환한다.
        const updateTodos = todos.filter((_, i) => i !== index)
        console.log(updateTodos)
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
