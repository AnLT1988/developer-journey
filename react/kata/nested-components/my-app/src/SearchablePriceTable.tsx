import SearchBar from './SearchBar'
import PriceTable from './PriceTable'
import { useState } from 'react';

const SearchablePriceTable = () => {
    const productData = [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];

    const [searchKey, setSearchKey] = useState('')
    const [showInStock, setShowInStock] = useState(false)

    return (
        <>
            <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} showInStock={showInStock} setShowInStock={setShowInStock}></SearchBar>
            <PriceTable productData={productData} searchKey={searchKey} showInStock={showInStock}></PriceTable>
        </>
    )
}

export default SearchablePriceTable