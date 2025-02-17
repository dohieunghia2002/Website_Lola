import Grid from "@mui/material/Grid2";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
// import images from '../../assets/images';

const cx = classNames.bind(styles);

// Danh sách ảnh doanh nghiệp
// const BUSINESS_IMAGES = [
//     { id: 1, src: images.gallery[0] },
//     { id: 2, src: images.gallery[1] },
//     { id: 3, src: images.gallery[2] },
//     { id: 4, src: images.gallery[3] },
//     { id: 5, src: images.gallery[4] },
//     { id: 6, src: images.gallery[5] },
// ];
const BUSINESS_IMAGES = [
    { id: 1, src: 'images/gallery_1.jpg' },
    { id: 2, src: 'images/gallery_2.jpg' },
    { id: 3, src: 'images/gallery_3.jpg' },
    { id: 4, src: 'images/gallery_4.jpg' },
    { id: 5, src: 'images/gallery_5.jpg' },
    { id: 6, src: 'images/gallery_6.jpg' },
];

function BusinessGallery() {
    return (
        <Grid container spacing={1} className={cx('gallery-wrapper')}>
            <Grid size={{ lg: 7 }}>
                <div className={cx('gallery-item')}>
                    <div className={cx('gallery-img')}>
                        <img src={BUSINESS_IMAGES[0].src} alt="ảnh sưu tập" />
                    </div>
                </div>
            </Grid>
            <Grid size={{ lg: 5 }}>
                <div className={cx('gallery-item')}>
                    <div className={cx('gallery-img')}>
                        <img src={BUSINESS_IMAGES[1].src} alt="ảnh sưu tập" />
                    </div>
                </div>
            </Grid>

            {BUSINESS_IMAGES.slice(2).map((item) => (
                <Grid size={{ lg: 3 }} key={item.id}>
                    <div className={cx('gallery-item', 'shorter')}>
                        <div className={cx('gallery-img')}>
                            <img src={item.src} alt="ảnh sưu tập" />
                        </div>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}

export default BusinessGallery;