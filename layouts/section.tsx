export default function Section({
  children,
  id,
}: {
  children?: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      {children}
    </section>
  );
}
