export const Lines = () => (
  <div className="pointer-events-none absolute inset-0 flex justify-center">
    <div className="grid size-full max-w-7xl grid-cols-1 gap-3.5 px-4 xs:grid-cols-2 md:grid-cols-3">
      <div className="border-x border-dashed border-foreground/10" />
      <div className="border-x border-dashed border-foreground/10" />
      <div className="hidden border-x border-dashed border-foreground/10 md:block" />
    </div>
  </div>
);
