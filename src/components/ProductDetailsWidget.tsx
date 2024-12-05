import React from "react";
import ProductCard from "./ProductCard";
import data from "../products.mock";
import { Flex, Heading } from "@radix-ui/themes";
import { styled } from "@stitches/react";

interface Product {
  id: string | number;
  name: string;
  image: string;
  prices: {
    subscribers: number;
    everyone: number;
    old: number;
  };
}

interface ProductDetailsWidgetProps {
  view?: "grid" | "default";
}

const StyledHeading = styled(Heading, {
  marginLeft: '10px',
  color: '#ffbf00',
  fontSize: '16px',
  fontWeight: 'bold',
});

const WidgetContainer = styled('div', {
  boxShadow: '0 2px 16px rgba(0, 0, 0, .08)',
  backgroundColor: 'white',
  borderRadius: '8px',
  width: '100%',
  marginTop: '12px',
  paddingTop: '4px',
  maxHeight: '20rem',
  variants: {
    view: {
      grid: {
        maxHeight: '24rem',
      },
      default: {
        maxHeight: '20rem',
      }
    },
  },
});

const HeaderFlex = styled(Flex, {
  display: 'flex',
  alignItems: 'center',
  margin: '0 12px',
  padding: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, .1)',
  borderRadius: '8px',
});

const LogoImage = styled('img', {
  objectFit: 'cover',
  borderRadius: '9999px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, .1)',
  position: 'relative',
  width: '40px',
  height: '40px',
});

const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  width: '100%',
  padding: '12px 12px 12px 12px',
  maxHeight: '15rem',
  borderRadius: '8px',
  overflow: 'auto',
  variants: {
    view: {
      grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      },
      default: {
        display: 'flex',
        flexDirection: 'column',
      }
    },
  },
});

const ProductDetailsWidget: React.FC<ProductDetailsWidgetProps> = ({ view = "default" }) => {
  return (
    <WidgetContainer view={view}>
      <HeaderFlex>
        <LogoImage
          src={`chrome-extension://${chrome.runtime.id}/icons/icon48.png`}
          alt="Logo"
        />
        <StyledHeading>BelkaScope</StyledHeading>
      </HeaderFlex>
      <ProductsContainer view={view}>
        {data.map((product: Product) => (
          <ProductCard
            key={String(product.id)}
            view={view}
            prices={product.prices}
            name={product.name}
            image={product.image}
          />
        ))}
      </ProductsContainer>
    </WidgetContainer>
  );
}

export default ProductDetailsWidget;
