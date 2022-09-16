import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteEmpty from "../components/atoms/NoteEmpty";
import List from "../components/molecules/List";
import {deleteNote, getArchivedNotes } from "../utils/local-data";
import Search from "../components/atoms/Search";
import Title from "../components/atoms/Title";
import Navigation from "../components/molecules/Navigation";

const ArchiveWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');
    const changeSearchParams = search => {
        setSearchParams({search})
    }
    return <Archive defaultSearch={search} searchChange={changeSearchParams}/>
}

class Archive extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            archivedNotes : getArchivedNotes(),
            search: props.defaultSearch || '',
        }

        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onSearchEventHandler = (search) => {
        this.setState(()=> {
            return {
                search,
            }
        });
        this.props.searchChange(search);
    }

    onDeleteHandler = (id) => {
        deleteNote(id);
        this.setState(()=> {
            return {
                archivedNotes : getArchivedNotes(),
            }
        });
    }
    render(){
        const notes = this.state.archivedNotes.filter(note => {
            return note.title.toLowerCase().includes(
                this.state.search.toLowerCase()
            );
        });
        return(
            <>
                <header className="mt-6 sm:mt-10 flex justify-center space-x-6 text-md">
                <div>
                    <Title/>
                </div>
                <div>
                    <Search search={this.state.search} searchChange={this.onSearchEventHandler}/>
                </div>
                <div>
                    <Navigation/>
                </div>
                </header>
                <div className="flex justify-left">
                    <h1 className="mt-10 text-2xl font-bold text-purple-400 ml-14">Archive Page</h1>
                </div>
                <div className="mt-10">
                {this.state.archivedNotes.length > 0 ? 
                    
                    <List notes={notes}  onDelete={this.onDeleteHandler}/>
                    
                    :

                    <NoteEmpty/>
                
                } 
                </div>
            </>
        );
    }
}

export default ArchiveWrapper;