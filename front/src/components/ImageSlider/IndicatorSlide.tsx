import { DotedStyle, IndicatorSlideStyle } from "./styled";

export const IndicatorSlide = ({
    slideIndex,
    amountImage,
    setSlideIndex,
}: any) => {
    return (
        <IndicatorSlideStyle>
        {Array(amountImage)
            .fill(1)
            .map((_, i) => {
            return (
                <DotedStyle
                key={i}
                isActive={slideIndex === i ? "active" : ""}
                onClick={() => setSlideIndex(i)}
                />
            );
            })}
        </IndicatorSlideStyle>
    );
};