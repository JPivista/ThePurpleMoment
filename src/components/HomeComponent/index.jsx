import HomeBanner from './HomeBanner';
import Foreword from './Foreword';
import ThePurpleEconomy from './ThePurpleEconomy';

const HomeComponent = () => {
    return (
        <div>
            <HomeBanner />
            <div className="bg-white rounded-4xl  -mt-8 relative z-10 shadow-lg">
                <Foreword />
                <ThePurpleEconomy />
            </div>
        </div>
    );
};

export default HomeComponent;
