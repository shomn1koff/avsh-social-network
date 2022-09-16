import React from 'react'
import c from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.avatar} src="https://twitchpedia.ru/wp-content/uploads/2021/05/glad-valakas-2.jpg" alt="ava" />
                <p>Глад Валакас (Пенис Детров, Жмышенко Валерий Альбертович) – стример онлайн-игр, ставший известным благодаря образу 54-летнего деда. Записывает видео, напрягая голосовые связки и говоря с акцентом.
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo