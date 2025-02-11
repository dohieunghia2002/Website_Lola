import { HeaderOnly } from '../components/Layout';

import Home from '../pages/Home';
import FlowerBasket from '../pages/FlowerBasket';
import BetrothalGiftTray from '../pages/BetrothalGiftTray';
import Upload from '../pages/Upload';
import Search from '../pages/Search';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/flower-basket', component: FlowerBasket },
    { path: '/betrothal-grift-tray', component: BetrothalGiftTray },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };