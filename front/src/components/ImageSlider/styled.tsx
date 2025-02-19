import styled from 'styled-components'

type DotedStyleProps = {
    isActive: string,
};

type imgProps = {
    isActive: string,
    image: string,
};

export const ContainerStyle = styled.article`
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 600px
`

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    //background-color: rgba(0, 0, 0, 0.5);
`

export const DotedStyle = styled.div<DotedStyleProps>`
    position: relative;
    z-index: 200;

    width: 16px;
    height: 16px;

    opacity: ${({ isActive }: DotedStyleProps) =>
    isActive === "active" ? "1" : ".6"};

    border-radius: 10px;
    background-color: #fff;
    transform: scale(1);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    cursor: pointer;

    &:hover {
        opacity: 1;
        transform: scale(1.2);
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }
`

export const IndicatorSlideStyle = styled.div`
    position: absolute;
    bottom: 10px;

    width: 100%;
    height: auto;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const SlideStyle = styled.div<imgProps>`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: ${({ isActive }: imgProps) => (isActive === "active" ? "1" : "0")};
    transition: opacity 1s;
    background-image: url(${({ image }: imgProps) => image});
`;

