export default function VerticalTimeline() {
  return (
    <div className="relative w-[2px] h-80 bg-neutral-800">
      <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 w-3 h-3 bg-neutral-800 border-2 border-neutral-600 rounded-full" />
      <div className="absolute left-1/2 top-3/4 transform -translate-x-1/2 w-3 h-3 bg-neutral-800 border-2 border-neutral-600 rounded-full" />
    </div>
  );
}
