import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

const PriceTable = (props: any) => {

    var rows: any = [];
    var lastCategory: any = null;
    props.productData.forEach((product: any) => {
        if (product.category !== lastCategory) {
            rows.push(<CategoryRow key={product.category} category={product.category} />)
        }
        if (product.name.toLowerCase().includes(props.searchKey.toLowerCase())) {
            let e = (props.showInStock && !product.stocked) ? null : <ProductRow key={product.category + '-' + product.name} product={product}></ProductRow>
            rows.push(e)
        }
        lastCategory = product.category
    })


    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default PriceTable