import { Link } from "react-router-dom";

const Title = () => {
    return(
        <>
            <div>
                <span className="bg-purple-100 text-purple-400 font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto uppercase text-xl">
                    <Link to="/">Notebook Apps</Link>
                </span>
            </div>
        </>
    );
}

export default Title; 