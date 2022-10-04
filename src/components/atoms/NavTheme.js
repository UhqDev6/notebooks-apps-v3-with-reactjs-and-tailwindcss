import { useContext } from "react";
import {FaMoon, FaSun} from "react-icons/fa"
import ThemeContext from "../../contexts/ThemeContext";
const NavTheme = () => {
    const {theme,toggleTheme} =  useContext(ThemeContext);
    return(
        <>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                <button onClick={toggleTheme}>{ theme === 'light' ? <FaMoon/> : <FaSun/> }</button>
            </div>
        </>
    );
}

export default NavTheme;