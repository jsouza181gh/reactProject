type phoneProps = {
    phone: string
}

export const UserPhone = ({ phone } : phoneProps) => {
    return (
        <h2>Meu telefone é: {phone}</h2>
    )
}