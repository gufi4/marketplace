import styled from "styled-components"
import colors from "../../consts/colors"

export const ProductGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const ProductsGroupContainer = styled.div`
    margin-top: 15px;

    > * {
        width: 16.666666%;
        margin-bottom: 20px;
    }
`
export const ProductWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 50px;
`

export const Image = styled.img`
    height: 165px;
    border-radius: 4px;
    object-fit: scale-down;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 40px;
`

export const Title = styled.h3`
    
`

export const Desc = styled.div`
    margin-bottom: 80px;
`

export const Price = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${colors.secondary};
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;

`

export const CartWrapper = styled.div`
    
`