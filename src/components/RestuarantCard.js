

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
        <div className="border border-[#492e6b] shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px] p-[10px] m-[10px] w-[300px] h-[480px] bg-[#ded3ed] rounded-[10px] transition-transform duration-300 ease
        hover:cursor-pointer hover:scale-105 hover:-translate-y-[5px] hover:shadow-[rgba(206,199,214,0.45)_0px_75px_150px_-20px,rgba(0,0,0,0.5)_0px_45px_90px_-30px]">
            <img className="h-[200px] w-[300px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
            <h3 className="text-[25px] text-[#492e6b]" >{name}</h3>
            <h4 className="text-[20px]">{cuisines.join(', ')}</h4>
            <h4 >{deliveryTime} Mins</h4>
            <h4 >{avgRating} Stars</h4>
        </div>
    );
};
    export const withOpenResLabel = (RestuarantCard) => {
        return(props) => {
            return(
                <div >
                    <label className="absolute bg-[#492e6b] text-white w-[5%] h-[2%]">Open Now</label>
                    <RestuarantCard {...props} />
                </div>
            );
        };
    };




export default RestuarantCard;