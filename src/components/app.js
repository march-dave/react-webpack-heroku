import React from 'react'

export default class App extends React.Component {
  render () {
    return (
      <div>
          <h1>Header</h1>
          <h2>Content</h2>
          <p data-myattribue="somevalue">This is the content!!</p>
          <h1>{1+1}</h1>
      </div>
    )
  }
}
