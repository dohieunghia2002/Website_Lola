import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

const colorMap = {
    "đỏ": "red",
    "trắng": "white",
    "xanh dương": "blue",
    "vàng": "yellow",
    "hồng": "pink",
    "cam": "orange",
    "đen": "black",
    "nâu": "brown",
    "xám": "gray",
    "xanh lá": "green"
};

function convertToSlug(str) {
    return str.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-');
}

function FilterItem({ checkboxType, title, contentList }) {
    return (
        <div className={cx('wrapper-item')}>
            <h4 className={cx('heading')}>{title}</h4>
            <ul className={cx(checkboxType === "color" ? 'filter-select-color' : '')}>
                {contentList.map((item, index) => {
                    const inputId = `${checkboxType}-${convertToSlug(String(item))}`;
                    const translatedColor = colorMap[item.toLowerCase()] || convertToSlug(item);
                    const itemClass = checkboxType === "color" ? translatedColor : '';

                    return (
                        <li key={index} className={cx(checkboxType === "color" ? 'filter-select-color-item' : 'filter-checkbox-item')}>
                            <input
                                type="checkbox"
                                id={inputId}
                                className={cx('checkbox-item-input', itemClass)}
                                value={item}
                                hidden
                            />
                            <label htmlFor={inputId} className={cx(checkboxType === "color" ? 'select-color-label' : 'checkbox-item-label', itemClass)}>
                                {checkboxType === "color" ? (
                                    <div className={cx('select-color-btn')} style={{ backgroundColor: translatedColor }}></div>
                                ) : null}
                                <span>{item}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FilterItem;
