import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          {/* <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link> */}
        </li>
        {/* <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {/* {'ADVANCED\n'} */}
            <span className="text-9xl text-primary-500">
              Advanced Diagnosis Evaluation and Prediction tool
            </span>
          </>
        }
        description="Built with Love, LLMs, and Caffeine"
        button={
          <Link href="https://hackathonmorchor.streamlit.app/">
            <div className="justify-items-center">
              <Button xl>Try the Demo</Button>
            </div>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
