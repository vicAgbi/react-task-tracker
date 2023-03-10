 import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd ,showAdd}) => {
   
  return (
    <header className='header'>
        <h1>{title}</h1>
         <Button color={showAdd ? 'red' :'yellowgreen'}text={showAdd ? 'Close':'Add'}
         onClick={onAdd}/>
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker', 
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
} 

//const headingStyle = {
  //  color:'red',backgroundColor:"purple",
  //  height:"220px", width:"400px",padding:"20px",paddingBlockEnd:"40px"
//}

export default Header
