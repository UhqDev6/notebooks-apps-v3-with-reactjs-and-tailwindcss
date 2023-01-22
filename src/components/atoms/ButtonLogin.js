import PropTypes from 'prop-types';
const ButtonLogin = ({children}) => {
    return(
        <>
            <button className="btn-primary w-full mt-12">
                {children}
            </button>
        </>
    );
}

ButtonLogin.propTypes = {
    children: PropTypes.string.isRequired,
}

export default ButtonLogin;