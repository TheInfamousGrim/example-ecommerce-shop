import { ProductLink } from '@/components/products/ProductLink';
import { MultipleProductsResponse } from '@/types/api.types';

const collections = [
  {
    name: "Women's",
    href: '#',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-04-collection-01.jpg',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  {
    name: "Men's",
    href: '#',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-04-collection-02.jpg',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Desk Accessories',
    href: '#',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-04-collection-03.jpg',
    imageAlt:
      'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
];

const perks = [
  {
    name: 'Free returns',
    imageUrl:
      'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl:
      'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl:
      'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg',
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl:
      'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-planet-light.svg',
    description:
      'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
];

export default async function Home() {
  let multipleProducts: MultipleProductsResponse = {
    data: {
      products: {
        edges: [],
      },
    },
  };

  try {
    const request = await fetch(
      'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}',
    );
    const response: MultipleProductsResponse = await request.json();

    multipleProducts = response;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className='bg-white'>
      <main>
        {/* Hero section */}
        <div className='relative'>
          {/* Background image and overlap */}
          <div
            aria-hidden='true'
            className='absolute inset-0 hidden sm:flex sm:flex-col'
          >
            <div className='relative w-full flex-1 bg-gray-800'>
              <div className='absolute inset-0 overflow-hidden'>
                <img
                  alt=''
                  src='https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-04-hero-full-width.jpg'
                  className='size-full object-cover'
                />
              </div>
              <div className='absolute inset-0 bg-gray-900 opacity-50' />
            </div>
            <div className='h-32 w-full bg-white md:h-40 lg:h-48' />
          </div>

          <div className='relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8'>
            {/* Background image and overlap */}
            <div
              aria-hidden='true'
              className='absolute inset-0 flex flex-col sm:hidden'
            >
              <div className='relative w-full flex-1 bg-gray-800'>
                <div className='absolute inset-0 overflow-hidden'>
                  <img
                    alt=''
                    src='https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-04-hero-full-width.jpg'
                    className='size-full object-cover'
                  />
                </div>
                <div className='absolute inset-0 bg-gray-900 opacity-50' />
              </div>
              <div className='h-48 w-full bg-white' />
            </div>
            <div className='relative py-32'>
              <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>
                Mid-Season Sale
              </h1>
              <div className='mt-4 sm:mt-6'>
                <a
                  href='#'
                  className='inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700'
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>

          <section
            aria-labelledby='collection-heading'
            className='relative -mt-96 sm:mt-0'
          >
            <h2 id='collection-heading' className='sr-only'>
              Collections
            </h2>
            <div className='mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8'>
              {collections.map((collection) => (
                <div
                  key={collection.name}
                  className='group relative h-96 rounded-lg bg-white shadow-xl transition-all ease-in sm:aspect-[4/5] sm:h-auto'
                >
                  <div
                    aria-hidden='true'
                    className='absolute inset-0 overflow-hidden rounded-lg'
                  >
                    <div className='absolute inset-0 overflow-hidden transition-all ease-in group-hover:opacity-75'>
                      <img
                        alt={collection.imageAlt}
                        src={collection.imageSrc}
                        className='size-full object-cover transition-all ease-in group-hover:scale-105'
                      />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50' />
                  </div>
                  <div className='absolute inset-0 flex items-end rounded-lg p-6'>
                    <div>
                      <p aria-hidden='true' className='text-sm text-white'>
                        Shop the collection
                      </p>
                      <h3 className='mt-1 font-semibold text-white'>
                        <a href={collection.href}>
                          <span className='absolute inset-0' />
                          {collection.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section aria-labelledby='trending-heading'>
          <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32'>
            <div className='md:flex md:items-center md:justify-between'>
              <h2
                id='favorites-heading'
                className='text-2xl font-bold tracking-tight text-gray-900'
              >
                Trending Products
              </h2>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'>
              {multipleProducts.data.products.edges.map((product) => (
                <ProductLink
                  key={`trending-product-${product.node.id}`}
                  product={product.node}
                />
              ))}
            </div>

            <div className='mt-8 text-sm md:hidden'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Shop the collection
                <span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <section
          aria-labelledby='perks-heading'
          className='border-t border-gray-200 bg-gray-50'
        >
          <h2 id='perks-heading' className='sr-only'>
            Our perks
          </h2>

          <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0'>
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
                >
                  <div className='md:shrink-0'>
                    <div className='flow-root'>
                      <img
                        alt=''
                        src={perk.imageUrl}
                        className='-my-1 mx-auto h-24 w-auto'
                      />
                    </div>
                  </div>
                  <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                    <h3 className='text-base font-medium text-gray-900'>
                      {perk.name}
                    </h3>
                    <p className='mt-3 text-sm text-gray-500'>
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
