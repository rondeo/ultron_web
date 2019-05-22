import React from 'react'
import RouterCenter from 'routes'
console.log(process.env.REACT_APP_BASE_API)
export default class App extends React.Component {
  
  render() {
    return (
      <div className="app-wrap">
          {/* Intelligent and Monitor, Effectiveness */}
          <RouterCenter />
      </div>
    )
  }
}