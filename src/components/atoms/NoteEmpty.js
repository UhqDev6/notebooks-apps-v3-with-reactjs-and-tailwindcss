import { LocaleConsumer } from "../../contexts/LocaleContext";

const NoteEmpty = () => {
    return(
        <LocaleConsumer>
            {({locale}) => {
                return(
                    <>
                        <div className="flex justify-center">
                            <p className="text-center text-md text-slate-500">{locale === 'id' ? 'Tida ada catatan...' : 'No records ...'}</p>
                        </div>
                    </>
                );
            }}
        </LocaleConsumer>
    );
}

export default NoteEmpty;