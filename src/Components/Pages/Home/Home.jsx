import Banner from './Banner/Banner';
import PopularInstractor from './PopularInstractor/PopularInstractor';
import PopularClasses from './Popularclasses/PopularClasses';
import TopSlider from './TopSlider/TopSlider';

const Home = () => {
    return (
        <div>
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

        </div>
    );
};

export default Home;