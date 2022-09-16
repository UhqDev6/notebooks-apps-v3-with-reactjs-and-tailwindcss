import PropTypes from 'prop-types';

const Search = ({search, searchChange}) => {
    return(
        <>
            <input
                type="text"
                value={search}
                className="bg-white appearance-none border-2 border-slate-100 rounded w-full py-2 px-40 h-12 pl-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={(event) => {
                    searchChange(event.target.value);
                }}
                placeholder="Search by title..."
            ></input>
        </>
    );
}

Search.propTypes = {
    search: PropTypes.string.isRequired,
    searchChange: PropTypes.func.isRequired,
}

export default Search;


