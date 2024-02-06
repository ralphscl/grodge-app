const ProductManager = () => {

  return (
    <>
      <div className="sm:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="py-2 px-8 rounded-full focus:outline-none bg-accent-primary text-white rounded-full">Available</button>
          <button className="py-2 px-8 rounded-full focus:outline-none bg-accent-primary text-white rounded-full">Depleted</button>
          <button className="py-2 px-8 rounded-full focus:outline-none bg-accent-primary text-white rounded-full">Removed</button>
        </div>
      </div>

      <table className="my-4 w-full min-w-max table-auto divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          {
            [0,1,2,3,4,5,6,7,8,9].map((element) => {
              return(
                <>
                  <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Product 1</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">12345</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Electronics</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">$99.99</div>
                    </td>
                  </tr>
                  <tr className="h-2"></tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

ProductManager.propTypes = {
    
};

export default ProductManager;