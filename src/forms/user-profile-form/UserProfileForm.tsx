import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    addressLine1: z.string().min(1, "AddressLine is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required")
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
    currentUser: User;
    onSave: (userProfileData: UserFormData) => void
    isLoading: boolean; 
}

const UserProfileForm = ({ isLoading, onSave, currentUser } : Props) =>{
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser,
    });

    useEffect(() => {
        form.reset(currentUser)
    }, [currentUser, form])

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSave)}
                className="flex flex-col space-y-4 bg-gray-50 rounded-lg md:p-10"
            >

                    <div className="font-body">
                        <h2 className="text-2xl font-bold">User Profile Form</h2>
                        <FormDescription>
                            View and change your profile information
                        </FormDescription>
                    </div>


                    <FormField 
                        control={form.control} 
                        name="email" 
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} disabled className="bg-white"/>
                                </FormControl>
                                <FormLabel>Email</FormLabel>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control} 
                        name="name" 
                        render={({field}) => (
                            <FormItem className="relative z-0">
                                <FormControl>
                                    <Input {...field} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=""/>
                                </FormControl>
                                <FormLabel className="absolute text-sm -top-4 text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-0.5 scale-75 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:-top-1 peer-focus:scale-75 peer-focus:-translate-y-3/4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</FormLabel>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col md:flex-row gap-4">

                        <FormField 
                            control={form.control} 
                            name="addressLine1" 
                            render={({field}) => (
                                <FormItem className="flex-1 relative z-0">
                                    <FormControl>
                                        <Input {...field} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=""/>
                                    </FormControl>
                                    <FormLabel className="absolute text-sm -top-4 text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-0.5 scale-75 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:-top-1 peer-focus:scale-75 peer-focus:-translate-y-3/4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Address Line 1</FormLabel>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="city" 
                            render={({field}) => (
                                <FormItem className="flex-1 relative z-0">
                                    <FormControl>
                                        <Input {...field} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=""/>
                                    </FormControl>
                                    <FormLabel className="absolute text-sm -top-4 text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-0.5 scale-75 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:-top-1 peer-focus:scale-75 peer-focus:-translate-y-3/4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">City</FormLabel>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="country" 
                            render={({field}) => (
                                <FormItem className="flex-1 relative z-0">
                                    <FormControl>
                                        <Input {...field} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=""/>
                                    </FormControl>
                                    <FormLabel className="absolute text-sm -top-4 text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-0.5 scale-75 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:-top-1 peer-focus:scale-75 peer-focus:-translate-y-3/4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Country</FormLabel>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    {isLoading ? <LoadingButton /> : 
                    (
                        <Button type="submit" className="bg-blue-600 md:max-w-[150px]">
                            Submit
                        </Button>
                    )}

            </form>
        </Form>
    )
}

export default UserProfileForm