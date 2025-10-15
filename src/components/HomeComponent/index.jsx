import HomeBanner from './HomeBanner';
import Foreword from './Foreword';
import ThePurpleEconomy from './ThePurpleEconomy';
import TheBigPicture from './TheBigPicture';
import TheBarriersWeCanRemove from './TheBarriersWeCanRemove';
import ThePurplePledge from './ThePurplePledge';
import TheWorldWeImagine from './TheWorldWeImagine';
import FacesofInclusion from './FacesofInclusion';

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
        </div>
    );
};

export default HomeComponent;
