const ThreeColumn = ({ component, array }) => {
  return (
    <section className='my-10 mx-8 md:mx-16 lg:mx-32 xl:mx-52 flex flex-col md:flex-row gap-4'>
      {array?.map((index) => (
        <div className='w-full md:w-1/3'>
          {component}
        </div>
      ))}
    </section>
  );
};

ThreeColumn.propTypes = {
  
}

export default ThreeColumn;