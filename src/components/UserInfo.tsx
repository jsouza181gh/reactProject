import { UserAvatar } from "./UserAvatar"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"
import { UserPhone } from "./UserPhone"
import { UserRoles } from "./UserRoles"

type UserInfoProps = {
    name: string;
    email: string;
    phone: string;
    imgSrc?: string;
    imgAltText: string;
    roles: {
        id: number;
        title: string
    }[]
}

export const UserInfo = ({ name, email, phone, roles, imgAltText, imgSrc = "https://cdn-icons-png.flaticon.com/512/3541/3541871.png" }: UserInfoProps) => {
    return (
        <>
            <UserName 
                name={name}
            />
            <UserAvatar 
                src={imgSrc}
                alt={imgAltText}
            />
            <UserEmail 
                email={email}
            />
            <UserPhone 
                phone={phone}
            />
            <UserRoles 
                roles={roles}
            />
        </>
    )
}