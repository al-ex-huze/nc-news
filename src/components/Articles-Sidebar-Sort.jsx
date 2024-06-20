import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";

const ArticlesSidebarSort = ({
    sortByArr,
    setSortByArr,
    sortByIsDesc,
    setSortByIsDesc,
    sortByQuery,
    setSortByQuery,
}) => {
    
    const handleSortToggle = () => {
        setSortByIsDesc((currentSort) => {
            return currentSort === true ? false : true;
        });
    };

    const handleQueryClick = (sortByEle) => {
        setSortByQuery(sortByEle);
    };

    return (
        <>
            <div className="Sidebar__sort-by">
                <ul>
                    {sortByArr.map((sortByEle) => {
                        return (
                            <li key={sortByEle}>
                                <button
                                    className="Sidebar__query-button"
                                    onClick={() => handleQueryClick(sortByEle)}
                                >
                                    {sortByEle}
                                </button>
                            </li>
                        );
                    })}
                    <li>
                        <button
                            className="Sidebar__query-button"
                            onClick={handleSortToggle}
                        >
                            {sortByIsDesc ? (
                                <TiArrowDownOutline />
                            ) : (
                                <TiArrowUpOutline />
                            )}
                        </button>
                    </li>
                </ul>
            </div>
            <div className="Sidebar__query-current"></div>
        </>
    );
};

export default ArticlesSidebarSort;
