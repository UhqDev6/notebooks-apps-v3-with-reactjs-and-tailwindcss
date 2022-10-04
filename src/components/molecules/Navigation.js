import Navadd from "../atoms/Navadd";
import Navarchive from "../atoms/Navarchive";
import Navhome from "../atoms/Navhome";
import Navlanguage from "../atoms/Navlanguage";
import NavLogout from "../atoms/NavLogout";
import NavTheme from "../atoms/NavTheme";

const Navigation = ({logout, name}) => {
    return(
        <>
            <nav className="flex mt-1 bg-purple-100 rounded-3xl w-96 justify-center">
                <Navhome/>
                <Navadd/>
                <Navarchive/>
                <Navlanguage/>
                <NavTheme/>
                <NavLogout logout={logout} name={name}/>
            </nav>
        </>
    );
}

export default Navigation;