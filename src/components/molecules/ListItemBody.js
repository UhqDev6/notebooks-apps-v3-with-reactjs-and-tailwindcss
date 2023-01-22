import { Link } from "react-router-dom";
import ButtonDelete from "../atoms/ButtonDelete";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";

const ListItemBody = ({notes, onDelete}) => {

    return(
        <>
            <div className="flex mb-4 px-10 py-8 justify-items-center">
                <div className="w-1/1 bg-white dark:bg-slate-700  border-l-4 border-l-purple-300 px-4">
                    <h3 className="font-bold text-2xl mb-2 hover:text-purple-400 dark:text-slate-400 dark:hover:text-purple-400 underline hover:underline">
                        <Link to={`/detail/${notes.id}`}>
                            {notes.title}
                        </Link>
                    </h3>
                    <p className="text-gray-700 dark:text-slate-400 font-bold leading-8 tracking-wide italic text-sm">{showFormattedDate(notes.createdAt)}</p>
                    <p className="text-gray-700 dark:text-slate-400 text-base font-light leading-8 tracking-wide">{notes.body}</p>
                </div>
                <div>
                    <ButtonDelete id={notes.id} onDelete={onDelete}/>
                </div>

            </div>
        </>
    );
}

ListItemBody.propTypes = {
    notes: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ListItemBody;