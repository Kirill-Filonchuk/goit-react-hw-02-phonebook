import React from 'react';
// import shortid from 'shortid';

const ContactList = ({visibleContact, onDeleteCont}) => (
  
    <ul>
        {visibleContact.map(({id, name, number }) => (
            <li key={id}>
                {name}:<span>{number}</span>
                <button type="button" onClick={()=>onDeleteCont(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default ContactList;
 /* was: this.state.contact */