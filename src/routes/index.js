import { HeaderOnly } from '../components/Layout';

import routesConfig from '../config/routes';
import Home from '../pages/Home';
import FlowerBasket from '../pages/FlowerBasket';
import BetrothalGiftTray from '../pages/BetrothalGiftTray';
import Upload from '../pages/Upload';
import Search from '../pages/Search';


const publicRoutes = [
    { path: routesConfig.home, component: Home, layout: HeaderOnly },
    { path: routesConfig.flowerBasket, component: FlowerBasket },
    { path: routesConfig.betrothalGriftTray, component: BetrothalGiftTray },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };