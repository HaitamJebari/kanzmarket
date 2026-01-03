import Image from 'next/image'
import kanzmarket from '../public/imgs/kanzmarket.jpg'
import Link from "next/link";
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex w-full flex-grow container mx-auto px-4 py-8 h-[80vh] max-sm:flex-col gap-[7em]'>
      <div className="flex flex-col justify-center items-center w-full h-full max-sm:pt-[20px]">
        <h1 className="md:text-[72px] max-sm:text-[3em] font-black uppercase bg-gradient-to-b from-[#FD9900] to-black bg-clip-text text-transparent">Your one-stop e-commerce destination</h1>
          <Link href="/products" className='self-start'>
            <Button className='text-lg bg-[#FD9900] w-50 h-13 mt-8'>
              Shop Now
            </Button>
          </Link>
      </div>
      <div className="flex justify-center items-center w-full h-full ">
        <Image
          className=""
          src={kanzmarket}
          alt={`Shop link`}
        />
      </div>
    </div>
  )
}
