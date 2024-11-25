import { NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Books">Books</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
            <NavLink to="/About">About</NavLink>
        </nav>
    )
}