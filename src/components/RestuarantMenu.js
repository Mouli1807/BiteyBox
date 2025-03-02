import { useParams } from "react-router";
import {useRestuarantMenu} from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestuarantCategory";
import Shimmer from "./shimmerUI";


const RestuarantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestuarantMenu(resId);

    if (resInfo === null) return <Shimmer/>;

    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    
    console.log(itemCards);

    const categories = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);
  
    return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        {categories.length > 0 ? (
                categories.map((category, index) => (
                    <RestaurantCategory data={category?.card?.card} />
                ))
            ) : (
                <p>No categories found.</p> // 🔴 Will show if categories are empty
            )}
            

        
        
    </div>
 

  );
};

export default RestuarantMenu;