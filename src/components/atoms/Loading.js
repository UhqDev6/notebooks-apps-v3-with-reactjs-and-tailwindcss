import { LocaleConsumer } from "../../contexts/LocaleContext";

const Loading = () => {
    return(
        <LocaleConsumer>
            {({locale}) => {
                return(
                    <>
                        <div className="text-center">
                            <p className="text-2xl dark:text-slate-400 -mt-4">{locale === 'id' ? 'Memuat...' : 'Loading...'}</p>
                        </div>
                    </>
                );
            }}
        </LocaleConsumer>
    );
}


export default Loading;