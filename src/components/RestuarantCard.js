

const RestuarantCard = (props) => {
    const {resData} = props;

   const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
   } = resData?.info;

   const {
    deliveryTime
   } = resData?.info?.sla;

    return(
        <div className="res-content">
            <img className="res-card-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
            <h3 >{name}</h3>
            <h4 className="cuisines-text">{cuisines.join(', ')}</h4>
            <h4 >{deliveryTime} Mins</h4>
            <h4 >{avgRating} Stars</h4>
        </div>
    );
};
    export const withOpenResLabel = (RestuarantCard) => {
        return(props) => {
            return(
                <div >
                    <label className="openlabel">Open Now</label>
                    <RestuarantCard {...props} />
                </div>
            );
        };
    };




export default RestuarantCard;