import styled from 'styled-components'

import colors from '../../consts/colors'


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`

export const ImagesWrapper = styled.div`
    width: calc(50% - 20px);
    position: relative;
`

export const LikeWrapper = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        pointer-events: none;
    }
`

export const Image = styled.img`
    width: calc(50% - 20px);
    margin-bottom: 10px;
    max-height: 40vh;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    object-fit: contain;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(50% - 30px);
`

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
`

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const Price = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    color: ${colors.primary};
`