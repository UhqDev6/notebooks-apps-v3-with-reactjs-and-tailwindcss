import { useNavigate } from "react-router-dom";
import FormRegisterInput from "../components/molecules/FormRegisterInput";
import { register } from "../utils/network-data";


const RegisterPage = () => {
    const navigate = useNavigate();

    const onRegisterHandler = async (user) => {
        const {error} = await register(user);
        if(!error) {
            navigate('/');
        }
    }
    return(
        <>
            <section className="flex justify-center mt-10">
                <FormRegisterInput register={onRegisterHandler}/>
            </section>
        </>
    );
}

export default RegisterPage;