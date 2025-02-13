import className from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import PhoneIcon from '@mui/icons-material/Phone';

import Button from '../../../Button';


const cx = className.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='logo' />
                </div>

                <ul className={cx('categories')}>
                    <li className={cx('caterory-item')}>
                        <Button to='/' text>
                            Trang chủ
                        </Button>
                    </li>
                    <li className={cx('caterory-item')}>
                        <Button to='/flower-basket' text>
                            Giỏ hoa
                        </Button>
                    </li>
                    <li className={cx('caterory-item')}>
                        <Button to='/betrothal-grift-tray' text>
                            Tráp mâm quả
                        </Button>
                    </li>
                    <li className={cx('caterory-item')}>
                        <Button to='/betrothal-grift-tray' text>
                            Wedding & Event
                        </Button>
                    </li>
                </ul>

                <div className={cx('hotline')}>
                    <Button leftIcon={<PhoneIcon />} className={cx('hotline-btn')}>
                        0382 318 009 (Mr. Giang) - 0909 777 762 (Ms.Trang)
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;
