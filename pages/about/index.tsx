import DefaultLayout from '@/layouts/default';
import Page from '@/layouts/page';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Page>
        <div className="row">
          <div className="about-image-container">
            <img
              src="/greg_headshot.JPG"
              className="about-image"
            />
          </div>
          About
        </div>
      </Page>
    </DefaultLayout>
  );
}
