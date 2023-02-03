import React from 'react'
import Preloader from '../../UI/Preloader/Preloader'
import c from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <Preloader/>
    )
  }

  return (
    <div>
      <div className={c.profile}>
        <img
          className={c.avatar}
          src={props.profile.photos.large}
          alt="ava"
        />
        <div className={c.nameAndDescription}>
          <p className={c.profileName}>Глад Валакас</p>
          <p className={c.profileDescription}>
            Глад Валакас (Пенис Детров, Жмышенко Валерий Альбертович) – стример
            онлайн-игр, ставший известным благодаря образу 54-летнего деда.
            Записывает видео, напрягая голосовые связки и говоря с акцентом.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
