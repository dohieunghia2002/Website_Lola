import { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import classNames from 'classnames/bind';
import styles from './BetrothalGiftTray.module.scss';

const cx = classNames.bind(styles);

function BetrothalGiftTray() {
    const [betrothalTray, setBetrothalTray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("data/betrothalGiftTray.json")
            .then((response) => {
                setBetrothalTray(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Lỗi tải dữ liệu:", error);
                setLoading(false);
            });
    }, []);


    return <>
        <h2 className={cx("heading-pages-categories")}>Tráp mâm quả</h2>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <Grid container spacing={2}>
                {betrothalTray.map((product) => (
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

export default BetrothalGiftTray;
