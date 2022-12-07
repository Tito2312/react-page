import React from 'react'
import { NavBar } from '../../ui/NavBar/NavBar'
import { Searcher } from '../../ui/Searcher/Searcher'
import { Title } from '../../ui/Title/Title'

export const Header = () => {
  return (
      <header className="Header">
        <Title content="Work Services"/>
        <Searcher/>
        <NavBar></NavBar>
      </header>
    
  )
}
