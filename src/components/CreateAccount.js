import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const CreateAccount = () => (
  <Modal trigger={<Button>Register</Button>}>
    <Modal.Header>Please enter the following to create an account</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name"/>
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name"/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email"/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password"/>
          </div>
          <div className="field">
            <label>Re-Enter Password</label>
            <input type="password" name="password1" placeholder="Password"/>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden"/>
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default CreateAccount
