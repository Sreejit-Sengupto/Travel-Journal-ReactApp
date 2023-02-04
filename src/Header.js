import image from "./image.png"
import "./Header.css"

export default function Header(){
    return (
        <div className="header">
            <img src={image} className="header--img" alt="header logo"/>
            <h2 className="header--text">My Travel Journal</h2>
        </div>
    )
}