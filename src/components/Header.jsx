import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../assets/img/IMG_0252-removebg-preview.png'
import Footer from './Footer'
import Tab from './Tab'

const Header = () => {
  const [isActive, setActive] = useState(false)
  const toggleTheme = () => {
    setActive(!isActive)
  }
  return (
    <div id='body' className={isActive ? 'light-theme' : 'dark-theme'}>
      <header className='profile container'>
        <i
          className={`ri-${isActive ? 'moon' : 'sun'}-line change-theme`}
          id='theme-button'
          onClick={toggleTheme}
        ></i>

        <div className='profile__container grid'>
          <div className='profile__data'>
            <div className='profile__border'>
              <div className='profile__perfil'>
                <img src={avatar} alt='avatar' />
              </div>
            </div>

            <h2 className='profile__name'>Akash Ahmed</h2>
            <h3 className='profile__profession'>Web developer</h3>

            <ul className='profile__social'>
              <a
                href='https://www.facebook.com/shawon.akash'
                target='_blank'
                className='profile__social-link'
              >
                <i className='ri-facebook-line'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/shawon-akash-86746811a/'
                target='_blank'
                className='profile__social-link'
              >
                <i className='ri-linkedin-box-line'></i>
              </a>
              <a
                href='https://github.com/ShawonAkash'
                target='_blank'
                className='profile__social-link'
              >
                <i className='ri-github-line'></i>
              </a>
            </ul>
          </div>

          <div className='profile__info grid'>
            <div className='profile__info-group'>
              <h3 className='profile__info-number'>1</h3>
              <p className='profile__info-description'>
                Years of <br /> work
              </p>
            </div>
            <div className='profile__info-group'>
              <h3 className='profile__info-number'>+21</h3>
              <p className='profile__info-description'>
                Completed <br /> projects
              </p>
            </div>
            <div className='profile__info-group'>
              <h3 className='profile__info-number'>2</h3>
              <p className='profile__info-description'>
                Satisfied <br /> customers
              </p>
            </div>
          </div>

          <div className='profile__buttons'>
            <a
              download=''
              href='https://drive.google.com/file/d/1ZJGjCEcL__T_Injf0mAOTHflQQWlT_d6/view?usp=share_link'
              target='_blank'
              className='button'
            >
              Download CV <i className='ri-download-line'></i>
            </a>

            <div className='profile__buttons-small'>
              <a
                href='https://api.whatsapp.com/send?phone=+8801688742161&text=Hello, more information!'
                target='_blank'
                className='button button__small button__gray'
              >
                <i className='ri-whatsapp-line'></i>
              </a>

              <a
                href='https://m.me/shawon.akash'
                target='_blank'
                className='button button__small button__gray'
              >
                <i className='ri-messenger-line'></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <Tab />
      <Footer />
    </div>
  )
}

export default Header
