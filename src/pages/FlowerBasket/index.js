import { useState, useEffect } from "react";
import axios from "axios";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import classNames from 'classnames/bind';
import styles from './FlowerBasket.module.scss';

const cx = classNames.bind(styles);

function FlowerBasket() {
    const [flowerBaskets, setFlowerBaskets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("data/flowerBasket.json")
            .then((response) => {
                setFlowerBaskets(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Lỗi tải dữ liệu:", error);
                setLoading(false);
            });
    }, []);


    return <>
        <h2 className={cx("heading-pages-categories")}>Giỏ hoa thương mại</h2>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <Grid container spacing={2}>
                {flowerBaskets.map((product) => (
                    <Grid size={4} key={product.id}>

                        <Card>
                            <Tippy content={product.name} placement="right">
                                <CardMedia className={cx('card-img')}
                                    image={product.imgUrl}
                                    title="sản phẩm"
                                />
                            </Tippy>
                        </Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={cx('card-item-name')}>
                                {product.name}
                            </Typography>
                        </CardContent>
                    </Grid>

                ))}
            </Grid>
        )}
    </>

}

export default FlowerBasket;
