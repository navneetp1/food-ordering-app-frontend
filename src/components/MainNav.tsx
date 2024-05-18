import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";


export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0(); 
  
  return (
    <>
      <span className="flex space-x-2 items-center">
        {isAuthenticated ? (
          <>
            <Link to="/order-status" className="font-bold hover:text-gray-400" title="Order Status">
              Order Status
            </Link>
            <UsernameMenu />
          </>
        ) : (
          <Button
            variant="ghost"
            className="text-xl font-bold hover:text-orange-500 hover:underline"
            onClick={async () => await loginWithRedirect()}
          >
            Login
          </Button>
        )}
      </span>
    </>
  );
}
