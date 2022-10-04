const ButtonLogin = ({children}) => {
    return(
        <>
            <button className="btn-primary w-full mt-12">
                {children}
            </button>
        </>
    );
}

export default ButtonLogin;