import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import VisibleTodoList from './containers/VisibleTodoList'
import { Dropdown, Menu, Message, Card, Icon, Grid } from 'semantic-ui-react'

import './App.css'

function login() {
  alert ("login");
}

function createAccount() {
  alert ("create account");
}

const App = () => (
  <div className="AppContainer">

    {/*<div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div> */}

    <div style={{textAlign:"left",marginLeft:10,marginBottom:5,display:"inline-block",
      verticalAlign: "middle",
      float:"left",
      lineHeight: "normal"}}>
      {/*<img src="qiaoqiao.png" width={100} style={{float:"left"}} /> */}

      <div className="ui icon input" style={{marginLeft:10,display:"inline-block",float:"right",
        verticalAlign: "middle",
        lineHeight: "normal"}}>
        <span>QIAO QIAO</span>
        <input className="prompt" type="text" style={{marginLeft:10,width:500}} placeholder="Search for art and artists"/>
          <i className="search icon"></i>
      </div>
    </div>
    <div style={{textAlign:"left",marginLeft:20,marginBottom:5,marginTop:8,display:"inline-block",
      verticalAlign: "middle",
      float:"left",
      lineHeight: "normal"}}><Login/> <CreateAccount/>
    </div>
    <br clear={"all"}/>
    <br clear={"all"}/>

    <Menu borderless size={"small"} secondary>
    <Menu.Item fitted='horizontally'>
      <Dropdown pointing className='link item' item text="Tees and Sweats">
        <Dropdown.Menu>
          <Dropdown.Item>Mens</Dropdown.Item>
          <Dropdown.Item>Womans</Dropdown.Item>
          <Dropdown.Item>Kids</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>

      <Menu.Item fitted='horizontally'>
      <Dropdown item text="Posters">
        <Dropdown.Menu>
          <Dropdown.Item>Framed</Dropdown.Item>
          <Dropdown.Item>UnFramed</Dropdown.Item>
          <Dropdown.Item>Wallpaper</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>


    <Menu.Item fitted='horizontally'>
      <Dropdown item text="Prints">
      <Dropdown.Menu>
        <Dropdown.Item>Canvas</Dropdown.Item>
        <Dropdown.Item>Framed</Dropdown.Item>
        <Dropdown.Item>Walled</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Menu.Item>

      <Menu.Item fitted='horizontally'>
        <Dropdown item text="Cases">
          <Dropdown.Menu>
            <Dropdown.Item>iPhone</Dropdown.Item>
            <Dropdown.Item>iPad</Dropdown.Item>
            <Dropdown.Item>Android</Dropdown.Item>
            <Dropdown.Item>Laptop</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

      <Menu.Item fitted='horizontally'>
        <Dropdown item text="Stickers">
          <Dropdown.Menu>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
            <Dropdown.Item>Auto</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

      <Menu.Item fitted='horizontally'>
        <Dropdown item text="Tapestry">
          <Dropdown.Menu>
            <Dropdown.Item>Popular</Dropdown.Item>
            <Dropdown.Item>Nature</Dropdown.Item>
            <Dropdown.Item>Traditional</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

      <Menu.Item fitted='horizontally'>
        <Dropdown item text="Stationary">
          <Dropdown.Menu>
            <Dropdown.Item>Greeting Cards</Dropdown.Item>
            <Dropdown.Item>Postcards</Dropdown.Item>
            <Dropdown.Item>Journals</Dropdown.Item>
            <Dropdown.Item>Calendars</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

      <Menu.Item fitted='horizontally'>
        <Dropdown item text="Bags">
          <Dropdown.Menu>
            <Dropdown.Item>Totes</Dropdown.Item>
            <Dropdown.Item>Pouches</Dropdown.Item>
            <Dropdown.Item>Sleeves</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

      <Menu.Item fitted='horizontally'>
        <Dropdown item text="Artists">
          <Dropdown.Menu>
            <Dropdown.Item>Trending</Dropdown.Item>
            <Dropdown.Item>Most Popular</Dropdown.Item>
            <Dropdown.Item>Pop</Dropdown.Item>
            <Dropdown.Item>Most Popular</Dropdown.Item>
            <Dropdown.Item>Traditional</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

    </Menu>

    <Message>
      <Message.Header>
        Who are we?
      </Message.Header>
      <p>
        We are Artists. Dedicated. Inspired. Socially responsible.<br/>
        We share our profits with social causes and efforts to improve the world.<br/>
        Join us. Support us. Let us know your cause.
      </p>
    </Message>

    <Message>
      <Message.Header>
        Inspirations
      </Message.Header>
      <p>
        Choose what inspires you
      </p>
    </Message>

    <Grid container columns={3}>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="pop-culture.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Pop Culture</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="home.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Home</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="nature.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Nature</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="color.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Color</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="people.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>People</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="theworld.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>The World</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>

    <Message>
      <Message.Header>
        Featured Artists
      </Message.Header>
      <p>
        This week's featured Artists
      </p>
    </Message>

    <Grid container columns={3}>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="artist-1.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Jamie</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="artist-2.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Weselda</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="artist-3.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Jacob</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="artist-4.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Estella</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="artist-male-1.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Fredricke</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="artist-5.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Jade</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>

    <Message>
      <Message.Header>
        New Inspiration
      </Message.Header>
      <p>
        Picked especially for you
      </p>
    </Message>

    <Grid container columns={3}>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="art-1.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Eyes</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="art-2.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Tusk</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="art-3.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Reflection</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="art-4.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Launch</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="art-5.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Native Spirit</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <div className="image">
            <img src="art-6.jpg"/>
          </div>
          <Card.Content>
            <Card.Header>
              <div style={{textAlign:"center"}}>Tropics</div>
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>

    <Message>
      <Message.Header>
        Login
      </Message.Header>
      <p>
        Please enter your email address and password to login
      </p>
    </Message>
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

    <Message>
      <Message.Header>
        Create a Login
      </Message.Header>
      <p>
        Please enter the following to create an account
      </p>
    </Message>
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
  </div>




)

export default App
