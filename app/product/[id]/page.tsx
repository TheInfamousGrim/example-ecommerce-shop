import { notFound } from 'next/navigation';

import { cn } from '@/lib/utils';

import { type Product, type SingleProductResponse } from '@/types/api.types';

import { AddToBasketButton } from '@/components/products/AddToBasketButton';

async function getProduct(id: string) {
  const request = await fetch(
    `https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${id}%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}%20image%20{id%20url%20altText%20height%20width}}}}}}`,
  );
  const response: SingleProductResponse = await request.json();

  if (!response?.data?.product?.id) notFound();

  return response;
}

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: productId } = await params;

  const productData = await getProduct(productId);

  const product = productData.data.product;

  return (
    <main className='mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8'>
      <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8'>
        <div className='lg:col-span-5 lg:col-start-8'>
          <div className='flex justify-between'>
            <h1 className='text-xl font-medium text-gray-900'>
              {product?.title}
            </h1>
            <p className='text-xl font-medium text-gray-900'>
              CAD ${product.variants.edges[0].node.price.amount}
            </p>
          </div>
        </div>

        {/* Image gallery */}
        <div className='mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0'>
          <h2 className='sr-only'>Images</h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8'>
            <img
              src={product.featuredImage.url}
              alt={`${product.title} featured`}
              className={cn('rounded-lg lg:col-span-2 lg:row-span-2')}
            />
          </div>
        </div>

        <div className='mt-8 lg:col-span-5'>
          <AddToBasketButton product={product} />

          {/* Product details */}
          <div className='mt-10'>
            <h2 className='text-sm font-medium text-gray-900'>Description</h2>

            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className='mt-4 space-y-4 text-sm/6 text-gray-500'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
