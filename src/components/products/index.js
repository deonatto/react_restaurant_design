import React from 'react'
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImage, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton} from './productsElements'


const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index)=>(
                    <ProductCard key = {index}>
                        <ProductImage src= {product.img} alt = {product.alt}/>
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductWrapper>

            
            
        </ProductsContainer>
    )
}

export default Products;
