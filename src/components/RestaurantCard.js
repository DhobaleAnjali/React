const RestaurantCard = (props) => {
  const {
    name,
    costForTwo,
    avgRatingString,
    cuisines,
    cloudinaryImageId,
    sla,
    aggregatedDiscountInfoV3,
  } = props.restro.info;
  console.log(props.restro.info);
  return (
    <div className="flex flex-col w-full p-3 hover:shadow-2xl rounded-2xl">
      <div className="h-64 relative">
        <img
          className="rounded-2xl w-full max-h-full object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <label className="bg-blue-500 text-white absolute bottom-4 px-1 text-sm">
          {aggregatedDiscountInfoV3?.header}
        </label>
      </div>
      <div className="p-2">
        <div className="flex justify-between">
          <h2>{name}</h2>
          <div className="flex rounded-md bg-green-700 justify-center items-center w-fit px-1 gap-1">
            <p className="text-sm text-white">{avgRatingString} </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              width="0.6rem"
              height="0.6rem"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 fauQLv"
            >
              <title>star-fill</title>
              <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 w-1/2 truncate">{cuisines.join(", ")}</p>
          <p className="text-gray-500">{costForTwo}</p>
        </div>
        <div className="flex justify-between flex-row-reverse">
          <p className="text-sm">{sla.slaString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
