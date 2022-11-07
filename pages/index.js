import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

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
    <div className='flex flex-col min-h-screen w-full items-center justify-center'>
      <Head>
        <meta name="description" content="All Products" />
        <div className='flex flex-col w-full items-center justify-center p-4'>
          <div className='py-2 px-5 bg-green-600 rounded text-white'>All Products</div>
        </div>
      </Head>
      <main className='container min-h-screen mx-auto'>
        <Navbar />
        {isLoading ? (
          <>
            {/* <Skeleton /> */}
            <h1 className='text-4xl'>{isLoading}</h1>
          </>
        ):
          (
            <div className='container min-h-screen w-full'>
              {categories ? 
                (
                  <>
                    {categories.map((category, i) => (
                      <div key={i}>
                        <h1 className='text-black'>{category.name}</h1>
                      </div>
                    ))
                    }
                  </>
                )
                :
                (
                  <div className='py-2 px-4 rounded-md text-white bg-red-600'>
                    <h1>There are no categories in the database!</h1>
                  </div>
                )
              }
            </div>
          )
        }
      </main>
    </div>
  );
}
