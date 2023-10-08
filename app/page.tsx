import Hero from '@/components/Layout/Hero';
import mainHero from '@/assets//images/logo-lg.webp';
import TextWithButtons from '@/components/TextWithButtons';
import CallButton from '@/components/UI/CallButton';
import ContactButton from '@/components/UI/ContactButton';
import { formattedPhoneNumber } from '@/lib/variables';

export default function Home() {
  return (
    <main>
      <Hero heroImage={mainHero.src}>
        <TextWithButtons
          text='CALL FOR FREE BOND ADVICE'
          subtext={formattedPhoneNumber}
          buttons={[
            <CallButton key='call-btn' />,
            <ContactButton key='contact-btn' />
          ]}
        />
      </Hero>
    </main>
  );
}
