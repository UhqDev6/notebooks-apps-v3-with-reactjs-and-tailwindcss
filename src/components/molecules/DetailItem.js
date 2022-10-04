
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { LocaleConsumer } from '../../contexts/LocaleContext';
import { showFormattedDate } from '../../utils';
import ButtonArchive from "../atoms/ButtonArchive";
import ButtonUnArchive from "../atoms/ButtonUnArchive";
import Loading from '../atoms/Loading';


const DetailItem = ({note, isArchive, isUnArchive }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    },[]);

    return(
        <LocaleConsumer>
            {({locale}) => {
                return(
                    <>
                        <div className="flex mb-4 mt-10 px-10 py-8 justify-items-center">
                        <div className="w-1/1 bg-white dark:bg-slate-700  border-l-4 border-l-purple-100 px-4">
                            <h3 className="font-bold text-2xl mb-2 dark:text-slate-400">
                                {note.title}
                            </h3>
                            <p className="text-gray-700 dark:text-slate-400 font-bold leading-8 tracking-wide italic text-sm">{showFormattedDate(note.createdAt)}</p>
                            <p className="text-gray-700 dark:text-slate-400 text-base font-light leading-8 tracking-wide">{note.body}</p>
                        </div>
                        {
                            note.archived === false ?

                            isLoading ? (
                                <Loading/>
                            ) : (
                                <div>
                                <ButtonArchive id={note.id} isArchive={isArchive}>
                                    {locale === 'id' ? 'Arsipkan' : 'Archived'}
                                </ButtonArchive>
                                </div>
                            )

                            :
                            isLoading ? (
                                <Loading/>
                            ) : (
                                <div>
                                    <ButtonUnArchive id={note.id} isUnArchive={isUnArchive}>
                                        {locale === 'id' ? 'Pindahkan' : 'Moved'}
                                    </ButtonUnArchive>
                                </div>
                            )
                        }

                        </div>
                    </>
                );
            }}
        </LocaleConsumer>
    );
}


DetailItem.propTypes = {
    note: PropTypes.object.isRequired,
    isArchive: PropTypes.func.isRequired,
    isUnArchive: PropTypes.func.isRequired,
}

export default DetailItem;