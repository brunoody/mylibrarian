import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Home extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12 text-center mt-1'>
                    <h1>
                        Hello World! <br></br><i>with Bootstrap and Font-Awesome!</i><br></br>
                    </h1>
                    <span className='text-success font-26'>Cool!</span>
                    <FontAwesomeIcon icon='thumbs-up' className='ml-1 font-30'></FontAwesomeIcon>
                </div>
            </div>
        );
    }
}