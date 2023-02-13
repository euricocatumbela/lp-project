import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import { products } from '../banner/Banner.types';

type Props ={
    product:products
  
}


const Product:React.FC<Props> = ({ product}) => {
    const { image, name, slug, price } = product
    
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0 as number]).url()}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product