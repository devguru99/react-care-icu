import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';
const VITE_BASE_PATH = '';

const routes: Routes = {
  [Pages.Homepage]: {
    component: asyncComponentLoader(() => import('@/pages/Homepage')),
    path: `${VITE_BASE_PATH}`,
    title: 'Home',
    icon: HomeIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: `${VITE_BASE_PATH}/*`,
  },
};

export default routes;
