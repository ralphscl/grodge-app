const Logo = () => {
    return (
        <div className="w-4/12 text-center border flex justify-between border-gray-500 rounded-full">
            <input type="text" placeholder="SEARCH PRODUCT" className='w-11/12 ps-4 pe-2 rounded-full placeholder:font-thin placeholder:text-slate-400 focus:outline-none'/>
            <button className='p-2 flex justify-around items-center bg-gray-700 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    )
}

export default Logo;