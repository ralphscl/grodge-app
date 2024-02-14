const ThreeColumn = ({ component, array }) => {
  return (
    <section className='my-10 flex flex-col md:flex-row gap-6'>
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