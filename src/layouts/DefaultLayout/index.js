import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Container from '@mui/material/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

const FILTER_FLOWER_BASKET_PAGE = [
    { checkboxType: "style", title: "Kiểu dáng", contentList: ["Giỏ hoa", "Vali hoa", "Kệ hoa", "Bó hoa"] },
    { checkboxType: "color", title: "Màu sắc", contentList: ["Đỏ", "Trắng", "Xanh dương", "Vàng", "Hồng", "Cam"] },
]

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Container maxWidth="lg" className={cx('container')}>
                <Sidebar
                    filterItems={FILTER_FLOWER_BASKET_PAGE}
                />
                <div className={cx('content')}>
                    {children}
                </div>
            </Container>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout;