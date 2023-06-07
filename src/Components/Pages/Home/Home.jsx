import Banner from './Banner/Banner';
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

        </div>
    );
};

export default Home;