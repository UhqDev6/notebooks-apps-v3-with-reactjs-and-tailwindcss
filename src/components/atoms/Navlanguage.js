import { useContext } from "react";
import {FaGlobe} from "react-icons/fa"
import LocaleContext from "../../contexts/LocaleContext";
const Navlanguage = () => {
    const {toggleLocale} = useContext(LocaleContext)
    return(
        <>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                <button onClick={toggleLocale}><FaGlobe/></button>
            </div>
        </>
    );
}

export default Navlanguage;