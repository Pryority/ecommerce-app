import { useQuery } from '@tanstack/react-query';
// import Navbar from "../components/Navbar";
// import ProductGrid from "../components/ProductGrid";
// import Skeleton from "../components/Skeleton";
import Head from 'next/head';

export default function Home() {
  const getAllCategories = async() => {
    try {
      const responseJSON = await fetch('/api/categories');
      const response = await responseJSON.json();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const [isLoading, data] = useQuery(
    ['AllCategoriesWithProducts'],
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
      <main className='container mx-auto bg-blue-200'>
        {/* <Navbar /> */}
        {isLoading ? (
          <Skeleton />
        ):
        (
          <>
            {categories && categories.length > 0 && (
              <ProductGrid 
                showLink={true}
                categories={categories}
              />
            )}
          </>
        )
        }
      </main>
    </div>
  );
}
