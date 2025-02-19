import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"

import { PageWrapper } from "../../App.styled"
import { ProductGroup, ProductGroupContainer } from "./styled"
import { selectFavorites } from "../../features/Favorites/selectors"
import ProductCard from "../../blocks/ProductCard"
import { dummyProducts } from "../dummyProducts"
import { Slider } from "../../components/ImageSlider/ImageSlider"
import { imageData } from "../../components/ImageSlider/ImageData"



const HomePage: React.FC =() =>{
    const idsInFavorites = useSelector(selectFavorites)

    
    return <>
        <Helmet>
            <title>Главная</title>
        </Helmet>
        
        <PageWrapper>
            <Slider Data={imageData}/>
            <ProductGroup>
                <h1>Рекомендуемые товары</h1>

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
            
            <ProductGroup>
                <h1>Новинки</h1>

                <ProductGroupContainer>

                    {dummyProducts.map((p) => {
                        if (p.newModel === true) {
                            return (
                            <ProductCard
                            {...p}
                            key={p.id}
                            isLiked = {idsInFavorites.includes(p.id)}
                            />
                        )
                        } 
                            
                    })}
                </ProductGroupContainer>
            </ProductGroup>
        </PageWrapper>
        
    </>

}


export default HomePage