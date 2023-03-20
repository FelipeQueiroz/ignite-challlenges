import './styles.css'
import TrashIcon from '../../assets/trash.svg'
import Checkbox from "../Checkbox/Checkbox";

export interface ITask {
    id: string,
    description: string,
    isFinished: boolean,


}

interface IProps {
    task: ITask
    handleFinishTask: (id: string) => void
    handleDeleteTask: (id: string) => void
}

function Task(props: IProps) {

    return (
        <li className={`Task ${props.task.isFinished && `finished`}`}>
            <div>
                <Checkbox
                    label={props.task.description}
                    checked={props.task.isFinished}
                    onClick={() => props.handleFinishTask(props.task.id)}
                />
            </div>
            <button className={'IconButton'} onClick={() => props.handleDeleteTask(props.task.id)}>
                <img alt={'Icon to exclude task of the list'} src={TrashIcon} />
            </button>
        </li>
    )
}
export default Task;