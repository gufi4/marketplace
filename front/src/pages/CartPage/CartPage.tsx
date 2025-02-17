import { Helmet } from "react-helmet"
import { useAppDispatch, useAppSelector } from "../../store"

import { PageWrapper } from "../../App.styled"
import { selectCart } from "../../features/Cart/selectors"
import { Link } from "react-router-dom"
import { addToCart, removeFromCart, clearCart } from "../../features/Cart/reducer"
import { 

    ButtonWrapper,
    CartWrapper,
    Image, 
    Price, 
    ProductGroup, 
    ProductsGroupContainer,
    ProductWrapper,
    Title,
    InfoWrapper,
    Quantity,
} from './styled'
import Button from "../../components/Button"

import { LuCirclePlus } from "react-icons/lu";
import { LuCircleMinus } from "react-icons/lu";



const CartPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const idsInCarts = useAppSelector(selectCart)

    const cartItems = idsInCarts.items
    const totalPrice = cartItems.reduce(
        (value, item) => value + item.price * item.quantity, 0
    )

    function removeProductFromCart(id: number) {
        dispatch(removeFromCart(id));
    }
    function removeItemProductFromCart(id: number) {
        dispatch(clearCart(id));
    }

    function addProductFromCart (id: number,
            image: string,
            title: string,
            brend: string,
            price: number,
            slug?: string): void {
                dispatch(addToCart({
                    id,
                    image, 
                    title,
                    brend, 
                    price,
                    slug}))
            }
    
    return <>
        <Helmet>
            <title>Корзина</title>
        </Helmet>

        <PageWrapper>

            {idsInCarts.items.length ? (

                <ProductGroup>
                        <ProductsGroupContainer>
                        {cartItems
                        .map((p) => (
                            <ProductWrapper>
                                <Link to={`/product/${p.slug || p.id}`}>
                                    <Image src={p.image}/>
                                </Link>

                                <InfoWrapper>
                                    <Title className="h4">
                                        <Link to={`/product/${p.slug || p.id}`}>
                                            {p.title} 
                                        </Link>
                                    </Title>
                                    <Quantity>
                                        <LuCirclePlus
                                            className="icon"
                                            onClick={()=>{addProductFromCart(p.id, p.image, p.title, p.brend, p.price, p.slug)}}
                                        /> 
                                        {p.quantity} 
                                        <LuCircleMinus
                                            className="icon"
                                            onClick={()=>{removeProductFromCart(p.id)}}
                                        />
                                    </Quantity>
                                    <Price>
                                        {p.price} ₽
                                    </Price>
                                </InfoWrapper>

                                <ButtonWrapper>
                                    <Button
                                        type="ghost"
                                        onClick={() => removeItemProductFromCart(p.id)}
                                        data-product-id={p.id}
                                        
                                    >
                                        Убрать из корзины
                                    </Button>
                                </ButtonWrapper>
                                
                            </ProductWrapper>
                        ))
                        }

                    </ProductsGroupContainer>
                        <CartWrapper>
                            <h1>Корзина</h1>
                            <p>{totalPrice}</p>
                        </CartWrapper>
                </ProductGroup>
            ) : (
                <p>Пока в корзине ничего нет</p>
            )}
        </PageWrapper>
    </>
}

export default CartPage