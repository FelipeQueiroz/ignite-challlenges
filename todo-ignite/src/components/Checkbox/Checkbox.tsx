import './styles.css'


interface IProps {
    checked: boolean;
    label: string;
    onClick: () => void;
}
function Checkbox(props: IProps) {
    return (
        <label className="container" >{props.label}
            <input type="checkbox" checked={props.checked} onClick={props.onClick} />
            <span className="checkmark" onClick={props.onClick}></span>
        </label>
    )
}

export default Checkbox;