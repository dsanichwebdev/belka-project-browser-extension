import React from "react";
import ProductCard from "./ProductCard";
import fakeProducts from "../fakeProducts";
import { Flex, Heading } from "@radix-ui/themes";
import { styled } from "@stitches/react";

const StyledHeading = styled(Heading, {
  marginLeft: '10px',
  color: '#ffbf00',
  fontSize: '16px',
  fontWeight: 'bold',
});

const ProductDetailsWidget = () => {
  return (
    <div style={{boxShadow: "0 2px 16px rgba(0, 0, 0, .08)"}}className="bg-white rounded-lg w-full mt-3 max-h-80 pt-1">
      <Flex className="mx-3 my-3 p-2 shadow-md rounded-lg" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={`chrome-extension://${chrome.runtime.id}/icons/icon48.png`}
          alt="Logo" 
          className="object-cover rounded-full shadow-lg"
          style={{position: 'relative', width: '40px', height: '40px' }}
        />
        <StyledHeading>BelkaScope</StyledHeading>
      </Flex>
      <div className="flex overflow-auto flex-col bg-white w-full px-3 pb-3 max-h-60 rounded-lg">
        {fakeProducts.map(product => (
          <ProductCard key={product.id} prices={product.prices} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  )
}

export default ProductDetailsWidget;