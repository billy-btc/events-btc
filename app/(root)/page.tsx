import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bf-contain py-5 md:py-10'>
          <div className='wrapper grid grid-cols-1 gap-5  md:grid-cols-2 2xl:gap-0'>
              <div className='felx flex-col justify-center gap-8'>
                  <h1 className='h1-bold'> Host, Connect, Celebrate: Your Events, with BTC Events </h1>
                  <p className='p-regular-20 md:p-regualr-24'> Book and learn helpful tips from 400+ mentors in the world class companies with our global community </p>
              <Button size='lg' asChild className='button w-full sm:fit'>
                  <Link href='#events'>Explore now</Link>
              </Button>
              </div>

              <Image
                  alt='hero imgaes'
                  src='/assets/images/hero.png'
                  width={1000}
                  height={1000}
                  className='max-h-[70vh object-contain object-center 2xl:max-h-[50vh]'
              />
          </div>
      </section>
        <section id='events' className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
            <h2 className='h2-bold'> Trusted by <br/> hundreds of events </h2>
            <div className='flex w-full flex-col gap-5 md:flex-row' >

            </div>
        </section>

    </>
  );
}
