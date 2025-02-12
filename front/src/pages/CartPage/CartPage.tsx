import { Helmet } from "react-helmet"
import { useAppDispatch, useAppSelector } from "../../store"

import { dummyProducts } from "../dummyProducts"
import { PageWrapper } from "../../App.styled"
import { selectCart } from "../../features/Cart/selectors"
import { Link } from "react-router-dom"
import { useCallback } from "react"
import { removeFromCart } from "../../features/Cart/reducer"
import { 

    ButtonWrapper,
    CartWrapper,
    Desc,
    Image, 
    Price, 
    ProductGroup, 
    ProductsGroupContainer,
    ProductWrapper,
    Title,
    TitleWrapper,
} from './styled'
import Button from "../../components/Button"



const FavotitesPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const idsInCarts = useAppSelector(selectCart)

    const removeProductFromCart = useCallback(
            (e: React.MouseEvent<HTMLElement>) => {
                dispatch(
                    removeFromCart(+e.currentTarget.dataset.productId!)
                )
            }, [ dispatch ]
        )

    return <>
        <Helmet>
            <title>Корзина</title>
        </Helmet>

        <PageWrapper>

            {idsInCarts.length ? (
                <ProductGroup>
                        <ProductsGroupContainer>
                        {dummyProducts
                        .filter((p) => idsInCarts.includes(p.id))
                        .map((p) => (
                            <ProductWrapper>
                                <Link to={`/product/${p.slug || p.id}`}>
                                    <Image src={p.image}/>
                                </Link>

                                <TitleWrapper>
                                    <Title className="h4">
                                        <Link to={`/product/${p.slug || p.id}`}>
                                            {p.title} 
                                        </Link>
                                    </Title>

                                    <Desc>
                                        Бренд: {p.brend}<br/>
                                        {p.description}
                                    </Desc>

                                    <Price>
                                        {p.price} ₽
                                    </Price>
                                </TitleWrapper>

                                <ButtonWrapper>
                                    <Button
                                        type="ghost"
                                        onClick={removeProductFromCart}
                                        data-product-id={p.id}
                                        block
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
                        </CartWrapper>
                </ProductGroup>
            ) : (
                <p>Пока в корзине ничего нет</p>
            )}
        </PageWrapper>
    </>
}

export default FavotitesPage