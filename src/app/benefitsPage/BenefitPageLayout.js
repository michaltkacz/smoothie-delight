import React from 'react';
import BenefitCardLayout from './BenefitCardLayout';

const BenefitPageLayout = ({ benefitCard1, benefitCard2, benefitCard3 }) => {
  return (
    <>
      <BenefitCardLayout
        upper={benefitCard1.upper}
        lower={benefitCard1.lower}
      />
      <BenefitCardLayout
        upper={benefitCard2.upper}
        lower={benefitCard2.lower}
      />
      <BenefitCardLayout
        upper={benefitCard3.upper}
        lower={benefitCard3.lower}
      />
    </>
  );
};

export default BenefitPageLayout;
