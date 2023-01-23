import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../../contexts/LocaleContext";
import useInput from "../../hooks/useInput";
import ButtonLogin from "../atoms/ButtonLogin";

const FormLoginInput = ({login}) => {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        login({ email, password});
    }


    return(
        <>
            <LocaleConsumer>
                {({locale}) => {
                    return(
                        <form className="sm:max-w-lg w-2/3 mt-12" onSubmit={onSubmitHandler}>
                            <div className="md:flex md:items-center mb-6 justify-center text-left ">
                                <h2 className="text-2xl font-bold w-full text-purple-400 -mt-16">{ locale === 'id' ? 'Halaman Masuk' : 'Login Page'}</h2>
                            </div>
                            <div className="md:flex md:items-center mb-6 mt-10">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 dark:text-slate-400 font-bold md:text-left mb-1 md:mb-0 pr-4">{locale === 'id' ? 'Surel' : 'Email'}</label>
                                </div>
            
                                <div className="w-full">
                                    <input
                                        className="bg-slate-50  appearance-none border-2 border-slate-100 dark:border-none dark:text-slate-400 dark:bg-slate-600 rounded w-full py-2 px-4 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        type="text"
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder={ locale === 'id' ? 'contoh@gmail.com' : 'example@gmail.com'}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6 mt-10">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 dark:text-slate-400  font-bold md:text-left mb-1 md:mb-0 pr-4">{ locale === 'id' ? 'Sandi' : 'Password' }</label>
                                </div>
            
                                <div className="w-full">
                                    <input
                                        className="bg-slate-50 appearance-none border-2 border-slate-100 dark:border-none dark:text-slate-400 dark:bg-slate-600 rounded w-full py-2 px-4 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder="**********"
                                        required
                                    ></input>
                                </div>
                            </div>

                            <div className="md:flex md:items-center mb-6 justify-center">
                                <ButtonLogin>
                                    { locale === 'id' ? 'Masuk' : 'Login'}
                                </ButtonLogin>
                            </div>
                            <div className="md:flex md:items-center mb-6 mt-10">
                                <div className="w-full">
                                    <label className="block text-gray-500 dark:text-slate-400  font-bold mb-1 md:mb-0 pr-4">
                                        {locale === 'id' ? 'Belum punya akun ?' : 'Dont have an account yet ? '}<Link to='/register' className="underline" >{locale === 'id' ? ' Daftar disini' : 'Sign up'}</Link>
                                    </label>
                                </div>
                            </div>
                    </form>
                    );
                }}
            </LocaleConsumer>
        </>
    );
}


FormLoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default FormLoginInput;