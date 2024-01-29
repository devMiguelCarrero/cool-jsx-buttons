import ButtonGrid, { GridItem } from '@/components/UI/ButtonGrid';
import MainSection from '@/components/UI/MainSection';
import Gaming3DButton from '@/buttons/Gaming3DButton/Gaming3DButton';
import VegasNeonButton from '@/buttons/VegasNeonButton/VegasNeonButton';
import SimpleDownloadButton from '@/buttons/SimpleDownloadButton/SimpleDownloadButton';
import SciFiActionButton from '@/buttons/SciFiActionButton/SciFiActionButton';
import Title from '@/components/Title';
import RepoLink from '@/components/RepoLink/RepoLink';
import DisplayButtonGrid from '@/buttons/DisplayButton/DisplayButtonGrid';
import Bit16SnxButtonGrid from '@/buttons/Bit16SnxButton/Bit16SnxButtonGrid';

export default function Home() {
  return (
    <main>
      <ButtonGrid>
        <MainSection
          title={
            <Title tag="h2" variant="regular">
              Gaming 3D Buttons
            </Title>
          }
          credits={
            <p>
              Design credits to{' '}
              <a href="https://www.behance.net/yuanzi0410" target="_blank">
                yuanzi0410
              </a>
            </p>
          }
        >
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
        <MainSection
          color="#FAFAFA"
          title={
            <Title tag="h2" variant="regular">
              Vegas Neon Buttons
            </Title>
          }
          backgroundColor="#030A1D"
        >
          <GridItem>
            <VegasNeonButton>OK!</VegasNeonButton>
          </GridItem>
          <GridItem>
            <VegasNeonButton buttonType="intermitent">OK!</VegasNeonButton>
          </GridItem>
        </MainSection>
        <MainSection
          title={
            <Title tag="h2" variant="regular">
              Simple Download Button
            </Title>
          }
          backgroundColor="#FAF4E4"
        >
          <GridItem>
            <SimpleDownloadButton>DOWNLOAD</SimpleDownloadButton>
          </GridItem>
        </MainSection>
        <MainSection
          color="#FAFAFA"
          title={
            <Title tag="h2" variant="regular">
              Sci-Fi Action Buttons
            </Title>
          }
          backgroundColor="#030A1D"
        >
          <GridItem>
            <SciFiActionButton>subscribe</SciFiActionButton>
          </GridItem>
          <GridItem>
            <SciFiActionButton variant="blue-color">continue</SciFiActionButton>
          </GridItem>
          <GridItem>
            <SciFiActionButton variant="purple-color">exit</SciFiActionButton>
          </GridItem>
          <GridItem>
            <SciFiActionButton variant="yellow-color">audit</SciFiActionButton>
          </GridItem>
        </MainSection>
        <DisplayButtonGrid />
        <Bit16SnxButtonGrid />
      </ButtonGrid>
      <RepoLink link="https://github.com/devMiguelCarrero/cool-jsx-buttons" />
    </main>
  );
}
