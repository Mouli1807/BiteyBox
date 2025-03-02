import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    console.log(data);
    return (
    <div >
        {/* header */}
        <div className=" w-full  bg-gray-70 shadow-lg p-4  mx-auto cursor-pointer ">
            <div className=" flex justify-between">
            <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-xl transition-transform duration-300">⬇️</span>
            </div>
             {/* accordian body */}    
          <ItemList items={data.itemCards} />
      
        </div>
         
      
    </div>
    );
};

export default RestaurantCategory;