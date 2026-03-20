type avatarProps = {
    src: string
    alt: string
}

export const UserAvatar = ({ src, alt } : avatarProps) => {
    return (
        <img 
            src= { src }
            alt= { alt }
        />
    )
}