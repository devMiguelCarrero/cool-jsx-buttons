'use client';

import { FC, useState } from 'react';

import MainSection from '@/components/UI/MainSection';
import { GridItem } from '@/components/UI/ButtonGrid';
import Title from '@/components/Title';
import DisplayButton from './DisplayButton';

const DisplayButtonGrid: FC = () => {
  const [activeSmall, setActiveSmall] = useState(false);
  const [activeMedium, setActiveMedium] = useState(false);
  const [activeBig, setActiveBig] = useState(false);
  const [activeMassive, setActiveMassive] = useState(false);

  const smallHandler = () => {
    setActiveSmall((previousSmall) => !previousSmall);
  };
  const mediumHandler = () => {
    setActiveMedium((previousMedium) => !previousMedium);
  };
  const bigHandler = () => {
    setActiveBig((previousBig) => !previousBig);
  };
  const massiveHandler = () => {
    setActiveMassive((previousMassive) => !previousMassive);
  };

  return (
    <MainSection
      color="#030A1D"
      title={
        <Title tag="h2" variant="regular">
          Display Button
        </Title>
      }
      backgroundColor="#ecbcbd"
    >
      <GridItem>
        <DisplayButton active={activeSmall} onClick={smallHandler} />
      </GridItem>
      <GridItem>
        <DisplayButton
          size="medium"
          active={activeMedium}
          onClick={mediumHandler}
        />
      </GridItem>
      <GridItem>
        <DisplayButton size="big" active={activeBig} onClick={bigHandler} />
      </GridItem>
      <GridItem>
        <DisplayButton
          size="massive"
          active={activeMassive}
          onClick={massiveHandler}
        />
      </GridItem>
    </MainSection>
  );
};
export default DisplayButtonGrid;
