'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import { Menu, CircleHelp, ShoppingBagIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useBasketStore } from '@/hooks/stores/useBasketStore';

import { cn } from '@/lib/utils';

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'];
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt:
            'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [{ name: 'Home', href: '/' }],
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { totalNumberOfItems } = useBasketStore();

  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent
          side='left'
          className='flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'
        >
          <SheetHeader>
            <SheetTitle className='sr-only'>Mobile menu</SheetTitle>
          </SheetHeader>

          {/* Links */}
          <Tabs className='mt-2'>
            <div className='border-b border-gray-200'>
              <TabsList className='-mb-px flex space-x-8 px-4'>
                {navigation.categories.map((category) => (
                  <TabsTrigger
                    key={category.name}
                    value={category.name}
                    className='flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600'
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {navigation.categories.map((category) => (
              <TabsContent
                key={category.name}
                value={category.name}
                className='space-y-12 px-4 py-6'
              >
                <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                  {category.featured.map((item) => (
                    <div key={item.name} className='group relative'>
                      <img
                        alt={item.imageAlt}
                        src={item.imageSrc}
                        className='aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75'
                      />
                      <a
                        href={item.href}
                        className='mt-6 block text-sm font-medium text-gray-900'
                      >
                        <span
                          aria-hidden='true'
                          className='absolute inset-0 z-10'
                        />
                        {item.name}
                      </a>
                      <p
                        aria-hidden='true'
                        className='mt-1 text-sm text-gray-500'
                      >
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
            {navigation.pages.map((page) => (
              <div key={page.name} className='flow-root'>
                <Link
                  href={page.href}
                  className='-m-2 block p-2 font-medium text-gray-900'
                >
                  {page.name}
                </Link>
              </div>
            ))}
          </div>

          <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
            <div className='flow-root'>
              <a href='#' className='-m-2 block p-2 font-medium text-gray-900'>
                Create an account
              </a>
            </div>
            <div className='flow-root'>
              <a href='#' className='-m-2 block p-2 font-medium text-gray-900'>
                Sign in
              </a>
            </div>
          </div>

          <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
            {/* Currency selector */}
            <form>
              <div className='-ml-2 inline-grid grid-cols-1'>
                <select
                  id='mobile-currency'
                  name='currency'
                  aria-label='Currency'
                  className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pl-2 pr-7 text-base font-medium text-gray-700 focus:outline focus:outline-2 group-hover:text-gray-800 sm:text-sm/6'
                >
                  {currencies.map((currency) => (
                    <option key={currency}>{currency}</option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden='true'
                  className='pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500'
                />
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>

      <header>
        <nav aria-label='Top'>
          <div className='bg-white'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex h-16 items-center justify-between'>
                {/* Logo (lg+) */}
                <div className='hidden lg:flex lg:flex-1 lg:items-center'></div>

                <div className='hidden h-full lg:flex'>
                  {/* Flyout menus */}
                  <NavigationMenu>
                    <NavigationMenuList className='flex h-full justify-center space-x-8'>
                      {navigation.categories.map((category) => (
                        <NavigationMenuItem
                          key={category.name}
                          className='flex'
                        >
                          <NavigationMenuTrigger className='text-sm font-medium text-gray-700'>
                            {category.name}
                          </NavigationMenuTrigger>

                          <NavigationMenuContent>
                            <div className='lg:-[720px] w-[320px] bg-white px-4 text-sm text-gray-500 sm:px-6 md:w-[640px] lg:px-8'>
                              <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className='group relative'
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className='aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75'
                                    />
                                    <a
                                      href={item.href}
                                      className='mt-4 block font-medium text-gray-900'
                                    >
                                      <span
                                        aria-hidden='true'
                                        className='absolute inset-0 z-10'
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden='true' className='mt-1'>
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      ))}

                      {/* page navigation */}
                      {navigation.pages.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          className={cn(
                            'block p-2 font-medium text-gray-900',
                            page.href === pathname ? 'text-indigo-600' : '',
                          )}
                        >
                          {page.name}
                        </Link>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className='flex flex-1 items-center lg:hidden'>
                  <Button
                    variant='ghost'
                    data-testid='mobile-main-menu-button'
                    onClick={() => {
                      setMobileMenuOpen(true);
                    }}
                    className='-ml-2 rounded-md bg-white p-2 text-gray-400'
                  >
                    <span className='sr-only'>Open menu</span>
                    <Menu aria-hidden='true' className='size-6' />
                  </Button>
                </div>

                <div className='flex flex-1 items-center justify-end'>
                  <a
                    href='#'
                    className='hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block'
                  >
                    Search
                  </a>

                  <div className='flex items-center lg:ml-8'>
                    {/* Help */}
                    <a
                      href='#'
                      className='p-2 text-gray-400 hover:text-gray-500 lg:hidden'
                    >
                      <span className='sr-only'>Help</span>
                      <CircleHelp aria-hidden='true' className='size-6' />
                    </a>
                    <a
                      href='#'
                      className='hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block'
                    >
                      Help
                    </a>

                    {/* Cart */}
                    <div className='ml-4 flow-root lg:ml-8'>
                      <a href='#' className='group -m-2 flex items-center p-2'>
                        <ShoppingBagIcon
                          aria-hidden='true'
                          className='size-6 shrink-0 text-gray-400 group-hover:text-gray-500'
                        />
                        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                          {totalNumberOfItems}
                        </span>
                        <span className='sr-only'>items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
