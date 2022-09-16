import React from "react";
import ButtonAdd from "../atoms/ButtonAdd";
import PropTypes from "prop-types";

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler = (event) => {
        this.setState(()=> {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler = (event) => {
        this.setState(()=> {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        this.props.addNote(this.state);
    }
    render() {
        return(
            <>
                <form className="w-full max-w-lg mt-12" onSubmit={this.onSubmitEventHandler}>
                    <div className="md:flex md:items-center mb-6 justify-center text-center ">
                        <h2 className="text-2xl font-bold w-full text-purple-400 -mt-16">Create Notes</h2>
                    </div>
                    <div className="md:flex md:items-center mb-6 mt-10">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Title</label>
                        </div>
    
                        <div className="w-full">
                            <input
                                className="bg-slate-50 appearance-none border-2 border-slate-100 rounded w-full py-2 px-4 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                                value={this.state.title}
                                onChange={this.onTitleChangeEventHandler}
                                placeholder="title"
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Note</label>
                        </div>
    
                        <div className="w-full">
                            <textarea
                                className="bg-slate-50 appearance-none border-2 border-slate-100 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                onChange={this.onBodyChangeEventHandler}
                                value={this.state.body}
                                rows="3"
                                type="text"
                                placeholder="Note"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6 justify-center">
                    <ButtonAdd>
                        Create
                    </ButtonAdd>
                    </div>
                </form>
            </>
        );
    }
}

Form.propTypes = {
    addNote: PropTypes.func.isRequired,
  }

export default Form;