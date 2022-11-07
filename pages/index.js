import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Navbar from '../components/Navbar';
// import ProductGrid from '../components/ProductGrid';
import CategoryPanel from '../components/CategoryPanel';

export default function Home() {
  const getAllCategories = async () => {
    try {
      // fetching the data from the /api/categories
      const response = await fetch('/api/categories');
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      throw error;
    }
  };

  // We are using useQuery to cache this data with the key AllCategoriesWithProducts
  const { isLoading, data } = useQuery(
    ['AllCategoreiesWithProducts'],
    getAllCategories
  );

  const categories = data?.categories;

  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center bg-gradient-to-b from-transparent to-green-100/10'>
      <Head>
        <meta name="description" content="All Products" />
        <Navbar/>
      </Head>
      <main className='flex flex-col min-h-screen w-full'>
        {isLoading ? (
          <>
            {/* <Skeleton /> */}
            <h1 className='text-4xl'>{isLoading}</h1>
          </>
        ):
          (
            <div className='grid grid-cols-8 w-full h-full'>
              <section className='col-span-3 flex flex-col h-full w-full'>
                <CategoryPanel categories={categories}/>
              </section>
              {/* PRODUCTS PANEL */}
              <section className='flex flex-col col-span-5 w-full h-full p-4'>
                <div className='flex flex-col w-full min-h-screen relative'>
                  <div className='flex flex-col p-2 w-full h-full absolute items-center bg-green-600/10 border-2 border-green-700/20'>
                    <div className='grid grid-cols-2 justify-center items-center w-full'>
                      <div className='flex p-2 justify-center'>
                        <div className='flex flex-col h-64 w-64 bg-black/20 relative rounded'>
                          <div className='absolute bottom-2 left-2 flex flex-col space-y-2'>
                            <h3 className='text-[18px] font-light uppercase'>Title</h3>
                            <p>Price</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex p-2 justify-center'>
                        <div className='flex flex-col h-64 w-64 bg-black/20 relative rounded'>
                          <div className='absolute bottom-2 left-2 flex flex-col space-y-2'>
                            <h3 className='text-[18px] font-light uppercase'>Title</h3>
                            <p>Price</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )
        }
      </main>
    </div>
  );
}
