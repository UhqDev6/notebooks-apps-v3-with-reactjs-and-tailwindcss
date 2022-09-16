import { FcBookmark } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navarchive = () => {
    return(
        <>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                <Link to="/archive"><FcBookmark/></Link>
            </div>
        </>
    );
}


export default Navarchive;