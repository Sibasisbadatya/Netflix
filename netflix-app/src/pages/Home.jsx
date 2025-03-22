import React from 'react'
import HomeBannerCarousel from '../components/HomeBannerCarousel'
import 'bootstrap/dist/css/bootstrap.css';
import MovieSlider from '../components/MovieSlider/MovieSlider';
const Home = () => {
    return (
        <>
            <div style={{ width: '100%', position: 'relative' }}>
                <HomeBannerCarousel />
                <MovieSlider data={{ title: "Watch It Again" }} />
                <MovieSlider data={{ title: "Trending Now" }} />
                <MovieSlider data={{ title: "For You" }} />
            </div>
        </>
    )
}

export default Home