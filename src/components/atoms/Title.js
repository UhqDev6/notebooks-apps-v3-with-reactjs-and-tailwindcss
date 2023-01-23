import { Link } from "react-router-dom";
import { LocaleConsumer } from "../../contexts/LocaleContext";

const Title = () => {
    return(
        <>
        <LocaleConsumer>
            {({locale}) => {
                return(
                    <div>
                    <span className="bg-purple-100 text-purple-400 font-semibold h-12 px-6 sm:rounded-lg w-full flex items-center justify-center sm:w-auto uppercase text-xl">
                        <Link to="/">{ locale === 'id' ? 'Aplikasi Catatan' : 'Notebook Apps'}</Link>
                    </span>
                </div>
                );
            }}
        </LocaleConsumer>
        </>
    );
}

export default Title; 