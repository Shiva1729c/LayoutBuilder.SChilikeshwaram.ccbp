// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="configuration-controller-container">
          <h1 className="main-heading">Layout</h1>
          <div className="controllers-container">
            <div className="input-container">
              <input
                type="checkbox"
                id="content"
                className="checkbox"
                checked={showContent}
                onChange={onToggleShowContent}
              />
              <label htmlFor="content" className="label-name">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="leftNavbar"
                className="checkbox"
                checked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="label-name">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="rightNavbar"
                className="checkbox"
                checked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="rightNavbar" className="label-name">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
