import PropTypes from 'prop-types';
const ButtonAdd = ({children}) => {
    return(
        <>
            <button
                type="submit"
                className="btn-primary w-full mt-12" 
            >
                {children}
            </button>
        </>
    );
}

ButtonAdd.propTypes = {
    children: PropTypes.string.isRequired,
}

export default ButtonAdd;