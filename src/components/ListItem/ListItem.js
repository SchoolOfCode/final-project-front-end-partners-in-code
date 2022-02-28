import Item from '../Item/Item.js';

export default function ListItem({ items }) {
  return (
   
      < >
        {items.map(function (item) {
          return (
                <div  >
                      <Item 
                key={item.itemId}
                img={item.image.img}
                alt={item.alt}
                title={item.title}
                location={item.location}
              />
                </div>
            
             
          );
        })}
      </>
    
  );
}
