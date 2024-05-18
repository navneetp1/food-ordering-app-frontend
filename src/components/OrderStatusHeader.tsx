import { Order } from "@/types"
import { Progress } from "./ui/progress"
import { ORDER_STATUS } from "@/config/order-status-config"

type Props = {
    order: Order
}

export default function OrderStatusHeader({ order }: Props ) {

    const getExpectedDelivery = () => {
        const created = new Date(order.createdAt)

        created.setMinutes(created.getMinutes() + order.restaurant.estimatedDeliveryTime)

        const hours = created.getHours()
        const minutes = created.getMinutes()

        const paddedMins = minutes < 10 ? `0${minutes}` : minutes;

        return `${hours}:${paddedMins}`;
    }

    const getOrderStatusInfo = () => {
        return ORDER_STATUS.find((o) => order.status === o.value) ||  ORDER_STATUS[0]
    }


  return (
    <>
        <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
            <span>Order Status: <span className="text-green-500">{getOrderStatusInfo().label}</span></span>
            <span>Expected By: <span className="text-red-600">{getExpectedDelivery()}</span></span>
        </h1>
        <Progress className="animate-pulse" value={getOrderStatusInfo().progressValue}/>
    </>
  )
}
