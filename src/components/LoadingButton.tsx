import { Button } from "./ui/button";
import { Loader2 } from "lucide-react"


export default function LoadingButton() {
  return (
    <Button disabled className="md:max-w-[150px]">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading
    </Button>
  )
}


