
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';
import ButtonArchive from "../atoms/ButtonArchive";
import ButtonUnArchive from "../atoms/ButtonUnArchive";


const DetailItem = ({id, title, body, createdAt, isArchive, isUnArchive, archived }) => {

    return(
        <>
            <div className="flex mb-4 mt-10 px-10 py-8 justify-items-center">
            <div className="w-1/1 bg-white border-l-4 border-l-purple-100 px-4">
                <h3 className="font-bold text-2xl mb-2">
                    {title}
                </h3>
                <p className="text-gray-700 font-bold leading-8 tracking-wide italic text-sm">{showFormattedDate(createdAt)}</p>
                <p className="text-gray-700 text-base font-light leading-8 tracking-wide">{body}</p>
            </div>
            {archived === false ?
                <div>
                    <ButtonArchive id={id} archived={archived} isArchive={isArchive}>
                        Archived
                    </ButtonArchive>
                </div>

                :

                <div>
                <ButtonUnArchive id={id} archived={archived} isUnArchive={isUnArchive}>
                    Move
                </ButtonUnArchive>
                </div>
            }

            </div>
        </>
    );
}


DetailItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    isArchive: PropTypes.func.isRequired,
    isUnArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
}

export default DetailItem;