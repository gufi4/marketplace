import { Suspense } from "react"


import PublicRoutes from "./routes/PublicRoutes"
import { AppStyles, Footer } from "./App.styled"
import Header from "./features/Header"
// import PrivateRoutes from "./routes/PrivateRoutes"



export const App = () => {
    return <>
        <AppStyles/>

        <Header/>

        <Suspense fallback={<div>Loading...</div>}> 
            <PublicRoutes/>
            {/* <PrivateRoutes/>         */}
        </Suspense>

        <Footer>
            <div>@ Маркетплейс Gufi</div>
        </Footer>
    </>
}

export default App