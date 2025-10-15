import HomeBanner from './HomeBanner';
import Foreword from './Foreword';
import ThePurpleEconomy from './ThePurpleEconomy';
import TheBigPicture from './TheBigPicture';
import TheBarriersWeCanRemove from './TheBarriersWeCanRemove';
import ThePurplePledge from './ThePurplePledge';
import TheWorldWeImagine from './TheWorldWeImagine';
import FacesofInclusion from './FacesofInclusion';
import ThePurpleRatingFramework from './ThePurpleRatingFramework';
import ThePurpleCircle from './ThePurpleCircle';
import PurplePledgeToday from './PurplePledgeToday';

const HomeComponent = () => {
    return (
        <div>
            <HomeBanner />
            <div className="md:px-0 px-4">
                <div className="container mx-auto md:p-10 p-4 bg-[#FBEBFD] rounded-4xl">
                    <Foreword />
                    <ThePurpleEconomy />
                </div>
            </div>
            <TheBigPicture />
            <TheBarriersWeCanRemove />
            <ThePurplePledge />
            <TheWorldWeImagine />
            <FacesofInclusion />
            <ThePurpleRatingFramework />
            <ThePurpleCircle />
            <PurplePledgeToday />
        </div>
    );
};

export default HomeComponent;