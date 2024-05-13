import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form"
import MenuItemInput from "./MenuItemInput";


export default function MenuSection() {
    const { control } = useFormContext()
    
    //SETUP FOR DYNAMIC ADDITION AND REMOVAL OF MENU ITEMS

    //fields - list of current array items(list of all menu items)
    //append - add to fields array
    //remove - remove from fields

    const { fields, append, remove } = useFieldArray({
        control,
        name: "menuItems"
    });

  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">Menu</h2>
            <FormDescription>
                Create your menu and mention their name and a price
            </FormDescription>
        </div>
        <FormField 
            control={control}
            name="menuItems"
            render={() => (
                <FormItem className="flex flex-col gap-2">
                    {fields.map((_, index) => (
                        <MenuItemInput 
                            key={index}
                            index={index} 
                            removeMenuItem={() => remove(index)}
                        />
                    ))}
                </FormItem>
            )}/>

            
        <Button 
            type="button"
            onClick={() => append({name: "", price: ""})}
          >
                Add Menu Item
        </Button>
    </div>

  )
}
