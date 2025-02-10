import Link from 'next/link';

import { type Product } from '@/types/api.types';

export const ProductLink = ({ product }: { product: Product }) => {
  return (
    <Link
      key={`trending-product-${product.id}`}
      className='group relative'
      href={`/product/${product.id.split('/').pop()}`}
      prefetch={true}
    >
      <div className='h-56 w-full overflow-hidden rounded-md transition-all ease-in group-hover:opacity-75 lg:h-72 xl:h-80'>
        <img
          alt={product.title}
          src={product.featuredImage.url}
          className='size-full object-cover transition-all ease-in group-hover:scale-105'
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-700'>
        <span className='absolute inset-0' />
        {product.title}
      </h3>
      <p className='mt-1 text-sm font-medium text-gray-900'>
        CAD ${product.variants.edges[0].node.price.amount}
      </p>
    </Link>
  );
};
