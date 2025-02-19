import styled from "styled-components"
import colors from "../../consts/colors"

export const ProductGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const ProductsGroupContainer = styled.div`
    margin-top: 15px;
    min-width: 70%;
    
`
export const ProductWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 50px;
`

export const Image = styled.img`
    width: 400px;
    border-radius: 4px;
    object-fit: scale-down;
`

export const InfoWrapper = styled.div`
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 40px;
`

export const Title = styled.h3`
    
`

export const Quantity = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-size: 20px;
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
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 20px 5px rgba(49, 49, 49, 0.15);
    border-radius: 10px;
    padding: 25px;
    color: black;
    width: 25%;
    height: fit-content;
    text-align: center;
`

export const InfoTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 16px;
    font-weight: 600;
`

export const InfoCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;

    > * {
        margin-bottom: 10px;
    }
`

export const TotalPrice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    border-top: 1px solid ${colors.secondary};
    padding-top: 15px;
`

