import React from "react";
import {useParams } from "react-router-dom";
import Title from "../components/atoms/Title";
import DetailItem from "../components/molecules/DetailItem";
import Navigation from "../components/molecules/Navigation";
import {archiveNote, getNote, unarchiveNote } from "../utils/local-data";

const DetailPageWrapper = () => {
    const {id} = useParams();

    const onArchiveHandler = (id) => {
        archiveNote(id);
    }

    const onUnArchiveHandler = (id) => {
        unarchiveNote(id);
    }

    return <DetailPage id={(id)} isArchive={onArchiveHandler} isUnArchive={onUnArchiveHandler}/>

}

class DetailPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            note : getNote(props.id),
        }
    }

    render() {
        if(typeof this.state.note === 'undefined'){
            return(
                <>
                    <h3>Note is not found !</h3>
                </>
            );
        }
        return(
            <>
                <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-md">
                    <div>
                        <Title/>
                    </div>
                    <div>
                        <Navigation/>
                    </div>
                </div>
                <div className="flex justify-left">
                <h1 className="mt-10 text-2xl font-bold text-purple-400 ml-14">Detail Page</h1>
                </div>
                <article className="flex justify-center">
                    <DetailItem {...this.state.note} isArchive={archiveNote} isUnArchive={unarchiveNote}/>
                
                </article>
            </>
        );
    }
}

export default DetailPageWrapper;