// const Welcome = function(params) {
//   return (
//     <h1>
//         { params.sayHello 
//             ? <div>Hello, { params.name }</div> 
//             : <div>Good bye</div> 
//         }
//         <div>{ new Date().toISOString() }</div>
//         <a href={ params.uri }>Learn more about React</a>
//     </h1>
//   )
// }

// ReactDOM.render(
//     <Welcome sayHello={true} uri='https://reactjs.org/' name='Ionut'/>,
//     document.getElementById('root')
// )

class Welcome extends React.Component {
  render() {
    return (
      <h1>
        { this.params.sayHello ? 
          <div>Hello, {this.params.name} !</div>
         : 
          <div>Good bye</div>
        }
        <div>{ new Date().toISOString() }</div>
        <a href={ this.params.uri }>Learn more about React</a>
      </h1>
    )
  }
}

const App = function() {
    return(
        <Welcome sayHello={true} uri='https://reactjs.org/' name='Ionut'/>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)