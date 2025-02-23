import { useState, useEffect } from "react";
import axios from "axios";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

import classNames from 'classnames/bind';
import styles from './FlowerBasket.module.scss';

const cx = classNames.bind(styles);

function FlowerBasket() {
    const [flowerBaskets, setFlowerBaskets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const paginatedItems = flowerBaskets.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handleOpen = (imageUrl) => {
        setSelectedImage(imageUrl);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };


    return <>
        <h2 className={cx("heading-pages-categories")}>Giỏ hoa thương mại</h2>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <>
                <Grid container spacing={3}>
                    {paginatedItems.map((product) => (
                        <Grid size={4} key={product.id}>
                            <Card onClick={() => handleOpen(product.imgUrl)}>
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
                <Pagination
                    count={Math.ceil(flowerBaskets.length / itemsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                    variant="outlined"
                    className={cx('pagination')}
                />
                <Dialog open={open} onClose={handleClose} maxWidth="md" className={cx('dialog-wrapper')}>
                    <div className={cx('close-dialog-btn')} onClick={handleClose}>
                        <CloseIcon className={cx('close-dialog-icon')} />
                    </div>
                    <DialogContent className={cx('dialog-content')}>
                        {selectedImage && (
                            <img
                                src={selectedImage}
                                alt="Flower"
                                className={cx('dialog-img')}
                            />
                        )}
                    </DialogContent>
                </Dialog>
            </>
        )}
    </>

}

export default FlowerBasket;
