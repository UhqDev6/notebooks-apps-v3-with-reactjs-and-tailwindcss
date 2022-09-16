const ButtonAdd = ({children}) => {
    return(
        <>
            <button
                type="submit"
                className="btn-primary w-48 mt-12" 
            >
                {children}
            </button>
        </>
    );
}

export default ButtonAdd;