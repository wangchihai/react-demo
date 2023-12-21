import {NavLink, Outlet} from "react-router-dom";

export function Layout() {
  const style={
    marginRight: 10
  }
  return <div>
    <div>
      <NavLink to={'/login'} style={style}>login</NavLink>
      <NavLink to={'/dashboard'} style={style}>dashboard</NavLink>
      <NavLink to={'/homepage'}>homepage</NavLink>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
}