import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const ButtonUnArchive = ({id,isUnArchive, children}) => {
    const navigate = useNavigate();
    return(
        <>
            <button
            onClick={() => 
                {
                    isUnArchive(id);
                    navigate('/');
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
}

export default ButtonUnArchive;