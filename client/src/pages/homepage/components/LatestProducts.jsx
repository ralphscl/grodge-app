import ProductCard from "../../../components/card/ProductCard";

const LatestProducts = () => {
    const headerStyle = 'text-black-custom text-2xl font-bold';
  return (
    <>
        <div className='flex flex-col md:flex-row gap-6'>
            <div className='my-10 md:w-1/4'>
                <section>
                    <h1 className={headerStyle}>Top Seller</h1>
                    {[1,2,3,4,5]?.map((index) => (
                        <div className='w-full'>
                            <ProductCard dataObj={[0,1,2]} size='sm'/>
                        </div>
                    ))}
                </section>
            </div>
            
            <div  className='my-10 md:w-3/4'>
                <h1 className={headerStyle}>Latest Products</h1>
                <section className='grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {[1,2,3,4,5,6]?.map((index) => (
                        <div className='w-full'>
                            <ProductCard dataObj={[0,1,2]} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    </>
  );
}

export default LatestProducts;