import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../store'
import { paths } from '../../routes/helpers'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { selectIsLogged } from '../App/selectors'
import { selectFavorites } from '../Favorites/selectors'
import UserDropdownMenu from './UserDropdownMenu'
import logoPng from '../../img/logo.svg'

import { 
    Wrapper,
    LeftSide,
    Logo,
    Burger,
    SearchWrapper,
    BtnSearch,
    RightSide,
    BtnOrders,
    BtnFavorites,
    BtnNotifications,
    BtnCart,
} from './styled'
import { selectCart } from '../Cart/selectors'


const Header: React.FC = () => {
    //const location = useLocation()

    const isLogged = useAppSelector(selectIsLogged)
    const favorites = useAppSelector(selectFavorites)
    const cart = useAppSelector(selectCart)

    const [ searchInput, setSearchInput ] = useState<string>('')

    const changeSearchInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }, [])


    // if (
    //     location.pathname.includes(paths.login)
    //     || location.pathname.includes(paths.register)
    //     || location.pathname.includes(paths.requestPasswordRecovery)
    //     || location.pathname.includes(paths.confirmPasswordReconery)
    // ) return null

    return (
        <Wrapper>
            <LeftSide>
                <Link to={paths.home}>
                    <Logo src={logoPng} alt="logo" />           
                </Link>

                <Button>
                    <Burger>
                        <div /><div /><div />
                    </Burger>

                    <span>Каталог</span>
                </Button>
            </LeftSide>

            <SearchWrapper>
                <Input
                    value={searchInput}
                    onChange={changeSearchInput}
                    isGhost
                    placeholder="Поиск товаров"
                />
                <BtnSearch/>
            </SearchWrapper>

            <RightSide>
                {isLogged ? <>
                    <BtnOrders/>
                    <BtnFavorites count={favorites.length}/>
                    <BtnNotifications/>
                    <BtnCart count={cart.length}/>
                    <UserDropdownMenu/>
                </> : (
                    <Link to={paths.login}>
                        &nbsp;&nbsp;&nbsp;
                        Войти
                    </Link>
                )}
            </RightSide>
        </Wrapper>
    )
}

export default Header