import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks(){

    const { logout } = useAuth0()
    return (
        <>
            <Link 
                to="/order-status"
                className="flex font-body items-center font-bold hover:text-orange-500 hover:underline-offset-1">
                Order Status
            </Link>
            <Link 
                to="/user-profile"
                className="flex font-body items-center font-bold hover:text-orange-500 hover:underline-offset-1">
                Profile
            </Link>
            <Link 
                to="/manage-restaurant"
                className="flex font-body items-center font-bold hover:text-orange-500 hover:underline-offset-1">
                My Restaurant
            </Link>
            <Button 
                onClick={()=>logout()}
                className="flex items-center font-bold px-3 hover:bg-gray-500">
                Log out
            </Button>
        </>
    )
}