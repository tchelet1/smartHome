import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to ='/addroom'><button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-plus">+</i>
                            </button></Link>
            </div>
        )
    }
}
