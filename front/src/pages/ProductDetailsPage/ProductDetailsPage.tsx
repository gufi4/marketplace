import { useState, useEffect, useCallback, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store'
import { addToFavorites, removeFromFavorites } from '../../features/Favorites/reducer'
import { selectFavorites } from '../../features/Favorites/selectors'
import HeartEmpty from '../../img/heart-empty.svg?react'
import  HeartFilled from '../../img/heart-filled.svg?react'
import { PageWrapper } from '../../App.styled'
import {
    Wrapper,
    LikeWrapper,
    ImagesWrapper,
    Image,
    InfoWrapper,
    PriceWrapper,
    Price,
} from './styled'
import type { I_ProductDetails } from '../../pages/types'
import { dummyProducts } from '../dummyProducts'
import Button from '../../components/Button'
import { addToCart, removeFromCart } from '../../features/Cart/reducer'
import { selectCart } from '../../features/Cart/selectors'


const ProductDetailsPage: React.FC = () => {
    const params = useParams()
    const dispatch = useAppDispatch()

    const [ productDetails, setProductDetails ] = useState<I_ProductDetails>()

    useEffect(() => {
        {dummyProducts.map((p) => {
            if (p.id === +params.idOrSlug! || p.slug === params.idOrSlug) {
                setProductDetails(p)
            }
        })}
    }, [ params.idOrSlug ])

    const idsInFavorites = useAppSelector(selectFavorites)

    const isLiked = useMemo(
        () => idsInFavorites.includes(productDetails?.id!),
        [ idsInFavorites, productDetails ]
    )

    const idsInCart = useAppSelector(selectCart)

    const isCart = useMemo(
            () => idsInCart.includes(productDetails?.id!),
        [ idsInCart, productDetails ]
        )

    const handleFavorites = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const { productId } = e.currentTarget.dataset

        dispatch(
        !idsInFavorites.includes(+productId!)
            ? addToFavorites(+productId!)
            : removeFromFavorites(+productId!)
        )
    }, [ dispatch, idsInFavorites ])

    const addProductFromCart = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            dispatch(
                addToCart(+e.currentTarget.dataset.productId!)
            )
        }, [ dispatch ]
    )

    const removeProductFromCart = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            dispatch(
                removeFromCart(+e.currentTarget.dataset.productId!)
            )
        }, [ dispatch ]
    )


    if (!productDetails) return null


    const { id, image, title, description, price, brend} = productDetails


    return <>
        <Helmet>
        <title>Карточка товара</title>
        </Helmet>

        <PageWrapper>
        <Wrapper>
            <ImagesWrapper>
            <Image src={image} />

            <LikeWrapper
                data-product-id={id}
                onClick={handleFavorites}
            >
                {isLiked ? <HeartFilled /> : <HeartEmpty />}
            </LikeWrapper>
            </ImagesWrapper>

            <InfoWrapper>
            <h1>{title}</h1>

            <PriceWrapper>
                <Price>{price} ₽</Price>
            </PriceWrapper>

            <p>{description}</p>
            <p>{brend}</p>
            <Button
                type="primary"
                onClick={addProductFromCart}
                data-product-id={id}
                block
            >
                Добавить в корзину
            </Button>

            {isCart && (
                <Button
                    type="danger"
                    block
                    onClick={removeProductFromCart}
                    data-product-id={id}
                >
                    Удалить
                </Button>
            )}
            </InfoWrapper>
        </Wrapper>
        </PageWrapper>
    </>
}

export default ProductDetailsPage