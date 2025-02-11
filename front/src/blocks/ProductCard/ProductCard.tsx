import { useCallback, useMemo } from "react"
import { Link, useLocation } from "react-router-dom"

import { useAppDispatch } from '../../store'
import HeartEmpty from '../../img/heart-empty.svg?react'
import HeartFilled from '../../img/heart-filled.svg?react'
import Button from "../../components/Button"
import { addToFavorites, removeFromFavorites } from "../../features/Favorites/reducer"
import { paths } from "../../routes/helpers"
import NewIcon from '../../img/new.svg?react'

import { 
    Wrapper, 
    LikeWrapper,  
    Image, 
    PriceWrapper,
    PriceRegular,
    Title,
    Desc,
    BtnsWrapper,
    NewWrapper,
} from "./styled"
import { addToCart } from "../../features/Cart/reducer"


interface I_ProductCardProps {
    id: number,
    slug?: string,
    image: string,
    price: number,
    title: string,
    description: string,
    brend: string,
    isLiked: boolean,
    hideLikes?: boolean,
    newModel?: boolean,
}

const ProductCard: React.FC<I_ProductCardProps> = ({
    id,
    slug,
    image,
    price,
    title,
    description,
    brend,
    isLiked,
    hideLikes,
    newModel,
}) => {
    const dispatch = useAppDispatch()
    const location = useLocation()

    const handleFavorites = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const { productId } = e.currentTarget.dataset

        dispatch(
            !isLiked
                ? addToFavorites(+productId!)
                : removeFromFavorites(+productId!)
        )
    }, [dispatch, isLiked])

    const isFavoritesPage = useMemo(
        () => location.pathname === paths.favorites,
        [ location.pathname ]
    )

    const removeFavorites = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            dispatch(
                removeFromFavorites(+e.currentTarget.dataset.productId!)
            )
        }, [ dispatch ]
    )
    
    const addProductFromCart = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            dispatch(
                addToCart(+e.currentTarget.dataset.productId!)
            )
        }, [ dispatch ]
    )


        return(
            <Wrapper>
                {!hideLikes && (
                    <LikeWrapper 
                        data-product-id={id}
                        onClick={handleFavorites}
                        >
                            {isLiked ? <HeartFilled /> : <HeartEmpty/>}
                        </LikeWrapper>
                )}

                {newModel && (
                    <NewWrapper>
                        <NewIcon/>
                    </NewWrapper>
                )}

                <Link to={`/product/${slug || id}`}>
                    <Image src={image}/>
                </Link>

                <PriceWrapper>
                    <PriceRegular>{price} ₽</PriceRegular>
                </PriceWrapper>

                <Title className='h4'>
                    <Link to={`/product/${slug || id}`}>
                    {title} 
                    </Link>
                </Title>

                <Desc>
                    Бренд: {brend}<br/>
                    {description}
                </Desc>

                <BtnsWrapper>
                    <Button 
                        type="primary"
                        onClick={addProductFromCart}
                        data-product-id={id}
                        block
                        >
                        Добавить в корзину
                    </Button>

                    {isFavoritesPage && (
                        <Button
                            type="danger"
                            block
                            onClick={removeFavorites}
                            data-product-id={id}
                        >
                            Удалить
                        </Button>
                    )}
                </BtnsWrapper>
            </Wrapper>
        )
    }
export default ProductCard
