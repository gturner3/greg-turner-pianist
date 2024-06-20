import Section from '@/layouts/section';

export default function AboutSummary() {
  return (
    <Section>
      <div className="about-summary">
        <div className="about-summary-text">
          <div>
            <h1 className="about-summary-h1">About Me</h1>
            <p>
              I am an NYC based pianist and educator with years of experience
              teaching a wide range of ages and experience levels. I’m excited
              to help guide you through your musical journey, wherever you may
              be in it. I believe every student is capable of not only achieving
              their goals at the piano and but of developing a deeper
              appreciation for music while doing it. Through my passion and
              enthusiasm for music, my goal for every student is to get them as
              excited about making music as I am.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/greg_headshot.JPG"
            className="about-image"
          />
        </div>
      </div>
    </Section>
  );
}
