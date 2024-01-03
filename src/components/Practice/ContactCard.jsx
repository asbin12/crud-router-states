import { FaTrashAlt } from "react-icons/fa";

const ContactCard = ({item}) => {
  return (
    <>
      
    <div className="contacts">
        <ul>
          <li><img src="./images/user.png" className="user__img__list"/></li>
        <li>{item.name}</li>
        <li>{item.email}</li>
        <li className="icons"><FaTrashAlt /></li>
      </ul>
    </div>
    </>
  
  )
}

export default ContactCard