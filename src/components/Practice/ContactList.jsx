// import React from 'react';
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  const contactList = contacts.map((item, index) => {
    return (
      <ContactCard key={index} item={item}  />
  )});

  return (
    <>
      <div className="container">{contactList}</div>
    </>
  );
}

export default ContactList;
