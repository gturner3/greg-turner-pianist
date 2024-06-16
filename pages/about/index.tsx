import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Section>
        <div className="flex flex-row flex-wrap about">
          <div className="image-container">
            <img
              src="/greg_headshot.JPG"
              className="image"
            />
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
