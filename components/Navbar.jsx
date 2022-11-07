import Link from 'next/link';

const Navbar = () => {
  return(
    <div className="relative p-3">
      <div className="flex items-center justify-between pt-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <h1 className="text-2xl">
            <Link href="/" className="cursor-pointer">
                Ecomm App
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;