import './Table.css';

function Table({ cart, goodsObj }) {

    let totalSum = 0;
    Object.keys(cart).forEach(item => totalSum += goodsObj[item]['cost'] * cart[item]);

    if (Object.keys(cart).length == 0) {
        return null
    } else {
        return (
            <div className='container'>
                < table className='table' >
                    <caption>Cart</caption>
                    <tbody>
                        <tr><th>Image</th><th>Title</th><th>Cost</th><th>Count</th> <th>Total</th><th></th></tr>
                        {Object.keys(cart).map(item =>
                            <tr key={goodsObj[item]['articul']}>
                                <td><img src={goodsObj[item]['image']} alt="" /></td>
                                <td>{goodsObj[item]['title']}</td>
                                <td>{goodsObj[item]['cost']}</td>
                                <td>
                                    <button className='minus' data-key={goodsObj[item]['articul']}>-</button>{cart[item]}
                                    <button className='add' data-key={goodsObj[item]['articul']}>+</button>
                                </td>
                                <td>{cart[item] * goodsObj[item]['cost']}</td>
                                <td><button className='remove' data-key={goodsObj[item]['articul']}>X</button></td>
                            </tr>)}
                    </tbody>
                </table >
                <div className="totalSum">
                    Total order price: {totalSum}
                </div>
            </div >
        )
    }
}

export default Table;