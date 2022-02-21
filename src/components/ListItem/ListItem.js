import Item from "../Item/Item.js" 

export default function ListItem({items}) {
  return (
    <div>
    {items.map(function (item){
        return <Item key={id} img= {img} alt={alt} title={title} location={location}></Item>
    })}
    </div>
  )
}
