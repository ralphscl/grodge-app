const ThreeColumn = ({ component, dataObj }) => {
  return (
    <section className='mt-20 mb-10 flex flex-col md:flex-row gap-6'>
      {dataObj?.map((index) => (
        <div key={index} className='w-full md:w-1/3'>
          {component}
        </div>
      ))}
    </section>
  );
};

ThreeColumn.propTypes = {
  
}

export default ThreeColumn;