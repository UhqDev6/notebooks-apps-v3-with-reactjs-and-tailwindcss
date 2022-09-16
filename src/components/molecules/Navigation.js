import Navadd from "../atoms/Navadd";
import Navarchive from "../atoms/Navarchive";
import Navhome from "../atoms/Navhome";

const Navigation = () => {
    return(
        <>
            <nav className="flex mt-1 bg-purple-100 rounded-3xl w-48 justify-center">
                <Navhome/>
                <Navadd/>
                <Navarchive/>
            </nav>
        </>
    );
}

export default Navigation;