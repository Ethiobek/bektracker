import Button from './Button'
import PropTypes from 'prop-types'


const Header = ({title,onAdd,showAdd}) => {
  

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onAdd} color={showAdd?'red':'green'} text={showAdd ? 'Close':'Add'}/>
        </header>
    )
}


// To give the property a constraints
Button.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string
}

export default Header
