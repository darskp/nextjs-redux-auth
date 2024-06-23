import { auth } from "@/auth";
import CartPage from "@/components/Cart"
import { redirect } from "next/navigation";

const Cart = async () => {
    const getSession = await auth();

    if (!getSession) {
        redirect('/unauth-page')
    }
    return (
        <div>
            <CartPage />
        </div>
    )
}

export default Cart