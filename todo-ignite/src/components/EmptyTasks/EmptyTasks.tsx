import './EmptyTasks.css'
import ClipboardIcon from '../../assets/clipboard.svg'
function EmptyTasks() {
    return (
        <div className={'Box'}>
            <img src={ClipboardIcon} alt={'Clipboard icon'} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}
export default EmptyTasks