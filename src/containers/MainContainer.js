import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'
import CoversContainer from './CoversContainer'

class MainContainer extends React.Component {

    // here we set state for Username in the parent component

    render() {
        return (<CoversContainer /> )
    }
}

export default MainContainer