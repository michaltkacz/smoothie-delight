import React from 'react';

import Page from '../global/Page';
import mediaImage2 from '../../assets/chill1.jpg';
import mediaImage3 from '../../assets/fit1.jpg';
import mediaImage1 from '../../assets/fruits3.jpg';
import useWindowPosition from '../../hook/useWindowPosition';

import BenefitPageLayout from './BenefitPageLayout';
import ImageCard from './ImageCard';
import TextCard from './TextCard';

const BenefitsPage = ({ id }) => {
  const pageVisible = useWindowPosition('page3');

  return (
    <Page id={id}>
      <BenefitPageLayout
        benefitCard1={{
          upper: <ImageCard image={mediaImage1} show={pageVisible} />,
          lower: (
            <TextCard
              title='Healthy and tasty!'
              description='One out of five daily portions of fruits and vegetables in a perefectly balanced mixture!'
              show={pageVisible}
            />
          ),
        }}
        benefitCard2={{
          upper: (
            <TextCard
              show={pageVisible}
              title='Relax or focus?'
              description='Calming green for relax or refreshing yellow for focus? Choose whatever you need!'
            />
          ),
          lower: <ImageCard image={mediaImage2} show={pageVisible} />,
        }}
        benefitCard3={{
          upper: <ImageCard image={mediaImage3} show={pageVisible} />,
          lower: (
            <TextCard
              title='Stay fit!'
              description='Eat as much as you want - regret nothing. Gain muscles - not fat!'
              show={pageVisible}
            />
          ),
        }}
      />
    </Page>
  );
};

export default BenefitsPage;
