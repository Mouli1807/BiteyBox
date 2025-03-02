const RestaurantCategory = ({data}) => {
    console.log(data);
    return (
    <div>
        {/* header */}
        <div>
            <span>{data.title} ({data.itemCards.length})</span>
            
            <span>⬇️</span>
        </div>
        {/* accordian body */}
    </div>
    );
};

export default RestaurantCategory;