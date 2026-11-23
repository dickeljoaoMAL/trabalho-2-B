import {
  ImagePlaceholder,
  ImagePlaceholderText,
  ProductCardContainer,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductTitle,
} from './componentsstyle';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <ProductCardContainer onPress={onPress}>
      <ImagePlaceholder>
        <ImagePlaceholderText>imagem</ImagePlaceholderText>
      </ImagePlaceholder>

      <ProductInfo>
        <ProductTitle numberOfLines={2}>{product.title}</ProductTitle>
        <ProductPrice>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </ProductPrice>
        <ProductRating>
          ★ {product.rating.rate.toFixed(1).replace('.', ',')}
        </ProductRating>
      </ProductInfo>
    </ProductCardContainer>
  );
}
