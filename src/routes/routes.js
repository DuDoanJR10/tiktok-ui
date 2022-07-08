import { HeaderOnly } from '~/layouts';
import config from '~/config';

import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Profile },
    { path: config.routes.profile, component: Following },
    { path: config.routes.upload, component: Search, layout: null },
    { path: config.routes.search, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
