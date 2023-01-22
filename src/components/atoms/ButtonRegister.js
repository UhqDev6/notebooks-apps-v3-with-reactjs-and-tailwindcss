import PropTypes from 'prop-types';
const ButtonRegister = ({children}) => {
    return(
        <>
            <button className="btn-primary w-full mt-12">
                {children}
            </button>
        </>
    );
}

ButtonRegister.propTypes = {
    children: PropTypes.string.isRequired,
}


export default ButtonRegister;