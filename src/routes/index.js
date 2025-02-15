import { HeaderOnly } from '../layouts';

import config from '../config';
import Home from '../pages/Home';
import FlowerBasket from '../pages/FlowerBasket';
import BetrothalGiftTray from '../pages/BetrothalGiftTray';
import Upload from '../pages/Upload';
import Search from '../pages/Search';


const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HeaderOnly },
    { path: config.routes.flowerBasket, component: FlowerBasket },
    { path: config.routes.betrothalGriftTray, component: BetrothalGiftTray },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };