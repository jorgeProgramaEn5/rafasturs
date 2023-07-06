import {   LiaCocktailSolid, LiaHikingSolid } from 'react-icons/lia';


export function Tours() {
  return (
    <section className='w-full bg-primary-200 p-8'>
        <div className=' container mx-auto grid grid-cols-2'>
            <div>
                {/* <ul className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
                    <li className="mb-10 ml-6">            
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                            <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">1</h3>
                        <p className="text-sm">Step details here</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">2</h3>
                        <p className="text-sm">Step details here</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">3</h3>
                        <p className="text-sm">Step details here</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">4</h3>
                        <p className="text-sm">Step details here</p>
                    </li>
                </ul> */}
                <ul>

                    <li>
                        <div className='flex flex-col justify-center items-center border'>
                            <div className=' bg-white rounded-full p-1 w-[50px] sm:w-[40px] md:w-[50px]'>
                                <LiaHikingSolid className='w-[100%] h-[100%]' />
                            </div>
                            <h4 className=' hidden'>
                                caminatas
                            </h4>
                            <div className='my-2 h-[50px] w-[1px] bg-black'></div>
                        </div>
                    </li>

                    <li>
                        <div className='flex flex-col justify-center items-center border'>
                            <div className=' bg-white rounded-full p-1 w-[50px] sm:w-[40px] md:w-[50px]'>
                                <LiaHikingSolid className='w-[100%] h-[100%]' />
                            </div>
                            <h4 className=' hidden'>
                                caminatas
                            </h4>
                        </div>
                    </li>

                </ul>
            </div>
            
            <div>
                <div className=" px-2 sm:p-3  flex w-[100%] border">
                <div className="mx-auto w-full sm:w-[90%] md:w-[100%] text-center">
                    <h1 className=" text-slate-800 from-secondary-100 via-blue-500 to-purple-600 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-extrabold">
                    Welcome to

                        <span className=" text-secondary-200"> {`Rafa's Tours`} </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-[10px] ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className=" mt-8 mx-12 md:mx-1 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary-300 hover:bg-secondary-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Learn more
                        </a>   */}
                    </div>
                </div>
            </div>
            </div>


        </div>
    </section>
  )
}
