import {Outlet, Navigate} from "react-router-dom"

const PrivateRoutes = ({auth,children, ...rest}) => {
   console.log(auth);
    return (
        auth ? <Outlet/> : <Navigate to="/login" />
    )
}
export default PrivateRoutes