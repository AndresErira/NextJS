import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () =>{
    const {query:{productId, rank,age}}= useRouter();
    return (
        <div>{
            //En este caso se recibiria una query como la siguiente
            //http://localhost:3000/product/66910?age=25&rank=50
            }
            <h1>Pagina del producto: {productId}</h1>
            <p>Rango: {rank}</p>
            <p>edad:{age}</p>
        </div>
    );
}
export default ProductItem;