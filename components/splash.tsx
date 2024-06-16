export default function Splash() {
  return (
    <div className="splash-container">
      <img
        src="/greg_at_piano.png"
        className="w-full h-full object-cover splash-sm md:splash-md"
      />
      <div className="splash-overlay" />
      <div className="splash-overlay-text">
        <div>
          <h1 className="splash-header">Greg Turner</h1>
          <h3 className="splash-subheader">Pianist and Educator</h3>
        </div>
      </div>
    </div>
  );
}
