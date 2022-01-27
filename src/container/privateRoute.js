import React from 'react';  
import { Navigate, Route, useLocation, } from 'react-router-dom';
import { checkCookie } from '../utils/cookies';

// const token = localStorage.getItem('token');

// const PrivateRoute = ({ component: Component, ...rest }) => (  

//   <Route { ...rest } render={props => (
//     token ? (
//       <Component { ...props } />
//     ) : (
//       <Navigate to={{
//           pathname: '/dashboard',
//           state: { from: props.location }
//         }}
//       />
//     )
//   )} />
// );


const PrivateRoute = ({ children }) => {
	const location = useLocation();

	if (checkCookie() == null) {
		return <Navigate to='/' state={{ from: location }} />;
	}
  console.log("children", children);
  return children;
}

export default PrivateRoute;