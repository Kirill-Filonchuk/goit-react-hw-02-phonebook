import React from 'react';
import s from './ContactList.module.css'


const ContactList = ({visibleContact, onDeleteCont}) => (
  
    <ul className={s.list}>
        {visibleContact.map(({id, name, number }) => (
            <li key={id} className={s.item}>
                {name}:<span>{number}</span>
                <button type="button" onClick={()=>onDeleteCont(id)}className={s.btnForm}>Delete</button>
            </li>
        ))}
    </ul>
);

export default ContactList;
 /* was: this.state.contact */