const Booking = () => {
  return (
    <section className="booking bg-primary-color py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl text-white text-center mb-6 md:mb-12">Reserve Your Stay</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 mt-4 md:w-auto md:mx-4">
            <select className="block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 md:ml-auto">
              <option>Packages</option>
              <option>Packages 2</option>
              <option>Packages 3</option>
            </select>
          </div>
          <div className="w-1/2 mt-4 md:w-auto md:mx-4">
            <input type="date" placeholder="date" className="block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 md:mx-auto" />
          </div>
          <div className="w-1/2 mt-4 md:w-auto md:mx-4">
            <select className="block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 md:mx-auto">
              <option>Guest</option>
              <option>Guest 2</option>
              <option>Guest 3</option>
            </select>
          </div>
          <div className="w-1/2 mt-4 md:w-auto md:mx-4">
            <button className="btn block py-2 px-3 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
