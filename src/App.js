import React, { Component } from 'react'

import Logo from './modules/Logo'
import Sidebar from './modules/Sidebar'
import Ideas from './modules/Ideas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        {
          id: 1,
          title: 'Prank Travis',
          description: 'Stick googly eyes on all his stuff'
        },
        {
          id: 2,
          title: 'Make a secret password app',
          description:
            'So you and your rideshare driver can both know neither one of you is lying'
        },
        {
          id: 3,
          title: 'Learn a martial art',
          description: 'To exact vengeance upon my enemies'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Logo />
        <Sidebar />
        <Ideas />
      </div>
    )
  }
}

export default App
