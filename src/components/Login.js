import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const Login = () => (
  <Modal trigger={<Button>Login</Button>}>
    <Modal.Header>Please enter your email address and password to login</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <form className="ui form">
          <div className="field">
            <label>Email address</label>
            <input type="text" name="email" placeholder="Email address"/>
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password"/>
          </div>
          <button className="ui button" type="submit">Login</button>
          <button className="ui button" type="submit">Forgot Password</button>
        </form>

      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Login
