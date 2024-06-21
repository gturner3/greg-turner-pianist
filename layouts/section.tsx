export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1280px] px-6 pt-12 pb-2">{children}</div>
    </div>
  );
}
