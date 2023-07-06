import React from 'react';
import Image from 'next/image';
import {banner} from '@/assets/indice';

export function Banner() {
  return (
    <section className="mt-[78px] md:mt-[95px] h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden w-full relative">
        <Image className='  opacity-[0.80] z-[-50]'
            src={banner}
            alt="Imagen de fondo"
            layout="fill"
            objectFit="cover"
            objectPosition='bottom'
        />        

        <div className=" px-4 py-5 sm:p-8 md:py-20 flex w-[100%]">
            <div className="mx-auto w-full sm:w-[90%] md:w-[100%] text-center">
                <h1 className=" text-slate-800 from-secondary-100 via-blue-500 to-purple-600 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-extrabold">
                Welcome to

                    <span className=" text-secondary-200"> {`Rafa's Tours`} </span>
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-2xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                    tenetur fuga ducimus numquam ea!
                </p>

                <div className=" mt-8 mx-12 md:mx-1 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary-300 hover:bg-secondary-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Learn more
                    </a>  
                </div>
            </div>
        </div>

            <div className=' absolute bottom-[-2px] h-[70px] left-0 w-full overflow-hidden leading-[10px]'>
                <svg className='h-[100%] w-[150%] sm:w-[100%] md:w-[100%] ' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill='#fff' d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

    </section>

  )
}
