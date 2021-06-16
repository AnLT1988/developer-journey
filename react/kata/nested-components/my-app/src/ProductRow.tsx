const ProductRow = (props: any) => {
    const product = props.product
    return (
        <tr>
            <td>{product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow