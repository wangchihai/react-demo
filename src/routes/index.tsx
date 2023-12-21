import {createBrowserRouter} from "react-router-dom";

const routes = createBrowserRouter([{
  path: '/',
  lazy: async () => {
    const {Layout} = await import('./../layout')
    return {
      Component: Layout
    }
  },
  children: [{
    index: true,
    lazy: () => import('./../pages/Homepage')
  },{
    path: 'homepage',
    lazy: () => import('./../pages/Homepage')
  },{
    path: 'login',
    lazy: () => import('./../pages/Login')
  },{
    path: 'dashboard',
    lazy: () => import('./../pages/Dashboard')
  }]
}])

export default routes