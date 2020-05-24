import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductListPage.css'

const products = ['car', 'bike', 'motocicle'];

const ProductListPage = () => {
    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return (
        <div className="products">
            <h5>Lista Produktów</h5>
            <div>
                <ul>
                    {list}
                </ul>
            </div>

        </div>
    );
}

export default ProductListPage;