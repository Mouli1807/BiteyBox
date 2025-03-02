

const ItemList = ({items}) => {
  return (
    <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left " >

            
                <div className="pb-2">
                    <span className="text-xl ">{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.deafultPrice / 100 }</span>
                </div>
                <p className="text-sm  ">{item.card.info.description}</p>
            </div>
        ))}
    </div>
  );
}
export default ItemList;