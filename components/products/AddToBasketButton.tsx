'use client';

import { useMemo } from 'react';

import { motion, AnimatePresence } from 'motion/react';

import { type Product } from '@/types/api.types';

import { useBasketStore } from '@/hooks/stores/useBasketStore';

import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

type AddToBasketButtonProps = {
  product: Product;
  variant?: 'default' | 'basket-page';
};

export const AddToBasketButton = ({
  product,
  variant = 'default',
}: AddToBasketButtonProps) => {
  const { items, addItem, clearAllItemsById, decrementItemById } =
    useBasketStore();

  const firstItemInBasket = useMemo(
    () => items.find((item) => item.id === product.id),
    [items, product.id],
  );

  return (
    <AnimatePresence>
      <motion.div layout className='flex w-full flex-col gap-4'>
        {/* Add to basket */}
        {variant === 'default' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            layout
          >
            <Button
              className='relative w-full'
              variant='default'
              data-testid='add-to-basket-button'
              onClick={() => addItem(product)}
            >
              Add to basket
              {firstItemInBasket && firstItemInBasket.quantity > 0 && (
                <motion.span
                  data-testid='quantity-in-basket'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  layout
                  className='absolute -right-2 -top-2 aspect-square rounded-full bg-red-500 p-2 text-xs text-white'
                >
                  {firstItemInBasket.quantity}
                </motion.span>
              )}
            </Button>
          </motion.div>
        )}

        {/* Basket Adjuster */}
        <motion.div
          className='flex w-full items-center justify-center gap-2'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          layout
        >
          {/* Decrement */}
          <Button
            className='relative'
            variant='default'
            data-testid='decrement-basket-button'
            aria-label='Decrement quantity of the current item in the basket by one'
            onClick={() => decrementItemById(product.id)}
          >
            <span className='sr-only'>decrement quantity</span>
            <Minus className='h-4 w-4' />
          </Button>

          {/* Quantity */}
          <div className='flex items-center gap-2'>
            <span
              data-testid='quantity-in-basket-basket-adjuster'
              className='text-sm font-medium text-gray-900'
            >
              {firstItemInBasket?.quantity ?? 0}
            </span>
            <span className='sr-only'>items in basket</span>
          </div>

          {/* Increment */}
          <Button
            className='relative'
            variant='default'
            data-testid='increment-basket-button'
            aria-label='Increment quatity of the current item in the basket by one'
            onClick={() => addItem(product)}
          >
            <span className='sr-only'>increment quantity</span>
            <Plus className='h-4 w-4' />
          </Button>
        </motion.div>

        {/* Clear all items */}
        {variant === 'default' &&
          firstItemInBasket &&
          firstItemInBasket.quantity > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <Button
                className='relative w-full'
                variant='default'
                data-testid='clear-basket-button'
                onClick={() => clearAllItemsById(product.id)}
              >
                Clear basket
              </Button>
            </motion.div>
          )}
      </motion.div>
    </AnimatePresence>
  );
};
