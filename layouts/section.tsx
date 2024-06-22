type SectionProps = {
  children: React.ReactNode;
  maxWidth?: number;
};

export default function Section({ children, maxWidth }: SectionProps) {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-full max-w-[${maxWidth || 1280}px] px-6 pt-12 pb-2`}>
        {children}
      </div>
    </div>
  );
}
