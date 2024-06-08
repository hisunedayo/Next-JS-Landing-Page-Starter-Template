import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Resources"
    description="Resources used in the Data Hackathon Project"
  >
    <table className="h-512 w-512 m-4 mx-auto box-border border-collapse p-4">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://aws.amazon.com/free/?trk=c4f45c53-585c-4b31-8fbf-d39fbcdc603a&sc_channel=ps&ef_id=CjwKCAjwgpCzBhBhEiwAOSQWQZhQ7X0YjJrYEaW3Gn_Ca0mBq4vy1WIHRBnAQOVkNL7IxtldR8AD_BoCRHoQAvD_BwE:G:s&s_kwcid=AL!4422!3!637354294239!e!!g!!aws!19043613274!143453611386&gclid=CjwKCAjwgpCzBhBhEiwAOSQWQZhQ7X0YjJrYEaW3Gn_Ca0mBq4vy1WIHRBnAQOVkNL7IxtldR8AD_BoCRHoQAvD_BwE&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"
              target="_blank"
            >
              <Image
                src="/assets/images/Amazon_Web_Services_Logo.png"
                alt="Amazon Web Service"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="about:blank" target="_blank">
              <Image
                src="/assets/images/AWS-service-icon_sagemaker.png"
                alt="Amazon SageMaker"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="about:blank">
              <Image
                src="/assets/images/image27_frqkzv.png"
                alt="Streamlit"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="about:blank" target="_blank">
              <Image
                src="/assets/images/OpenAI_Logo.png"
                alt="OpenAI"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="about:blank" target="_blank">
              <Image
                src="/assets/images/Python-logo-notext.png"
                alt="Python3"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="about:blank" target="_blank">
              <Image
                src="/assets/images/colab_favicon_256px.png"
                alt="Colabn"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
