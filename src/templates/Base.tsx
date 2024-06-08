import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Hero } from './Hero';
import { Sponsors } from './Sponsors';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Sponsors />
    {/* <VerticalFeatures /> */}
    <Banner />
    {/* <Footer /> */}
  </div>
);

export { Base };
