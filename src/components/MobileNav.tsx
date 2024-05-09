import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {

    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-blue-500"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? 
                    (
                        <span className="flex items-center font-bold font-body gap-2">
                            <CircleUserRound className="text-blue-500"/>
                            {user?.name}
                        </span>
                    ) : 
                    (
                        <span  className="font-body">Welcome to BlendEats</span>
                    )}
                </SheetTitle>
            <Separator/>

            <SheetDescription className="flex flex-col gap-4 font-body">
                {isAuthenticated ? 
                (
                    <MobileNavLinks/>
                ):
                (
                    <Button 
                        onClick={() => loginWithRedirect()}
                        className="flex-1 font-bold bg-blue-600 font-body">
                        Login
                    </Button>
                )}
                
            </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;