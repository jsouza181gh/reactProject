type nameProps = {
    name: string
}

export const UserName = ({ name } : nameProps) => {
    return (
        <h2>Meu nome é: {name.toUpperCase()}</h2>
    )
}