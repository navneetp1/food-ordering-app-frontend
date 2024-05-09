import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function UsernameMenu() {

    const { user, logout } = useAuth0();
    
    return (
        <>
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-bold px-3 hover:text-orange-500 hover:underline gap-2">
                <CircleUserRound className="text-blue-600 hover:text-orange-500"/>
                {user?.name}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-pale-yellow font-body">
                <DropdownMenuItem>
                    <Link className="font-bold hover:text-orange-500 hover:underline" to="/user-profile">
                    Profile
                    </Link>
                </DropdownMenuItem>

                <Separator/>

                <DropdownMenuItem>
                    <Button 
                        onClick={() => logout()}
                        className="flex flex-1 font-bold bg-blue-500">
                    Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}