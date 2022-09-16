import { Link } from "react-router-dom";
import ButtonDelete from "../atoms/ButtonDelete";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";

const ListItemBody = ({id, title, body, createdAt, onDelete}) => {
    return(
        <>
            <div className="flex mb-4 px-10 py-8 justify-items-center">
                <div className="w-1/1 bg-white border-l-4 border-l-purple-100 px-4">
                    <h3 className="font-bold text-2xl mb-2 hover:text-purple-400 underline hover:underline">
                        <Link to={`/detail/${id}`}>
                            {title}
                        </Link>
                    </h3>
                    <p className="text-gray-700 font-bold leading-8 tracking-wide italic text-sm">{showFormattedDate(createdAt)}</p>
                    <p className="text-gray-700 text-base font-light leading-8 tracking-wide">{body}</p>
                </div>
                <div>
                    <ButtonDelete id={id} onDelete={onDelete}/>
                </div>

            </div>
        </>
    );
}

ListItemBody.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ListItemBody;