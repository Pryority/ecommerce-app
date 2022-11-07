import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
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
      <main className='flex flex-col min-h-screen mx-auto'>
        {isLoading ? (
          <>
            {/* <Skeleton /> */}
            <h1 className='text-4xl'>{isLoading}</h1>
          </>
        ):
          (
            <div className='grid grid-cols-8 w-full'>
              <div className='col-span-3 flex flex-col w-full'>
                <CategoryPanel categories={categories}/>
              </div>
              <div className='flex flex-col w-full'>
                <h1>test</h1>
              </div>
            </div>
          )
        }
      </main>
    </div>
  );
}
