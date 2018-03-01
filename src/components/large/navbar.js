import React, {Component} from 'react'
import {Button, Menu, Image} from 'semantic-ui-react'

export default class Navbar extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login()
  }

  logout() {
    this.props.auth.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <div>
      <Menu inverted="inverted" className='no-border-radius teal'>
        <Menu.Menu position='left'>
          <Image src='/images/logo-mb.png' className="App-logo" alt="logo"/>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item name='Tentang'></Menu.Item>
          <Menu.Item name='Kontak'></Menu.Item>
          {
            !isAuthenticated() && (
              <Menu.Item>
                <Button onClick={this.login.bind(this)} primary>Masuk</Button>
              </Menu.Item>
            )
          }
          {
            isAuthenticated() && (
              <Menu.Item>
                <Button onClick={this.logout.bind(this)} negative>Logout</Button>
              </Menu.Item>
            )
          }
        </Menu.Menu>
      </Menu>

    </div>)
  }
}