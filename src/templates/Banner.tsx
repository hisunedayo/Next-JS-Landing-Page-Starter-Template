import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  // <div></div>
  <div className="">
    <Section>
      <CTABanner
        title="Built and Submitted to MEDCHIC Data Hackathon"
        subtitle=""
        button={
          <div className=" size-1/4">
            <img
              className=""
              alt=""
              src="/assets/images/306009448_579962263915592_3573971014139223959_n.jpg"
            ></img>
          </div>
        }
      />
    </Section>
  </div>
);

export { Banner };
