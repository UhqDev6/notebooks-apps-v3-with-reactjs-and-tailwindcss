import React from "react";
import ButtonAdd from "../atoms/ButtonAdd";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { LocaleConsumer } from "../../contexts/LocaleContext";

const Form = ({addNote}) => {
    const [title, handleTitleChange] = useInput('');
    const [body, handleBodyChange] = useInput('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addNote({ title, body});
    }

    return(
        <LocaleConsumer>
            {({locale}) => {
                return(
                    <>
                        <form className="w-full max-w-lg mt-12" onSubmit={onSubmitHandler}>
                            <div className="md:flex md:items-center mb-6 justify-center text-left ">
                                <h2 className="text-2xl font-bold w-full text-purple-400 -mt-16">{locale === 'id' ? 'Tambahkan Catatan' : 'Create Notes' }</h2>
                            </div>
                            <div className="md:flex md:items-center mb-6 mt-10">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 dark:text-slate-400 font-bold md:text-left mb-1 md:mb-0 pr-4">{locale === 'id' ? 'Judul' : 'Title'}</label>
                                </div>
            
                                <div className="w-full">
                                    <input
                                        className="bg-slate-50 appearance-none border-2 border-slate-100 dark:border-none dark:text-slate-400 dark:bg-slate-600 rounded w-full py-2 px-4 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        type="text"
                                        value={title}
                                        onChange={handleTitleChange}
                                        placeholder={locale === 'id' ? 'Judul' : 'Title'}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 dark:text-slate-400 font-bold md:text-left mb-1 md:mb-0 pr-4">{locale === 'id' ? 'Catatan' : 'Note'}</label>
                                </div>
            
                                <div className="w-full">
                                    <textarea
                                        className="bg-slate-50 appearance-none border-2 border-slate-100 dark:border-none dark:text-slate-400 dark:bg-slate-600 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        onChange={handleBodyChange}
                                        value={body}
                                        rows="3"
                                        type="text"
                                        placeholder={locale === 'id' ? 'Catatan' : 'Note'}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6 justify-center">
                            <ButtonAdd>
                                {locale === 'id' ? 'Buat' : 'Create'}
                            </ButtonAdd>
                            </div>
                        </form>
                    </>
                );
            }}
        </LocaleConsumer>
    );
}

Form.propTypes = {
    addNote: PropTypes.func.isRequired,
  }

export default Form;