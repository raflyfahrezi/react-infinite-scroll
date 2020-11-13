/** @jsx jsx */
import { jsx } from 'theme-ui'

const box = ({ firstName, lastName, email, avatar }) => {

    const Container = {
        width : '100%',
        maxWidth : '600px',

        m : '0 auto',
        p : '20px',

        borderRadius : '5px',

        backgroundColor : '#666666',

        display : 'flex',
        gap : '20px'
    }

    const Avatar = {
        borderRadius : '50%'
    }

    return (
        <div sx={ Container }>
            <div>
                <img src={ avatar } alt="Avatar" sx={ Avatar }/>
            </div>
            <div>
                <p>{ firstName }</p>
                <p>{ lastName }</p>
                <p>{ email }</p>
            </div>
        </div>
    )
}

export default box