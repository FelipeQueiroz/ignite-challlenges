import './styles.css';
import rocketLogo from "../../assets/rocket.svg";

function Header() {
    return (
        <header>
            <img src={rocketLogo} alt={'Just a simple logo rocket image'} />
            <h1 className={'Title'}>to<span>do</span></h1>
        </header>
    )
}
export default Header;