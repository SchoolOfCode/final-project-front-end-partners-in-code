import Logo from "../Global/Logo/Logo.js"
import H1 from "../Global/H1/H1.js"
import Button from "../Global/Button/Button.js"
import ListItem from "../ListItem/ListItem.js"
 
export default function ItemsDisplay() {
  return (
    <div>
        <div>
           <Logo/> 
        </div>
        <div>
           <H1 text="Browse..."/> 
        </div>
        <div>
           <ListItem/> 
        </div> 
        <div>
           <Button text="+"/> 
        </div>
    </div>
  )
}
