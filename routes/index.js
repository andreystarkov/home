import home from './home';
import about from './about';
import error from './error';

const routes = {

  path: '/',

  children: [
    home,
    about,
    error,
  ],

};

export default routes;
