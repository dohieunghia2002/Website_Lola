import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';

import Filter from "./Filter";
import FilterItem from "./Filter/FilterItem";

const cx = classNames.bind(styles);

function Sidebar({ filterItems }) {
    return <aside className={cx('wrapper')}>
        <Filter>
            {filterItems.map((item, index) => (
                <FilterItem key={index} {...item} />
            ))}
        </Filter>
    </aside>;
}

Sidebar.propTypes = {
    filterItems: PropTypes.arrayOf(
        PropTypes.shape({
            checkboxType: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            contentList: PropTypes.array.isRequired
        })
    )
};

export default Sidebar;

