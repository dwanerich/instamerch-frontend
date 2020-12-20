import React from 'react';
import CoverCard from '../components/CoverCard'
import Home from '../components/Header'
import InputGroup from 'react-bootstrap/InputGroup';
// import 'isomorphic-fetch';


// new merch form with caption
// log out button
// list of merch rendered
// 
//

const CLIENT_SECRET = 'b47919cd399644f1975038363bbdb479';
const URL = 'https://api.spotify.com/v1/search.json?'
    + `Client_Secret=${CLIENT_SECRET}`;

const BASE_URL =
    'https://api.spotify.com/v1/search.json?' +
    `Client_Secret=${CLIENT_SECRET}&query=`;


class CoversContainer extends React.Component {
    
    state = {
        searchTerm: '',
        songs: [],
        user: {}

    }

    handleSearchInputChange = event =>
        this.setState({ searchTerm: event.target.value });

    handleSubmit = event => {
        event.preventDefault();

        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }));
    };

    handleRenderFormSubmit = event => {
        event.preventDefault();
        // console.log("Create A Cover Instance + Render to the DOM")
        
        const newCover = {
            title: event.target["title"].value,
            img_src: event.target["img_src"].value,
            user_id: this.state.user.id
        }

        console.log(newCover)
    };

//     Actions.addCover(newCover).then(actualNewCover => {
//         console.log("actual: ", actualNewCover)
// new Cover(actualNewCover)
//     })
//         .catch (error => alert(error))
// }

// Actions.fetchCovers()
//     .then(actualCoverData => {
//         renderAllCovers(actualCoverData)
//     })

//Render Helpers
// function renderOnePlant(coverObj) {
//     const cover = new Cover(coverObj)
// }

// function renderAllCovers(covers) {
//     covers.forEach(renderOneCover)
// }


    handleSpotifyFormSubmit = event => {
        event.preventDefault();
        console.log("Spotify Fetch Request")
        // fetch(BASE_URL.concat(this.state.searchTerm))
        //     .then(res => res.json())
        //     .then(res => this.setState({ reviews: res.results }));
    };



    render() {
        const { username, logOut } = this.props
        console.log(this.props)
        return (
            <>
                <Home />
                <p>Welcome, <strong> { username }! </strong></p>
                <button onClick={ logOut }>Logout</button>

                <h1 className="Login-component" style={{color: "white"}}>
                
                    <img className='card'
                        src="https://static.hollywoodreporter.com/sites/default/files/2013/05/kanye_west_album_art_a_p.jpg"
                        alt="new"
                    />
                
                
                <img className='card'
                        src="https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png"
                        alt="new"
                    />

                    <img className='card'
                        src="https://miro.medium.com/max/1280/1*4PHH6b1KbsWh2nKtcnFiIQ.jpeg"
                        alt="new"
                    />

                </h1>


                
                {/* form for URL cover generator */}

                <hr></hr>

                <h2>Copy & Paste:</h2>

                <form onSubmit={this.handleRenderFormSubmit}>
                    <label htmlFor="url-input" ></label>
                    <input
                        id="name-input" name="title" className="name-input"
                        placeholder='Enter Name...'
                        type="text" />
                    <input
                        id="img-input" name="img_src" className="img-input"
                        placeholder='Enter URL...'
                        type="text"
                        style={{ width: 200}}
                        onChange={this.handleRenderInputChange}
                    />
                    <button type="submit">Generate</button>
                </form>

                <h2>Quick Search:</h2> 

                <form onSubmit={this.handleSpotifyFormSubmit}>
                    <label htmlFor="search-input" ></label>
                    <input
                        id="keyword" name="keyword" className="img-input"
                        placeholder='Album, Song or Artist Name'
                        type="text"
                        style={{ width: 200 }}
                        onChange={this.handleRenderInputChange}
                    />
                    <button type="submit">Search</button>
                </form>





                {/* spotify keyboard earch bar */}

                {/* <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Engine </label>
                    <input
                        id="search-input"
                        placeholder='"Artist" or "Song Title"'
                        type="text"
                        style={{ width: 200}}
                        onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Search</button>
                </form> */}



                {/* {typeof this.state.covers === 'object' &&
                    this.state.covers.length > 0 && <h2>Album CoverArt By Search:</h2>}
                <AlbumCovers reviews={this.state.covers} /> */}

            </>
        )
    }
}

export default CoversContainer