const RestoCard = (props) => {
  const { name, costForTwo, avgRatingString, cuisines, cloudinaryImageId } =
    props.restro.info;
  return (
    <div className="restro-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="restro-card-details">
        <h2>{name}</h2>
        <p>{costForTwo}</p>
        <p>{cuisines}</p>
        <p>{avgRatingString}</p>
      </div>
    </div>
  );
};

export default RestoCard;
