import { useState } from "react";

export default function NewTask({ onAdd }) {

    const [enterdTask, setEnterdTask] = useState('');

    function handleChange(event) {
        setEnterdTask(event.target.value);
    }

    function handleClick() {
        if (enterdTask.trim()) {
            onAdd(enterdTask);
            setEnterdTask('');
        }else{
            return;
        }
    }

    function handleKeyDown(event){
        if (enterdTask.trim() && event.key === 'Enter') {
            onAdd(enterdTask);
            setEnterdTask('');
        }else{
            return;
        }

    }



    return <div className="flex items-center gap-4">
        <input 
        type="text" 
        className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
        onChange={handleChange} 
        value={enterdTask}
        onKeyDown={handleKeyDown}
        
        />
        <button 
        className="text-stone-700 hover:text-stone-950" 
        onClick={handleClick}
        
        >Add Task</button>
    </div>
}