export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12 opacity-30">
      <div className="h-px w-32 bg-[#f2ca50]" />
      <svg
        className="mx-4 text-[#f2ca50] fill-[#f2ca50]"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <polygon points="8,0 10,6 16,6 11,9.5 13,16 8,12 3,16 5,9.5 0,6 6,6" />
      </svg>
      <div className="h-px w-32 bg-[#f2ca50]" />
    </div>
  );
}
