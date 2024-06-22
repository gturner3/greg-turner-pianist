import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Section maxWidth={768}>
        <div>
          <h1>Request a quote</h1>
          <p>Prices may vary</p>
        </div>
      </Section>
    </DefaultLayout>
  );
}
