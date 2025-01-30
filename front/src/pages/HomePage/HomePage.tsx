import { Helmet } from "react-helmet"

import { TestDiv } from "./styled"

const HomePage: React.FC =() =>{
    return(
    <>
        <Helmet>
            <title>Главная {}</title>
        </Helmet>
        <TestDiv/>
        <h1>home</h1>
    </>
)
}


export default HomePage