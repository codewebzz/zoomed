// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from './Productitem';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeProduct } from '../redux/features/product/productSlice';
import { useGetHomeProductQuery } from '../redux/api/product';

const RelatedProduct = ({ category, subCategory }) => {
   
    const dishpatch = useDispatch();

    const { homeProducts } = useSelector(store => store.products);

    const { data } = useGetHomeProductQuery();


    useEffect(() => {
        if (data) {
            dishpatch(setHomeProduct(data))
        }
    }, [data, dishpatch]);
    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2 '>
                <Title text1="RELATED" text2="PRODUCTS" />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    homeProducts.map((item) => (
                        <>
                            <ProductItem key={item._id} id={item._id} image={item.images[0].path} name={item.fishName} category={item.category} price={item.price} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProduct