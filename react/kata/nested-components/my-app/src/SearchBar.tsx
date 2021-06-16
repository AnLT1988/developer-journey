const SearchBar = (props: any) => {

    const toggleShowInStock = (e: any) => {
        console.log(e.target.checked)
        props.setShowInStock(e.target.checked)
    }
    return (
        <>
            <input name='searchBox' id='searchBox' type='text' placeholder='type to search' value={props.searchKey} onChange={(e) => { props.setSearchKey(e.target.value) }} />
            <br></br>
            <input type='checkbox' name='onlyInStock' id='onlyInStock' value={props.showInStock} onChange={toggleShowInStock} />Only shows products in stock
        </>
    )
}

export default SearchBar