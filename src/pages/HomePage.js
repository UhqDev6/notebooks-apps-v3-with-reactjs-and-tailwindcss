import React, {useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteEmpty from "../components/atoms/NoteEmpty";
import Search from "../components/atoms/Search";
import List from "../components/molecules/List";
import {deleteNote, getActiveNotes}  from "../utils/network-data";
import { LocaleConsumer } from "../contexts/LocaleContext";
import Loading from "../components/atoms/Loading";


const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notebooks, setNotebooks] = useState([]);
    const [search, setSearch] = useState(() => {
        return searchParams.get('search') || '' ;
    });
    const [isLoading, setIsLoading] = useState(true);
    

    const getNotebooks = async () => {
        const  {data}  = await getActiveNotes();
        setNotebooks(data);
        setIsLoading(false);
    };

    const onSearchChangeHandler = (search) => {
        setSearch(search);
        setSearchParams({search});
    }

    const onDeleteHandler = async (id) => {
        await deleteNote(id);
        getNotebooks();
    }

    const filteredNotebooks = notebooks.filter((notebook) => {
            return notebook.title.toLowerCase().includes(search.toLowerCase());
        }
    );  

    useEffect(() => {
        getNotebooks();
    },[]);

    console.log(notebooks);

    return(
        <>
        <LocaleConsumer>
            {({locale}) => {
                return (
                    
                    <>
                    <header className="mt-6 sm:mt-10 flex justify-center space-x-6 text-md">
                        <div>
                            <Search locale={locale} search={search} searchChange={onSearchChangeHandler}/>
                        </div>
                    </header>
                        <div className="flex justify-left">
                        <h1 className="mt-10 text-2xl font-bold text-purple-400 ml-14">{locale === 'id' ? 'Halaman Beranda' : 'Home Page' }</h1>
                        </div>
                        <main>
                            <article className="justify-center mt-10">
                            { isLoading ? (
                                <Loading/>
                            ) : notebooks.length > 0 ? 
                            
                                <List notes={filteredNotebooks} onDelete={onDeleteHandler}/> 
                                
                                :

                                <NoteEmpty/>
                            
                            } 
                    
                            </article>
                        </main>
                    </>
                );
            }}
        </LocaleConsumer>
        </>
    );
}

export default HomePage;