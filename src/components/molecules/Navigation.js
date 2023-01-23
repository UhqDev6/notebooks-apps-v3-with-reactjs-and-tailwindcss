import PropTypes from 'prop-types';
import Navadd from "../atoms/Navadd";
import Navarchive from "../atoms/Navarchive";
import Navhome from "../atoms/Navhome";
import Navlanguage from "../atoms/Navlanguage";
import NavLogout from "../atoms/NavLogout";
import NavTheme from "../atoms/NavTheme";

const Navigation = ({logout, name}) => {
    return(
        <div className='flex ml-6'>
            <nav className="flex mt-1 bg-purple-100 rounded-3xl sm:w-96 w-80 justify-center">
                <Navhome/>
                <Navadd/>
                <Navarchive/>
                <Navlanguage/>
                <NavTheme/>
                <NavLogout logout={logout} name={name}/>
            </nav>
        </div>
    );
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default Navigation;