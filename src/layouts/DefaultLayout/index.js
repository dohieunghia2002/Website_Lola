import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Container from '@mui/material/Container';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);


function DefaultLayout({ children }) {
    const [uniqueColors, setUniqueColors] = useState([]);
    const [filterItems, setFilterItems] = useState([
        { checkboxType: "style", title: "Kiểu dáng", contentList: ["Giỏ hoa", "Vali hoa", "Kệ hoa", "Bó hoa"] },
        { checkboxType: "color", title: "Màu sắc", contentList: ["Đỏ", "Trắng", "Xanh dương", "Vàng", "Hồng", "Cam"] },
    ]);

    useEffect(() => {
        axios.get("data/flowerBasket.json")
            .then((response) => {
                const colorSet = new Set();
                response.data.forEach((item) => {
                    item.color.forEach((color) => {
                        color.split(",").forEach((c) => colorSet.add(c.trim()));
                    });
                });
                setUniqueColors([...colorSet]); // Chuyển Set thành mảng
            })
            .catch((error) => console.error("Lỗi tải dữ liệu:", error));
    }, []);

    useEffect(() => {
        setFilterItems((prevFilters) => {
            return prevFilters.map((filter) =>
                filter.checkboxType === "color"
                    ? { ...filter, contentList: uniqueColors }
                    : filter
            );
        });
    }, [uniqueColors]);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <Container maxWidth="lg" className={cx('container')}>
                <Sidebar filterItems={filterItems} />
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
};

export default DefaultLayout;
