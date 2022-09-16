import  ListItem  from "./ListItem";
import PropTypes from "prop-types";
const List = ({notes, onDelete}) => {
    return(
        <>
            {
                notes.map((note) => (
                    <ListItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note}
                    />
                ))
            }
        </>
    );
}

List.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}


export default List;