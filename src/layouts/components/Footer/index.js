import className from 'classnames/bind';
import styles from './Footer.module.scss';


const cx = className.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <p className={cx('content')}>Copyright 2025 © Design Light Chaser DEV</p>
            </div>
        </footer>
    )
}

export default Footer;
