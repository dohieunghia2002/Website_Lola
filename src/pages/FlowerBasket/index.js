import { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
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
        <h2>Giỏ hoa thương mại</h2>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <Grid container spacing={2}>
                {flowerBaskets.map((product) => (
                    <Grid size={4} key={product.id}>
                        <Card>
                            <CardMedia className={cx('card-img')}
                                image={product.imgUrl}
                                title="sản phẩm"
                            />

                        </Card>
                    </Grid>

                ))}
            </Grid>
        )}
    </>

}

export default FlowerBasket;
