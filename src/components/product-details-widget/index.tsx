import React from "react";
import { ProductCard } from "@components/product-card";
import data from "../../products.mock";
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
  position: 'relative',
  boxShadow: '0 2px 16px rgba(0, 0, 0, .08)',
  backgroundColor: 'white',
  borderRadius: '8px',
  width: '100%',
  marginTop: '12px',
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
  borderRadius: '8px',
  position: 'sticky',
  width: '100%',
  top: '0',
  boxShadow: '0px 0px 15px 2px rgba(34, 60, 80, 0.1)',
  padding: '8px'
});

const LogoImage = styled('img', {
  objectFit: 'cover',
  borderRadius: '9999px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, .1)',
  position: 'relative',
  width: '40px',
  height: '40px',
  border: 'none !important',
});

const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  width: '100%',
  padding: '0 12px 12px 12px',
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

export const ProductDetailsWidget: React.FC<ProductDetailsWidgetProps> = ({ view = "default" }) => {
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
