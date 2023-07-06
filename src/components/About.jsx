import React from 'react';
import { GiMountainCave, GiBinoculars, GiCongress} from 'react-icons/gi';
import {   LiaCocktailSolid, LiaCameraRetroSolid } from 'react-icons/lia';

export function About() {
  return (
    <section className=' w-full'>
      <div className=" grid grid-cols-1 md:grid-cols-3 items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">


        <div className='flex flex-col justify-center items-center pb-10'>
        
          <div className='pb-2 md:pb-4 w-[50px] sm:w-[60px] md:w-[70px] dark:text-white text-secondary-200'><GiMountainCave className='w-[100%] h-[100%]'/>
          </div>

          <p className='text-center sm:px-28 md:px-8 px-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptates dolore commodi. Commodi culpa inventore tenetur nisi vero, consequuntur quod, sit tempore, repudiandae vitae itaque illo praesentium. Natus, aliquam nulla
          </p>
        </div>

        <div className='flex flex-col justify-center items-center pb-10'>
        
          <div className='pb-2 md:pb-4 w-[50px] sm:w-[60px] md:w-[70px] dark:text-white text-secondary-200'><GiBinoculars className='w-[100%] h-[100%]'/>
          </div>

          <p className='text-center sm:px-28 md:px-8 px-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptates dolore commodi. Commodi culpa inventore tenetur nisi vero, consequuntur quod, sit tempore, repudiandae vitae itaque illo praesentium. Natus, aliquam nulla
          </p>
        </div>

        <div className='flex flex-col justify-center items-center pb-10'>
        
          <div className='pb-2 md:pb-4 w-[50px] sm:w-[60px] md:w-[70px] dark:text-white text-secondary-200'><GiCongress  className='w-[100%] h-[100%]'/>
          </div>

          <p className='text-center sm:px-28 md:px-8 px-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptates dolore commodi. Commodi culpa inventore tenetur nisi vero, consequuntur quod, sit tempore, repudiandae vitae itaque illo praesentium. Natus, aliquam nulla
          </p>
        </div>

        

      </div>
    </section>
  )
}
