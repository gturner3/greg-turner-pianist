import Section from '@/layouts/section';
import { Link } from '@nextui-org/link';

export default function ServicesSummary() {
  return (
    <Section>
      <div className="services-summary">
        <ServiceSummary
          title="Performance"
          blurb="I offer in-home private lessons for all levels, during which you can learn repertoire as well as technique."
          anchor="performance"
        />
        <ServiceSummary
          title="Theory"
          blurb="I teach online music theory classes that complement the performance curriculum."
          anchor="theory"
        />
        <ServiceSummary
          title="History"
          blurb="My online music history class provides context for and insight into your repertoire."
          anchor="history"
        />
      </div>
    </Section>
  );
}

type ServiceSummaryProps = {
  title: string;
  blurb: string;
  anchor: string;
};

function ServiceSummary({ title, blurb, anchor }: ServiceSummaryProps) {
  return (
    <div className="text-center">
      <Link
        href={`services#${anchor}`}
        showAnchorIcon
        className="text-xl pb-4 text-primary"
      >
        {title}
      </Link>
      <p>{blurb}</p>
    </div>
  );
}
