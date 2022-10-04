import FormLoginInput from "../components/molecules/FormLoginInput";
import { login } from "../utils/network-data";

const LoginPage = ({loginSuccess}) => {
    const onLogin = async ({email, password}) => {
        const {error, data} = await login({ email, password});

        if(!error) {
            loginSuccess(data);
        }
    }
    return(
        <>
            <section className="flex justify-center mt-10">
                <FormLoginInput login={onLogin}/>
            </section>
        </>
    );
}

export default LoginPage;