import React from 'react'

// function PersinalInfo(props) {
//   return (
//     <section>
//       <h2>{props.name}</h2>
//       <h2>{props.lastname}</h2>
//       <h2>{props.email}</h2>
//     </section>
//   )
// }

class PersinalInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      email: ''
    }
  }

  onClick = () => {
    this.setState({
      name: 'Juan',
      lastname: 'Perez',
      email: 'example.com'
    })
  }

  render () {
    const { phone, city } = this.props
    const { name, lastname, email } = this.state
    return (
      <section>
        <h2>name: {name}</h2>
        <h2>lastname: {lastname}</h2>
        <h2>email: {email}</h2>
        <h2>phone: {phone}</h2>
        <h2>city: {city}</h2>
        <button onClick={this.onClick}>pintar</button>
     </section>
    )
  }
}

export default PersinalInfo
