import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type Props = {
    onChange: (value: string) => void;
    sortOption: string;
};

const SORT_OPTIONS = [
    {
        label: "Best match",
        value: "bestMatch"
    },
    {
        label: "Delivery Price",
        value: "deliveryPrice"
    },
    {
        label: "Estimated Delivery Time",
        value: "estimatedDeliveryTime"
    }
]

export default function SortOptionDropdown({ onChange, sortOption } : Props) {

    const selectedSortedLabel = SORT_OPTIONS.find((option) => option.value === sortOption)?.label 
                                || SORT_OPTIONS[0].label

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
            <Button variant="outline"
                    className="w-full font-semibold bg-black text-white hover:bg-gray-200 hover:text-black">
                Sort By: {selectedSortedLabel}
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            {SORT_OPTIONS.map((option) => (
                <DropdownMenuItem
                                  className="cursor-pointer font-roboto font-semibold bg-black text-white hover:bg-gray-200 hover:text-black rounded-none"
                                  onClick={() => onChange(option.value)}
                >
                    {option.label}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
