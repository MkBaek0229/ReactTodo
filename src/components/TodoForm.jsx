import { useState } from "react";

function TodoForm({onInsert}) {
    // state 처리를 하는 영역

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onInsert(text);
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }
    // view 를 처리하는 영역
     return (
       <>
         <form onSubmit={handleSubmit}>
         <input type="text" value = {text} onChange={handleChange}/><button type="submit">등록</button>
         </form>
       </>
     )
   }
   
   export default TodoForm
   