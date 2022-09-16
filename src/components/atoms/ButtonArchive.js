import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonArchive = ({id,isArchive, children}) => {
    const navigate = useNavigate();
    return(
        <>
            <button
            onClick={() => 
                {
                    isArchive(id);
                    navigate('/');
                }
            }
                className="btn-archives"
            >
                {children}
            </button>
        </>
    );
}

ButtonArchive.propTypes = {
    id: PropTypes.string.isRequired,
    isArchive: PropTypes.func.isRequired,
}

export default ButtonArchive;