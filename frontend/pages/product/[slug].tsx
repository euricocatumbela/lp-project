import { products } from '@/src/components/banner/Banner.types'
import { client } from '@/lib/client'
import React, { useContext } from 'react'
import ProductDetails from '../../src/components/product/ProductDetails'
import { DataContext } from '@/context/StateContext'
type Props = {
    product: products
    products: products[]

}

const IndexProduct: React.FC<Props> = ({ product, products }) => {

    const {data, showCart} = useContext(DataContext)
    
    const { image, name, details, price } = product

    console.log("Context data", data + showCart);
    console.log("Product Name", name);
    console.log("Product Price", product.price);

    return (
       
       
        <ProductDetails product={product} allProducts={products} />
   
    )
}

export default IndexProduct


export async function getStaticPaths() {
    const productsQuery = `*[_type == "product"] {
        slug {
            current
        }
    }`
    const products = await client.fetch(productsQuery)


    const paths = products.map((product: any) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context: any) => {
    const { params } = context
    const { slug } = params

    const singleProductQuery = `*[_type == "product" && slug.current =='${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(singleProductQuery)
    const products = await client.fetch(productsQuery)

    return {
        props: {
            products, product
        }
    }
}