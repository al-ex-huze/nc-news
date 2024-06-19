import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";

const ArticlesSidebarSort = ({
    sortByArr,
    setSortByArr,
    sortByIsDesc,
    setSortByIsDesc,
    setSortByQuery,
}) => {
    const handleSortToggle = () => {
        setSortByIsDesc((currentSort) => {
            return currentSort === true ? false : true;
        });
    };

    return (
        <div className="Sidebar__sort-by">
            <ul>
                {sortByArr.map((sortByEle) => {
                    return (
                        <li key={sortByEle}>
                            <button
                                className="Sidebar__query-button"
                                onClick={() => setSortByQuery(sortByEle)}
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
    );
};

export default ArticlesSidebarSort;
