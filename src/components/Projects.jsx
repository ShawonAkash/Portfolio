import React from 'react'
import project1 from '../assets/img/project1.jpg'
import project2 from '../assets/img/project2.jpg'
import project3 from '../assets/img/project3.jpg'
import project4 from '../assets/img/project4.jpg'
import project5 from '../assets/img/project5.jpg'
import project6 from '../assets/img/project6.jpg'

const Project = ({ selectedTab }) => {
  return (
    <>
      <div
        className={
          selectedTab === 'PROJECTS'
            ? 'projects__content grid filters__active'
            : 'projects__content grid'
        }
        data-content
        id='projects'
      >
        <article className='projects__card'>
          <img src={project1} alt='project1' className='projects__img' />

          <div className='projects__modal'>
            <div>
              <span className='projects__subtitle'>React</span>
              <h3 className='projects__title'>ECommerce Site</h3>
              <a
                href='https://proshop2.herokuapp.com/'
                target='_blank'
                className='projects__button button button__small'
              >
                <i className='ri-link'></i>
              </a>
            </div>
          </div>
        </article>

        <article className='projects__card'>
          <img src={project2} alt='project2' className='projects__img' />

          <div className='projects__modal'>
            <div>
              <span className='projects__subtitle'>Vue</span>
              <h3 className='projects__title'>Music Mania</h3>
              <a
                href='https://music-mania-k23prmgnx-shawonakash.vercel.app/'
                target='_blank'
                className='projects__button button button__small'
              >
                <i className='ri-link'></i>
              </a>
            </div>
          </div>
        </article>

        <article className='projects__card'>
          <img src={project3} alt='project3' className='projects__img' />

          <div className='projects__modal'>
            <div>
              <span className='projects__subtitle'>Vue</span>
              <h3 className='projects__title'>Chat Room</h3>
              <a
                href='https://live-chat-room-e9hvv72bq-shawonakash.vercel.app/'
                target='_blank'
                className='projects__button button button__small'
              >
                <i className='ri-link'></i>
              </a>
            </div>
          </div>
        </article>

        <article className='projects__card'>
          <img src={project4} alt='project4' className='projects__img' />

          <div className='projects__modal'>
            <div>
              <span className='projects__subtitle'>Movil</span>
              <h3 className='projects__title'>Login page</h3>
              <a
                href='https://github.com/ShawonAkash/Sliding-Sign-in-up-Form'
                target='_blank'
                className='projects__button button button__small'
              >
                <i className='ri-link'></i>
              </a>
            </div>
          </div>
        </article>

        <article className='projects__card'>
          <img src={project5} alt='project5' className='projects__img' />

          <div className='projects__modal'>
            <div>
              <span className='projects__subtitle'>React</span>
              <h3 className='projects__title'>Portfolio</h3>
              <a
                href='https://react-portfolio-obbxmdrpj-shawonakash.vercel.app/'
                target='_blank'
                className='projects__button button button__small'
              >
                <i className='ri-link'></i>
              </a>
            </div>
          </div>
        </article>

        <article className='projects__card'>
          <img src={project6} alt='project6' className='projects__img' />

          <div className='projects__modal'>
            <div>
              <span className='projects__subtitle'>Vue</span>
              <h3 className='projects__title'>Admin LTE</h3>
              <a
                href='https://github.com/ShawonAkash/Bakery'
                target='_blank'
                className='projects__button button button__small'
              >
                <i className='ri-link'></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Project
