import ProductCard from "../../../components/card/ProductCard";

const LatestProducts = () => {
  return (
    <>
        <h1 className='text-black-custom text-2xl font-bold'>Latest Posts</h1>
        <div className="flex flex-row gap-6">
            <section className="my-10 w-1/4">
                {[1,2,3,4,5,6]?.map((index) => (
                    <div className='w-full'>
                        <ProductCard size='sm'/>
                    </div>
                ))}
            </section>
            
            <section className='my-10 grid grid-cols-3 gap-6 w-3/4'>
                {[1,2,3,4,5,6]?.map((index) => (
                    <div className='w-full'>
                        <ProductCard />
                    </div>
                ))}
            </section>
        </div>
    </>
  );
}

export default LatestProducts;