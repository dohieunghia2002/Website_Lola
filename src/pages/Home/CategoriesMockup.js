import Grid from '@mui/material/Grid2';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';

// import images from '../../assets/images';

const cx = classnames.bind(styles);

const CATEGORY_ITEMS = [
    { id: 1, img: 'images/category-mockup.jpg', heading: 'Giỏ hoa thương mại' },
    { id: 2, img: 'images/category-mockup.jpg', heading: 'Tráp mâm quả' },
    { id: 3, img: 'images/category-mockup.jpg', heading: 'Wedding & Event' },
    { id: 4, img: 'images/category-mockup.jpg', heading: 'Lễ viếng' },
]

function CategoriesMockup() {
    return (
        <Grid container spacing={2}>
            {CATEGORY_ITEMS.map((item) => (
                <Grid size={{ lg: 3 }} key={item.id}>
                    <div className={cx('category-item')}>
                        <div className={cx('category-img')}>
                            <img src={item.img} alt={item.heading} />
                        </div>
                        <div className={cx('category-overlay')}>
                            <h3 className={cx('category-heading')}>{item.heading}</h3>
                        </div>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}

export default CategoriesMockup;