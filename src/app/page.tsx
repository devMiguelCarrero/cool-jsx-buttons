import ButtonGrid, { GridItem } from '@/components/UI/ButtonGrid';
import MainSection from '@/components/UI/MainSection';
import Gaming3DButton from '@/buttons/Gaming3DButton/Gaming3DButton';
import VegasNeonButton from '@/buttons/VegasNeonButton/VegasNeonButton';
import SimpleDownloadButton from '@/buttons/SimpleDownloadButton/SimpleDownloadButton';

export default function Home() {
  return (
    <main>
      <ButtonGrid>
        <MainSection>
          <GridItem>
            <Gaming3DButton>OK!</Gaming3DButton>
          </GridItem>
          <GridItem>
            <Gaming3DButton baseType="rounded" buttonType="danger">
              X
            </Gaming3DButton>
          </GridItem>
          <GridItem>
            <Gaming3DButton buttonType="warning">warning</Gaming3DButton>
          </GridItem>
          <GridItem>
            <Gaming3DButton buttonType="success">success</Gaming3DButton>
          </GridItem>
          <GridItem>
            <Gaming3DButton disabled={true}>disabled</Gaming3DButton>
          </GridItem>
        </MainSection>
        <MainSection backgroundColor="#030A1D">
          <GridItem>
            <VegasNeonButton>OK!</VegasNeonButton>
          </GridItem>
          <GridItem>
            <VegasNeonButton buttonType="intermitent">OK!</VegasNeonButton>
          </GridItem>
        </MainSection>
        <MainSection backgroundColor="#FAF4E4">
          <GridItem>
            <SimpleDownloadButton>DOWNLOAD</SimpleDownloadButton>
          </GridItem>
        </MainSection>
      </ButtonGrid>
    </main>
  );
}
