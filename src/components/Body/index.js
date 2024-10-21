// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbar = () => (
        <div className="body-navbar-container">
          <h1 className="body-content-title">Left Navbar Menu</h1>
          <ul className="navbar-items">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="body-content-container">
          <h1 className="body-content-title">Content</h1>
          <p>
            Lorem ipsum dolor shit amet, consectetur adipiscing elit, sed so
            eiusmod tempor incididunt ut labore etdolore magna alique. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const renderRightNavbar = () => (
        <div className="body-navbar-container">
          <h1 className="body-content-title">Right Navbar</h1>
          <div className="right-navbar-content-container">
            <p>Ad 1</p>
          </div>
          <div className="right-navbar-content-container">
            <p>Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && renderLeftNavbar()}
          {showContent && renderContent()}
          {showRightNavbar && renderRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
