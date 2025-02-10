'use client';

import Link from 'next/link';

import { X } from 'lucide-react';

import { AddToBasketButton } from '@/components/products/AddToBasketButton';
import { Button } from '@/components/ui/button';

import { useBasketStore } from '@/hooks/stores/useBasketStore';

export const BasketItems = () => {
  const { items, clearAllItemsById } = useBasketStore();

  if (!items.length) {
    return (
      <div className='text-center'>
        <p className='text-sm text-gray-500'>Your basket is empty</p>
      </div>
    );
  }

  return (
    <>
      {items.map((product) => {
        return (
          <li key={product.id} className='flex py-6 sm:py-10'>
            <div className='shrink-0'>
              <img
                alt={product.title}
                src={product.featuredImage.url}
                className='size-24 rounded-md object-cover sm:size-48'
              />
            </div>

            <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
              <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                <div>
                  <div className='flex justify-between'>
                    <h3 className='text-sm'>
                      <Link
                        href={`/product/${product.id.split('/').pop()}`}
                        className='font-medium text-gray-700 hover:text-gray-800'
                      >
                        {product.title}
                      </Link>
                    </h3>
                  </div>
                  <p className='mt-1 text-sm font-medium text-gray-900'>
                    {product.variants.edges[0].node.price.amount}
                  </p>
                </div>

                <div className='mt-4 sm:mt-0 sm:pr-9'>
                  <AddToBasketButton product={product} variant='basket-page' />

                  <div className='absolute right-0 top-0'>
                    <Button
                      type='button'
                      variant='ghost'
                      onClick={() => {
                        clearAllItemsById(product.id);
                      }}
                      className='-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>Remove</span>
                      <X aria-hidden='true' className='size-5' />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};
