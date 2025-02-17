import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

function convertToSlug(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
}

function FilterItem({ checkboxType, title, contentList }) {
    return (
        <div className={cx('wrapper-item')}>
            <h4 className={cx('heading')}>{title}</h4>
            <ul>
                {contentList.map((item, index) => {
                    const inputId = `${checkboxType}-${convertToSlug(String(item))}`;
                    return (
                        <li key={index} className={cx('filter-checkbox-item')}>
                            <input type="checkbox" id={inputId} className={cx('checkbox-item-input')} value={item} hidden />
                            <label htmlFor={inputId} className={cx('checkbox-item-label')}>
                                <span>{item}</span>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default FilterItem;
