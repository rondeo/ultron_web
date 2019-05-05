import React from 'react'
import '@/styles/init.scss'
import '@/styles/app.scss'
import RouterCenter from 'routes'
import Demo from './demo'
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Demo />
          <p>
            Intelligent and Monitor, Effectiveness
          </p>
          {/* 路由覆盖 */}
          <RouterCenter />
        </header>
      </div>
    )
  }
}