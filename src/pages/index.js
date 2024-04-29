import TaskList from "@/pages/components/Tasklist";
import {useState} from "react";

export default function Home() {

    // State to hold the task and priority values
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [tasksList, setTasksList] = useState([]);

    // Event handler for the input field
    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    // Event handler for the radio buttons
    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    // Event handler for the button click
    const handleAddTask = () => {
        console.log('Task:', task);
        console.log('Priority:', priority);
        let taskItem = {
            'taskId':`id-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
            'taskName':task,
            'taskPriority':priority,
        }

        if(task && priority){
            setTasksList((prevState)=>{
                if(tasksList?.length > 0){
                    return [...prevState, taskItem]
                }else{
                    return [taskItem]
                }
            });
        }else{
            alert('Hey enter the values first 😤')
        }

        console.log(taskItem)

        setTask('')

    };

    //deleteTask
    function handleDelete(){

    }

  return (
    <>
        <div className="w-1/3 bg-white p-6 rounded-md shadow-md m-auto mt-6">
            <div className="flex flex-col mb-4 bg-gray-300 p-4 rounded-md">
                <p className={'mb-6 text-2xl text-center font-bold'}>Task Initializer 📝</p>
                <input type="text" placeholder="Enter your task" className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={task} onChange={handleTaskChange} />
                <div className="flex flex-col mb-4">
                    <div>
                        <input type="radio" id="high-prior" name="priority" value="High" className="mr-2" onChange={handlePriorityChange} />
                        <label htmlFor="high-prior" className="mb-2 text-sm">High Priority</label>
                    </div>

                    <div>
                        <input type="radio" id="low-prior" name="priority" value="Low" className="mr-2" onChange={handlePriorityChange} />
                        <label htmlFor="low-prior" className="text-sm">Low Priority</label>
                    </div>
                </div>
                <button className={'bg-gray-500 text-white rounded-md p-3'} onClick={handleAddTask}>Add Task</button>
            </div>

            <TaskList data={tasksList} deleteHandler={handleDelete}/>

        </div>

    </>
  )
}
