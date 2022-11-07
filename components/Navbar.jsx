import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const menus = [
    { tabName: 'CREATE PROPOSAL', pageName: '/create-proposal' },
    { tabName: 'ACTIVE PROPOSALS', pageName: '/proposals' },
    { tabName: 'VOTE', pageName: '/SelectId' },
    { tabName: 'IDENTITY', pageName: '/' },
  ];
  const pathname  = useRouter();
  return(
    <div className="relative p-3 w-full flex flex-col">
      <div className='grid grid-cols-2 w-full items-center justify-center p-4'>
        {menus.map((tab)=>(
          <Link href={tab.pageName} key={tab.tabName}>
            <div className='flex justify-center items-center'>
              <h2
                className={`font-semibold px-4 py-1 items-center cursor-pointer ${tab.tabName != 'IDENTITY' && 'hover:bg-gradient-to-b hover:from-yellow-400  hover:bg-[length:50%_2px] hover:bg-no-repeat hover:bg-bottom'}  ${tab.tabName === 'IDENTITY' && 'bg-yellow-600  text-white border border-[#1e1e1e]/50 hover:bg-yellow-400 hover:scale-105 transition ease-in-and-out duration-100 hover:text-zinc-900 rounded-full'} ${pathname === tab.pageName && tab.tabName != 'IDENTITY' ? 'justify-center flex text-center bg-gradient-to-b from-black/80 bg-[length:50%_2px] bg-no-repeat bg-bottom' : 'justify-center flex text-center '} `}
              >
                {tab.tabName}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;