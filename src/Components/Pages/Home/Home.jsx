import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import OurHistory from './OurHIstory/OurHistory';
import PopularInstractor from './PopularInstractor/PopularInstractor';
import PopularClasses from './Popularclasses/PopularClasses';
import TopSlider from './TopSlider/TopSlider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>musicits || Home</title>
            </Helmet>

            <section>
                <Banner></Banner>
            </section>
            <section className='mt-20 text-center'>
                <TopSlider></TopSlider>
            </section>
            <section className='mt-20 text-center'>
                <PopularClasses></PopularClasses>
            </section>
            <section className='mt-20 text-center'>
                <PopularInstractor></PopularInstractor>
            </section>
            <section className='mt-20 text-center'>
                <OurHistory></OurHistory>
            </section>

        </div>
    );
};

export default Home;