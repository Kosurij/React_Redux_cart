import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { selectCart } from '../store/cartSlice';
import { minus, plus, remove } from '../store/cartSlice';
import Table from '../components/Table';

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    const clickHandler = (event) => {
        event.preventDefault();
        const t = event.target;

        if (t.classList.contains('minus')) {
            dispatch(minus(t.getAttribute('data-key')));
        }
        if (t.classList.contains('add')) {
            dispatch(plus(t.getAttribute('data-key')));
        }
        if (t.classList.contains('remove')) {
            dispatch(remove(t.getAttribute('data-key')));
        }
    }

    return (
        <div onClick={clickHandler}>
            <Table cart={cart} goodsObj={goodsObj} />
        </div>
    )
}

export default CartList;

// {Object.keys(cart).map(item => <li key={item + goodsObj[item]['title']}>{goodsObj[item]['title']} - {cart[item]}</li>)}