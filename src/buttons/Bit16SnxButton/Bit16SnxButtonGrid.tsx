import { FC } from 'react';

import MainSection from '@/components/UI/MainSection';
import { GridItem } from '@/components/UI/ButtonGrid';
import Title from '@/components/Title';
import Bit16SnxButton from './Bit16SnxButton';

const Bit16SnxButtonGrid: FC = () => {
  return (
    <MainSection
      color="#030A1D"
      title={
        <Title tag="h2" variant="regular">
          16Bit Snx Buttons
        </Title>
      }
      backgroundColor="#E5E5E5"
    >
      <GridItem>
        <Bit16SnxButton background="green">Start</Bit16SnxButton>
      </GridItem>
      <GridItem>
        <Bit16SnxButton background="red">Exit</Bit16SnxButton>
      </GridItem>
      <GridItem>
        <Bit16SnxButton background="yellow">Pause</Bit16SnxButton>
      </GridItem>
      <GridItem>
        <Bit16SnxButton background="blue">Options</Bit16SnxButton>
      </GridItem>
    </MainSection>
  );
};
export default Bit16SnxButtonGrid;
