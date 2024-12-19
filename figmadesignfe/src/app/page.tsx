import Navigation from './modules/navigation-section';
import Header from './modules/header-section';
import LogoBar from './modules/logo-bar-section';
import SkillSection from './modules/skill-section';
import Gallery from './modules/gallery-section';
import Testimonial from './modules/testimonial-section';
import Contact from './modules/contact-section';

const Page: React.FC = () => {
    return (
        <div className='bg-white'>
            <Navigation />
            <Header />
            <LogoBar />
            <SkillSection />
            <Gallery />
            <Testimonial  />
            <Contact />
        </div>
    );
};

export default Page;