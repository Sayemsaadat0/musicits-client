import Banner from './Banner/Banner';
import PopularClasses from './Popularclasses/PopularClasses';
import TopSlider from './TopSlider/TopSlider';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section className='mt-10 text-center'>
                <TopSlider></TopSlider>
            </section>
            <section className='mt-10 text-center'>
                <PopularClasses></PopularClasses>
            </section>

        </div>
    );
};

export default Home;