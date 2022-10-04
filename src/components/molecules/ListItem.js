import  ListItemBody  from "./ListItemBody";
import PropTypes from "prop-types";

const ListItem = ({notes, onDelete}) => {
    return(
        <>
            <div>
                <ListItemBody notes={notes} onDelete={onDelete} />
            </div>
        </>
    );
}
ListItem.propTypes = {
    notes: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ListItem;