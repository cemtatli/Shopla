const BannerItem = ({ item, id }) => {
  return (
    <div key={id} className="relative mt-5 flex h-full max-h-80 w-full items-center justify-center gap-10">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4">
        <span className="line-clamp-3 w-3/4 text-start text-2xl font-medium">{item.title}</span>
        <span className="line-clamp-2 w-3/4 text-start text-sm font-light text-gray-400">{item?.description}</span>
        <div className="flex w-3/4 items-center gap-x-6 text-start">
          <span className="line-clamp-2 text-start text-sm font-medium text-slate-800">
            <div className=" text-primary"> {item?.rating?.count}</div> kez satın alındı.
          </span>
          <span className="line-clamp-2 text-start text-sm font-medium text-slate-800">
            <div className=" text-primary"> {item?.rating?.rate}</div>
            Değerlendirme
          </span>
        </div>
      </div>
      <div className="h-80">
        <img className="flex h-72 w-full flex-1 object-contain" src={item?.image} alt={item?.title} />
      </div>
      <span className="text absolute bottom-0 flex w-full items-center justify-center bg-primary capitalize text-white">
        {item?.category}
      </span>
    </div>
  );
};

export default BannerItem;
