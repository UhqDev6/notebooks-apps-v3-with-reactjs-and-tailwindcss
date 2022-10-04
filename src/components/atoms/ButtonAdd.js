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

export default ButtonAdd;