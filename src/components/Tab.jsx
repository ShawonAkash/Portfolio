import React, { useState } from 'react'
import Projects from './Projects'
import Skills from './Skills'

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState('PROJECTS')

  return (
    <>
      <main className='main'>
        <section className='filters container'>
          <ul className='filters__content'>
            <button
              className={
                selectedTab === 'PROJECTS'
                  ? 'filters__button filter-tab-active '
                  : 'filters__button'
              }
              data-target='#projects'
              onClick={() => {
                if (selectedTab === 'SKILLS') {
                  setSelectedTab('PROJECTS')
                }
              }}
            >
              Projects
            </button>
            <button
              className={
                selectedTab === 'SKILLS'
                  ? 'filters__button filter-tab-active '
                  : 'filters__button'
              }
              data-target='#skills'
              onClick={() => {
                if (selectedTab === 'PROJECTS') {
                  setSelectedTab('SKILLS')
                }
              }}
            >
              Skills
            </button>
          </ul>
          <div className='filters__sections'>
            {selectedTab === 'PROJECTS' && (
              <Projects selectedTab={selectedTab} />
            )}
            {selectedTab === 'SKILLS' && <Skills selectedTab={selectedTab} />}
          </div>
        </section>
      </main>
    </>
  )
}

export default Tab
