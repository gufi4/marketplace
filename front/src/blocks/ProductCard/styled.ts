import styled from "styled-components"
import colors from "../../consts/colors"

export const Wrapper = styled.div`
    padding: 10px;
    position: relative;

    svg {
        cursor: pointer;
        max-width: 50px;
        max-height: 50px;
    }
    
` 

export const LikeWrapper = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NewWrapper = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    margin-bottom: 10px;
    width: 100%;
    height: 165px;
    border-radius: 4px;
    object-fit: scale-down;
`

export const PriceWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
`

export const PriceRegular = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${colors.secondary};
`

export const Title = styled.h3`
    margin-bottom: 5px;
`

export const Desc = styled.div`
    margin-bottom: 10px;
`

export const BtnsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    * + * {
        margin-top: 10px;
    }
`
