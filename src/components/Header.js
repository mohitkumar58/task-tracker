import PropTypes from 'prop-types'
import logo from "../images/logo.png"
import Button from "./Button"

const Header = ({ title, onAddToggle, showAddTask }) => {

    return (
        <header className="header">
            <img src={logo} alt="" />
            <h1>{title}</h1>
            <Button onClick={onAddToggle} color={showAddTask ? "red": "black"} text={showAddTask ? "Close" : "Add"} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
