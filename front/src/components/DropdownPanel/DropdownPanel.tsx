import { useCallback, useRef, useState } from "react"

import { useOnClickOutside } from "../../helpers/hooks/useOnClickOutside"
import { Wrapper, DropdownWrapper } from "./styled"


interface I_DropdownPanel {
    toggler: (props: any) => React.ReactElement
    children: React.ReactElement
    toLeft?: boolean
}

const DropdownmPanel: React.FC<I_DropdownPanel> = ({
    toggler,
    children,
    toLeft = false,
}: I_DropdownPanel) => {
    const dropdownWrapperRef = useRef(null)

    const [ isVisible, setIsVisible ] = useState<boolean>(false)

    const toggleVisibility = useCallback(() => {
        setIsVisible((isVisible) => !isVisible)
    }, [])

    useOnClickOutside(dropdownWrapperRef, toggleVisibility)

    const Toggler = toggler

    return (
        <Wrapper>
            <Toggler onClick={toggleVisibility} />

            {isVisible && (
                <DropdownWrapper 
                    ref={dropdownWrapperRef}
                    toLeft={toLeft}
                >
                    {children}
                </DropdownWrapper>
            )}
        </Wrapper>
    )
}

export default DropdownmPanel