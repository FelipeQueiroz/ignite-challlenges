import {useState} from 'react'
import plusIcon from './assets/plus.svg'
import './App.css'
import EmptyTasks from "./components/EmptyTasks/EmptyTasks";
import Task, {ITask} from "./components/Task/Task";
import Header from "./components/Header/Header";
import {v4 as uuidv4} from 'uuid';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<ITask[]>([]);

    const concludedTaskNumber = tasks.filter(task => task.isFinished).length


    const handleCreateTask = () => {
        if(inputValue.length === 0) return;

        setTasks([...tasks, {
            id: uuidv4(),
            isFinished: false,
            description: inputValue
        }])
        setInputValue('')
    }

    const handleFinishTask = (id: string) => {
        const newTasks = tasks.map(task => {
            if(task.id === id){
                return {...task, isFinished: !task.isFinished}
            }
            return task;
        });
        setTasks(newTasks)
    }

    const handleDeleteTask = (id: string) => {
       setTasks((prevState) => prevState.filter(task => task.id !== id));
    }

    return (
    <div className="App">
        <Header />
        <div className={'InputSection'}>
           <input
               className={'Input'}
               placeholder={'Adicione uma nova tarefa'}
               value={inputValue}
               onKeyDown={(e) => {
                   if(e.key === 'Enter') handleCreateTask()
               }}
               onChange={(e) => setInputValue(e.target.value)}
           />
           <button className={'ButtonAdd'} onClick={handleCreateTask}>
               Criar
               <img src={plusIcon} alt={'Icon plus'} />
           </button>
        </div>
        <div className={'TasksInfo'}>
            <p>Tarefas criadas <span>{tasks.length}</span></p>
            <p className={'TaskConcluded'}>Concluídas <span>{concludedTaskNumber} de {tasks.length}</span></p>
        </div>
        <div className={'Tasks'}>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map(task =>
                        <Task
                            task={task}
                            handleDeleteTask={handleDeleteTask}
                            handleFinishTask={handleFinishTask}
                        />
                    )}
                </ul>
            ) : <EmptyTasks />}
        </div>
    </div>
    )
}

export default App
