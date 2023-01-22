import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteEmpty from "../components/atoms/NoteEmpty";
import List from "../components/molecules/List";
import {deleteNote, getArchivedNotes } from "../utils/network-data";
import Search from "../components/atoms/Search";
import { LocaleConsumer } from "../contexts/LocaleContext";
import Loading from "../components/atoms/Loading";


const Archive = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [archivedNotes, setArchivedNotes] = useState([]);
    const [search, setSearch] = useState(() => {
        return searchParams.get('search') || '';
    });
    const [isLoading, setIsLoading] = useState(true);

    const getArchivedNotebooks = async () => {
        const { data } = await getArchivedNotes();
        setArchivedNotes(data);
        setIsLoading(false);
    };

    const onSearchChangeHandler = (search) => {
        setSearch(search);
        setSearchParams({search});
    }

    const onDeleteHandler = async (id) => {
        await deleteNote(id);
        getArchivedNotebooks();
    }

    const filteredNotebooks = archivedNotes.filter((archivedNote) => {
            return archivedNote.title.toLowerCase().includes(search.toLowerCase());
        }
    );  

    useEffect(() => {
        getArchivedNotebooks();
    },[]);

 

    return(
        <LocaleConsumer>
            {({locale}) => {
                return(
                    <>
                        <header className="mt-6 sm:mt-10 flex justify-center space-x-6 text-md">
                        <div>
                            <Search locale={locale} search={search} searchChange={onSearchChangeHandler}/>
                        </div>
                        </header>
                        <div className="flex justify-left">
                            <h1 className="mt-10 text-2xl font-bold text-purple-400 ml-14">{locale === 'id' ? 'Halaman Arsip' : 'Archive Page' }</h1>
                        </div>
                        <div className="mt-10">
                        { isLoading ? (
                            <Loading/>
                        ) : archivedNotes?.length > 0 ? 
                            
                            
                            <List notes={filteredNotebooks}  onDelete={onDeleteHandler}/>
                            
                            :

                            <NoteEmpty/>
                        
                        } 
                        </div>
                    </>
                );
            }}
        </LocaleConsumer>

    );
}

export default Archive;