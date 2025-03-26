import React from 'react';
import HomeBannerCarousel from '../components/HomeBannerCarousel';
import 'bootstrap/dist/css/bootstrap.css';
import MovieSlider from '../components/MovieSlider/MovieSlider';
import { WATCH_IT_AGAIN, TRENDING_NOW, FOR_YOU } from "../services/SliderConstants";

const Home = () => (
    <div style={{ width: '100vw', position: 'relative', margin: 'auto' }}>
        <HomeBannerCarousel />
        <MovieSlider data={{ title: WATCH_IT_AGAIN }} />
        <MovieSlider data={{ title: TRENDING_NOW }} />
        <MovieSlider data={{ title: FOR_YOU }} />
    </div>
);

export default Home;