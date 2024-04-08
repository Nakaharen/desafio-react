import { Button } from "../Button";

interface ITaskCardProps {
  //propriedades
  task: ITask;
  handleChange: () => void;
  handleDelete: () => void;
}

interface ITask {
  id: number;
  content: string;
  isDone: boolean;
}

export function TaskCard(data: ITaskCardProps) {
  return (
    <div className="flex space-x-3 mt-4 bg-slate-900 p-4 rounded-md items-center">
      <input type="checkbox" checked={data.task.isDone} onChange={data.handleChange}/>
      <p className="text-blue-300">
        {data.task.content}
      </p>
      <Button 
        title="Excluir"
        onClick={data.handleDelete}
      />
    </div>
  )
}