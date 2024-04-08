import { useState } from "react"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { TaskCard } from "./components/TaskCard"

interface ITaskCard {
  id: number;
  content: string;
  isDone: boolean;
}

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<ITaskCard[]>([])

  function handleSaveTask() {
    if(!tasks) {
      return
    }

    setTasks([...tasks, {
      id: tasks.length + 1,
      content: task,
      isDone: false,
    }])

    setTask('')
  }

  function handleUpdateIsDone(id: number) {
    const updatedTasks = tasks.map((task) => task.id === id ? {...task, isDone : !task.isDone} : task)

    setTasks(updatedTasks)
  }

  function handleOnCheck(): number {
    const checkedTasks = tasks.filter((task) => task.isDone)
    
    return checkedTasks.length
  }

  function handleOnDelete(id: number) {
    const deleteTask = tasks.filter((task) => task.id !== id)

    setTasks(deleteTask);
  }

  return (
    <div className="bg-black h-screen p-10">
      <div className="flex space-x-3 justify-center items-center">
        <Input 
          value={task} onChange={(event) => setTask(event.target.value)}
        />
        <Button 
          title="Enviar"
          onClick={handleSaveTask}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-3 mt-4">
          <span className="text-blue-300">Tarefas criadas</span>
          <span className="text-black bg-blue-300 rounded-full px-2">{tasks.length}</span>
        </div>
        <div className="flex items-center space-x-3 mt-4">
          <span className="text-blue-300">Concluídas</span>
          <span className="text-black bg-blue-300 rounded-full px-2">{handleOnCheck()} de {tasks.length}</span>
        </div>
      </div>
      
     { tasks.map((task) => 
        <TaskCard 
        // propriedades
          key = {task.id}
          task = {task}
          handleChange={() => handleUpdateIsDone(task.id)}
          handleDelete={() => handleOnDelete(task.id)}
        />
      )}
    </div>
  )
}

export default App
