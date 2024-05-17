import { useAuth0 } from "@auth0/auth0-react"
import { useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import LoadingButton from "./LoadingButton"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import UserProfileForm, { UserFormData } from "@/forms/user-profile-form/UserProfileForm"
import { useGetMyUser } from "@/api/MyUserApi"



type Props = {
    onCheckout: (userFormData: UserFormData) => void;
    disabled: boolean;
    isLoading: boolean;
}


export default function CheckoutButton({ onCheckout, disabled, isLoading }: Props) {

    const { 
            isAuthenticated, 
            isLoading: isAuthLoading, 
            loginWithRedirect 
        } = useAuth0()

    const { pathname } = useLocation() //detail/:id <--

    const { currentUser , isLoading:isGetUserLoading } = useGetMyUser()

    const onLogin = async() => {
        await loginWithRedirect({
            appState: {
                returnTo: pathname,
            }
        })
    }

    if(!isAuthenticated){

        return (
            <Button 
                onClick={onLogin}
                className="bg-green-500 flex-1">
                    Login to Check Out
            </Button>
            )
    }

    if(isAuthLoading || !currentUser || isLoading){
        return <LoadingButton />
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button   
                disabled={disabled} 
                className="bg-black hover:bg-gray-600 flex-1">Go to checkout</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-100">
          <UserProfileForm
            currentUser={currentUser}
            isLoading={isGetUserLoading}
            onSave={onCheckout}
            title="Delivery Details"
            buttonText="Continue to payment"
            width="200px"
          />
        </DialogContent>
      </Dialog>
    );
 
  
}
