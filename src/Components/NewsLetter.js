const NewsLetter = () => {
  return (
    <div className="newsletter mt-4">
      <form action="/" className="relative" method="POST">
        <input type="email" placeholder="Your Email Address" className="rounded-[20px] bg-white p-2 w-full pr-[84.36px]" />
        <input type="button" className="btn rounded-[20px] text-white bg-primary-color absolute right-1 top-1 p-1 px-2 cursor-pointer hover:opacity-90" value="Subscribe" />
      </form>
    </div>
  );
};

export default NewsLetter;
