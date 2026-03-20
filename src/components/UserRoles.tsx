export const UserRoles = () => {
    const roles = [
        {id : 1, title : 'CEO'},
        {id : 2, title : 'CTO'},
        {id : 3, title : 'CFO'},
        {id : 4, title : 'admin'}
    ]

    const filteredRoles = roles.filter(value => value.id === 1)

    return (
        <ul>
            {filteredRoles.map(value => (
                <li key={value.id}>
                    {value.title}
                </li>
            ))}
        </ul> 
    )
}