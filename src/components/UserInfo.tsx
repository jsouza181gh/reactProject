import { UserAvatar } from "./UserAvatar"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"
import { UserPhone } from "./UserPhone"
import { UserRoles } from "./UserRoles"

export const UserInfo = () => {
    return (
        <>
            <UserName />
            <UserAvatar />
            <UserEmail />
            <UserPhone />
            <UserRoles />
        </>
    )
}