import Item from '../Item/Item.js';



export default function ListItem({ items }) {

  return (
    <div className='container'>
      {items.map(function (item) {
        return (
        
            <div className='responsive-container'> <Item
            key={item.itemId}
            img={item.image.img}
            alt={item.image.alt}
            title={item.title}
            location={item.location}
          /></div>
         
         
        );
      })}
    </div>
  );
}
