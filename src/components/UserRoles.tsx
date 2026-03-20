type UserRolesProps = {
    roles: {
        id: number;
        title: string
    }[]
}

export const UserRoles = ( { roles } : UserRolesProps ) => {
    return (
        <ul>
            {roles.map(value => (
                <li key={value.id}>
                    {value.title}
                </li>
            ))}
        </ul> 
    )
}