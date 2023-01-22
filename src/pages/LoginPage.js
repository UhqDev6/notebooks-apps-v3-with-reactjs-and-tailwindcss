import PropTypes from 'prop-types';
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
            <section className="flex justify-center mx-auto mt-10">
                <FormLoginInput login={onLogin}/>
            </section>
        </>
    );
}


LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}


export default LoginPage;