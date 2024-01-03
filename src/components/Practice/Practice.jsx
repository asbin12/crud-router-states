import { useEffect, useState } from "react"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import Header from "./Header"

const Practice = () => {
  const localStorageKey="contacts"
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    setContacts([...contacts,contact])
  }
  
    useEffect(() => {
      const retrieveContacts = JSON.parse(localStorage.getItem(localStorageKey));
      if (retrieveContacts) {
        setContacts(retrieveContacts);
      }
    }, []);
  useEffect(() => {
    localStorage.setItem(localStorageKey,JSON.stringify(contacts))
  },[contacts])


  return (
    <>
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </>
  )
}

export default Practice