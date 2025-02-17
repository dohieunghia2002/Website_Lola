import Grid from '@mui/material/Grid2';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';

// import images from '../../assets/images';

const cx = classnames.bind(styles);

function Banner() {
    return (
        <Grid container>
            <Grid size={3}>
                <div className={cx('logo')}>
                    {/* <img src={images.logoWithHeading} alt='logo' /> */}
                    <img src='images/lolashop.png' alt='logo' />
                </div>
            </Grid>
            <Grid size={9}>
                <div className={cx('content')}>
                    <h2>Tiệm hoa Lola</h2>
                    <h3>Cung cấp hoa tươi và các sản phẩm từ hoa tươi</h3>
                    <p>Phục vụ cho các sự kiện</p>
                    <p>Sinh nhật - cưới - khai trương - tốt nghiệp - viếng</p>
                    <h3>HOTLINE: 0382 318 009 (Mr. Giang) - 0909 777 762 (Ms.Trang)</h3>
                    <h3>ĐỊA CHỈ: 182/4 Trần Hưng Đạo, An Phú, Ninh Kiều, Cần Thơ</h3>
                </div>
            </Grid>
        </Grid>
    );
}

export default Banner;
