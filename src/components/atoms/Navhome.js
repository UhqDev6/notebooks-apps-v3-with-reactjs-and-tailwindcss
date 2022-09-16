import { Link } from "react-router-dom";
import {FcHome} from 'react-icons/fc';

const Navhome = () => {
    return(
        <>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                <Link to="/"><FcHome/></Link>
            </div>
        </>
    );
}

export default Navhome;