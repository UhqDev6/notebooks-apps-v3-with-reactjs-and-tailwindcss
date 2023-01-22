import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const ButtonUnArchive = ({id,isUnArchive, children}) => {
    const [, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    },[]);

    return(
        <>
            <button
            onClick={ () => 
                { 

                    isUnArchive(id);
                }
            }
                className="btn-move"
            >
                {children}
            </button>
        </>
    );
}

ButtonUnArchive.propTypes = {
    id: PropTypes.string.isRequired,
    isUnArchive: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}

export default ButtonUnArchive;