import { FiDelete } from "react-icons/fi";
import PropTypes from "prop-types";
const ButtonDelete = ({id, onDelete}) => {
    return(
        <>
            <button
            onClick={() => {
                onDelete(id);
            }}
                className="btn-delete" 
            >
                <FiDelete/>
            </button>
        </>
    );
}

ButtonDelete.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ButtonDelete;