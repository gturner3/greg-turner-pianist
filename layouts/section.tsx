export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center px-6 py-16">
      <div className="w-full max-w-[1280px]">{children}</div>
    </div>
  );
}
