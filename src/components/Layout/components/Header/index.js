import className from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';


const cx = className.bind(styles);

console.log(images);


function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('logo')}>
            <img src={images.logo} alt="logo" />
        </div>
    </header>;
}

export default Header;
