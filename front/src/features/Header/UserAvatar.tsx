import { UserAvatarWrapper } from "./styled"

import avatar from './img/avatar.jpg'


interface I_DropdownPanelProps {
    onClick: () => void
}

const UserAvatar: React.FC<I_DropdownPanelProps> = (props) => (
    <UserAvatarWrapper onClick={props.onClick}>
        <img src={avatar} alt="User Avatar" />
    </UserAvatarWrapper>
)

export default UserAvatar