import React, {useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteEmpty from "../components/atoms/NoteEmpty";
import Search from "../components/atoms/Search";
import List from "../components/molecules/List";
import {deleteNote, getActiveNotes}  from "../utils/network-data";
import { LocaleConsumer } from "../contexts/LocaleContext";
import Loading from "../components/atoms/Loading";
// import { getActiveNotes } from "../utils/network-data";

// const HomePageWrapper = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const search = searchParams.get('search');
//     const changeSearchParams = search => {
//         setSearchParams({search})
//     }
//     return <HomePage defaultSearch={search} searchChange={changeSearchParams}/>
// }


// class HomePage extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             activeNotes : getActiveNotes(),
//             archive : archiveNote(props.id),
//             search: props.defaultSearch || '',
//         }

//         this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
//         this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     }

//     onSearchEventHandler = (search) => {
//         this.setState(()=> {
//             return {
//                 search,
//             }
//         });
//         this.props.searchChange(search);
//     }

//     onDeleteHandler = (id) => {
//         deleteNote(id);
//         this.setState(()=> {
//             return {
//                 activeNotes : getActiveNotes(),
//             }
//         });
//     }

//     render() {
//         const notes = this.state.activeNotes.filter(note => {
//             return note.title.toLowerCase().includes(
//                 this.state.search.toLowerCase()
//             );
//         });

//         return(
//             <>
//                 <header className="mt-6 sm:mt-10 flex justify-center space-x-6 text-md">
//                 <div>
//                     <Title/>
//                 </div>
//                 <div>
//                     <Search search={this.state.search} searchChange={this.onSearchEventHandler}/>
//                 </div>
//                 <div>
//                     <Navigation/>
//                 </div>
//                 </header>
//                 <div className="flex justify-left">
//                 <h1 className="mt-10 text-2xl font-bold text-purple-400 ml-14">Home Page</h1>
//                 </div>
//                 <main>
//                     <article className="justify-center mt-10">
//                     {this.state.activeNotes.length > 0 ? 
                    
//                         <List notes={notes} onDelete={this.onDeleteHandler}/> 
                        
//                         :

//                         <NoteEmpty/>
                    
//                     } 
            
//                     </article>
//                 </main>
//             </>
//         );
//     }

// }

// export default HomePageWrapper;

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notebooks, setNotebooks] = useState([]);
    const [search, setSearch] = useState(() => {
        return searchParams.get('search') || '' ;
    });
    const [isLoading, setIsLoading] = useState(true);

    const getNotebooks =  async () => {
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