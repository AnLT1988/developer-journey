const People = (prop: any) => {

    return (
        <div className="d-flex flex-column">
            {prop.people.map((person: any) => {
                return (<li>Name: {person.name}            Age: {person.age}</li>)
            })}
        </div>
    )
}

export default People