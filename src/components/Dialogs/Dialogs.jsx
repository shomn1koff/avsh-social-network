import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Dialogs.module.scss'


const Dialog = ({ id, name }) => {
  return (
    <div className={c.dialog}>
      <NavLink to={'/dialogs/1' + id} className={({ isActive }) => isActive ? c.activeDialog : undefined}>{name}</NavLink>
    </div>
  )
}

const Message = ({senderName, message}) => {
  return (
    <div className={c.message}>
      <h3>{senderName}</h3>
      <p>{message}</p>
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={c.dialogsWrapper}>
      <div className={c.dialogs}>
        <Dialog id={'1'} name={'Alexey Shichko'} />
        <Dialog id={'2'} name={'Sergey Zykov'} />
        <Dialog id={'3'} name={'Kira Kirillov'} />
        <Dialog id={'4'} name={'Maxim Synukov'} />
        <Dialog id={'5'} name={'Sasha Vedenkov'} />
      </div>
      <div className={c.messages}>
        <Message senderName={'Viktor'} message={'lorem'}/>
        <Message senderName={'Korneplod'} message={'lordsaofjaodfemlordsaofjaoавфывагрфыващгрфшыгврашфгыврашгфрывашфрывшгарфшыгврашгфырвашгфрывшагрфышвгарфшрывашгфрывшгарфшгыврашфгырвашгфрвшагрфывшгарфшыгврашфгыврашфгывр'}/>
      </div>
    </div>
  )
}

export default Dialogs