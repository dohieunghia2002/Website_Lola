import Container from '@mui/material/Container';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <Container maxWidth="lg">
                <div className={cx('content')}>
                    {children}
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default HeaderOnly;