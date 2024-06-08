import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-nowrap rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <h2 className="me-4 text-2xl font-semibold text-gray-900">{props.title}</h2>
    {/* <div className="text-primary-500">{props.subtitle}</div> */}

    {props.button}
    {/* <div className=" mt-3 sm:ml-2 sm:mt-0">
      
    </div> */}
  </div>
);

export { CTABanner };
