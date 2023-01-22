import PropTypes from 'prop-types';
import { FaSignOutAlt } from "react-icons/fa";
const NavLogout = ({logout, name}) => {
    return(
        <>
            <span className="pt-1.5 pl-1">{name}</span>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                <button onClick={logout}><FaSignOutAlt/></button>
            </div>
        </>
    );
}

NavLogout.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default NavLogout;