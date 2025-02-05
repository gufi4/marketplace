import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"

import { PageWrapper } from "../../App.styled"
import { ProductGroup, ProductGroupContainer } from "./styled"
import { dummyProducts } from "../dummyProducts"
import ProductCard from "../../blocks/ProductCard/ProductCard"
import { selectFavorites } from "../../features/Favorites/selectors"


const HomePage: React.FC =() =>{
    const idsInFavorites = useSelector(selectFavorites)

    
    return <>
        <Helmet>
            <title>Главная {}</title>
        </Helmet>
        
        <PageWrapper>
            <ProductGroup>
                <h2>Рекомендуемые товары</h2>

                <ProductGroupContainer>
                    
                    {dummyProducts.map((p) => (
                        
                        <ProductCard
                        {...p}
                        key={p.id}
                        isLiked = {idsInFavorites.includes(p.id)}
                        />
                    ))}
                </ProductGroupContainer>
            </ProductGroup>
        </PageWrapper>
        
    </>

}


export default HomePage