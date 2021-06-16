const CategoryRow = (props: any) => {
    const category = props.category
    return (<tr><th colSpan={2}>{category}</th></tr >)
}

export default CategoryRow