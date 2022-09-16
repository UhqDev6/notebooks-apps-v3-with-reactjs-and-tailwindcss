import  ListItemBody  from "./ListItemBody";
import PropTypes from "prop-types";

const ListItem = ({id , title, body, createdAt, onDelete, archived}) => {
    return(
        <>
            <div>
                <ListItemBody id={id} title={title} createdAt={createdAt} body={body} onDelete={onDelete} archived={archived}/>
            </div>
        </>
    );
}
ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
}

export default ListItem;