import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({fullName, bio, profession, children, handleName}) =>  {
    // Defining default props
    Profile.defaultProps = {fullName:'Ndifreke A', bio: "I'm a soccer guy", profession: 'Student', children: `<img src="./pic/nea.PNG" alt="Profile"/>` }

    // PropsType checking
    Profile.propTypes = {fullName: PropTypes.string, bio: PropTypes.string, profession: PropTypes.string, children: PropTypes.string }

    return (
        <div>
            <h1>
                Full Name: <i>{fullName}</i>.
                <br />
                <br />
                Bio: <i>{bio}</i>.
                <br />
                <br />
                Profession: <i>{profession}</i>.
            </h1>
            {children}
            <br />
            <br />
            {handleName}
        </div>
    )
}

export default Profile
