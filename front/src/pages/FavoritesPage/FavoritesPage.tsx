import { useSelector } from "react-redux"
import { Helmet } from "react-helmet"

import ProductCard from "../../blocks/ProductCard"
import { selectFavorites } from "../../features/Favorites/selectors"
import { dummyProducts } from "../dummyProducts"
import { ProductGroupContainer } from './styled'
import { PageWrapper } from "../../App.styled"


const FavotitesPage: React.FC = () => {
    const idsInFavorites = useSelector(selectFavorites)

    
    return <>
        <Helmet>
            <title>Избранное</title>
        </Helmet>

        <PageWrapper>
            <h2>Избранное</h2>

            {idsInFavorites.length ? (
                <ProductGroupContainer>
                    {dummyProducts
                    .filter((p) => idsInFavorites.includes(p.id))
                    .map((p) => (
                        <ProductCard
                            {...p}
                            key={p.id}
                            isLiked={false}
                            hideLikes={true}
                        />
                    ))
                    }
                </ProductGroupContainer>
            ) : (
                <p>Пока в избранном ничего нет</p>
            )}
        </PageWrapper>
    </>
}

export default FavotitesPage