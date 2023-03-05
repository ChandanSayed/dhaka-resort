import { Link } from 'react-router-dom';

const SpecialOffers = () => {
  return (
    <section className="special-offers relative" style={{ backgroundImage: 'url(./images/poolview.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto text-center py-16 md:py-40 relative z-10">
        <h2 className="text-3xl md:text-5xl text-white pb-4">Discover Special Offers</h2>
        <p className="text-sm md:text-2xl text-white pb-10">Make Sure to check the special promotions</p>
        <Link className="uppercase btn bg-white border border-transparent hover:border-primary-color hover:border text-primary-color px-6 py-2 rounded-[50px] font-bold text-xs hover:opacity-90">View All Offers</Link>
      </div>
    </section>
  );
};

export default SpecialOffers;
