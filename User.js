import React from 'react'

function User(props) {

    const displayUser = (props) => {
        const { user } = props;
        
      

        if (user.length > 0) {
            return (
                user.map((data, index) => {
                    return(
                    <div style={{border: '2px solid blue', width: "400px", margin: "auto" }} key={index}>
                            <ul style={{listStyleType: "none", padding: "0 19px"}}>
                                <img src="./images/pics-1.jpg" alt="user avatar"/>
                                <li>Name: {data.name}</li>
                                <li>Gender: {data.gender}</li>
                                <li>Height: {data.height}</li>
                            </ul>
                        </div>
                    )
                })
            )
        }

    }
    return (displayUser(props));
}

export default User
