'use client';

import { Button } from '@/components/ui/button';
import { BasketItems } from '@/components/basket/BasketItems';

import { useBasketStore } from '@/hooks/stores/useBasketStore';

export default function Basket() {
  const { totalPrice } = useBasketStore();

  return (
    <main className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        Shopping Cart
      </h1>

      <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
        <section aria-labelledby='cart-heading' className='lg:col-span-7'>
          <h2 id='cart-heading' className='sr-only'>
            Items in your shopping cart
          </h2>

          <ul
            role='list'
            className='divide-y divide-gray-200 border-b border-t border-gray-200'
          >
            <BasketItems />
          </ul>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby='summary-heading'
          className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
        >
          <h2
            id='summary-heading'
            className='text-lg font-medium text-gray-900'
          >
            Order summary
          </h2>

          <dl className='mt-6 space-y-4'>
            <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
              <dt className='text-base font-medium text-gray-900'>
                Order total
              </dt>
              <dd className='text-base font-medium text-gray-900'>
                CAD ${totalPrice.toFixed(2)}
              </dd>
            </div>
          </dl>

          <div className='mt-6'>
            <Button
              type='button'
              className='w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm transition-colors ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
            >
              Checkout
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
