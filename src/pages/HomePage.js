import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteEmpty from "../components/atoms/NoteEmpty";
import Search from "../components/atoms/Search";
import List from "../components/molecules/List";
import {archiveNote, deleteNote, getActiveNotes}  from "../utils/local-data";
import Title from "../components/atoms/Title";
import Navigation from "../components/molecules/Navigation";

const HomePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');
    const changeSearchParams = search => {
        setSearchParams({search})
    }
    return <HomePage defaultSearch={search} searchChange={changeSearchParams}/>
}


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeNotes : getActiveNotes(),
            archive : archiveNote(props.id),
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
                activeNotes : getActiveNotes(),
            }
        });
    }

    render() {
        const notes = this.state.activeNotes.filter(note => {
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
                <h1 className="mt-10 text-2xl font-bold text-purple-400 ml-14">Home Page</h1>
                </div>
                <main>
                    <article className="justify-center mt-10">
                    {this.state.activeNotes.length > 0 ? 
                    
                        <List notes={notes} onDelete={this.onDeleteHandler}/> 
                        
                        :

                        <NoteEmpty/>
                    
                    } 
            
                    </article>
                </main>
            </>
        );
    }

}

export default HomePageWrapper;