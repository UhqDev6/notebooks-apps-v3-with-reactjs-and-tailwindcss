import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ButtonArchive = ({id,isArchive, children}) => {
    const [, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    },[]);

    return (
        <>

            <button
            onClick={ () => 
                {
                    isArchive(id);
                }
            }
                className="btn-archives"
            >
                {children}
            </button>
        </>
    )
}

ButtonArchive.propTypes = {
    id: PropTypes.string.isRequired,
    isArchive: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}

export default ButtonArchive;