type emailProps = {
    email: string
}

export const UserEmail = ({ email }: emailProps) => {
    return (
        <h2>Meu email é: {email}</h2>
    )
}