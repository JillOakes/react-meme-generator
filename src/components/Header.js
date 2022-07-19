import logo from "../images/picard.png";

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="header--image" alt="exasperated Picard"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}