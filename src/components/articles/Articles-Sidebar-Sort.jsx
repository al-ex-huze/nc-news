import { useState } from "react";

import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";

const ArticlesSidebarSort = ({
    sortByArr,
    sortByIsDesc,
    setSortByIsDesc,
    setSortByQuery,
}) => {
    const [sortQueryDisplay, setSortQueryDisplay] = useState({
        created_at: "Date",
        comment_count: "Comments",
        votes: "Votes",
    });

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

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
                <div className="Sidebar__dropdown">
                    <button
                        className="Sidebar__dropdown-toggle"
                        onClick={toggleDropdown}
                    >
                        Sort By
                    </button>
                    {showDropdown && (
                        <ul>
                            {sortByArr.map((sortByEle) => {
                                return (
                                    <li key={sortByEle}>
                                        <button
                                            className="Sidebar__query-button"
                                            onClick={() =>
                                                handleQueryClick(sortByEle)
                                            }
                                        >
                                            {sortQueryDisplay[sortByEle]}
                                        </button>
                                    </li>
                                );
                            })}
                            <li>
                                <button
                                    aria-label="Ascending/Descending"
                                    className="Sidebar__query-button"
                                    onClick={handleSortToggle}
                                >
                                    {sortByIsDesc ? (
                                        <TiArrowUpOutline />
                                    ) : (
                                        <TiArrowDownOutline />
                                    )}
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="Sidebar__query-current"></div>
        </>
    );
};

export default ArticlesSidebarSort;
