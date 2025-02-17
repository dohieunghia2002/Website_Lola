import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Filter.module.scss';

import TuneIcon from '@mui/icons-material/Tune';

const cx = classNames.bind(styles);

function Filter({ children }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('filter-header')}><TuneIcon sx={{ fontSize: 20, marginRight: '4px' }} /> Bộ lọc</h3>
            {children}
        </div>
    );
}

Filter.propTypes = {
    children: PropTypes.node.isRequired
}

export default Filter;
