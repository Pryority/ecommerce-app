import Head from 'next/head';


export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center'>
      <Head>
        <meta name="description" content="All Products" />
        <div className='flex flex-col w-full items-center justify-center p-4'>
          <div className='py-2 px-5 bg-green-600 rounded text-white'>All Products</div>
        </div>
      </Head>
      <main className='container mx-auto bg-blue-200'>
        <h1 className='h1'>hello</h1>
      </main>
    </div>
  );
}
