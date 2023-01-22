import PropTypes from 'prop-types';

const Search = ({locale, search, searchChange}) => {
    return(
        <>
            <input
                type="text"
                value={search}
                className="bg-white appearance-none border-2 border-slate-100 dark:border-none dark:text-slate-400 dark:bg-slate-600 rounded-lg w-full py-2 px-40 h-12 pl-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={(event) => {
                    searchChange(event.target.value);
                }}
                placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Search by title ...'}
            ></input>
            
        
        </>
    );
}

Search.propTypes = {
    search: PropTypes.string.isRequired,
    searchChange: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
}

export default Search;


