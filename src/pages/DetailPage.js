import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Loading from "../components/atoms/Loading";
import DetailItem from "../components/molecules/DetailItem";
import { LocaleConsumer } from "../contexts/LocaleContext";
import {archiveNote, getNote, unarchiveNote } from "../utils/network-data";

const DetailPage = () => {
    const[note, setNoteDetail] = useState('');
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const onArchiveHandler = (id) => {
        archiveNote(id);
    }

    const onUnArchiveHandler = (id) => {
        unarchiveNote(id);
    }

    useEffect(() => {
        const getNoteDetail = async () => {
        const {data} = await getNote(id);
        setNoteDetail(data);
        setIsLoading(false);
        }
        getNoteDetail();
    },[id]);

    if(note === null){
        navigate('/404');
    }
    return (
        <LocaleConsumer>
            {({locale}) => {
                return isLoading  ? (
                    <div className="mt-24">
                        <Loading/>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-left">
                        <h1 className="mt-10 text-2xl font-bold text-purple-400 ml-14">{locale === 'id' ? 'Halaman Detail' :'Detail Page' }</h1>
                        </div>
                        <article className="flex justify-center">
                            <DetailItem note={note} isArchive={onArchiveHandler} isUnArchive={onUnArchiveHandler}/>
                        </article>
                    </>
                );
            }}
        </LocaleConsumer>

    );
}

export default DetailPage;