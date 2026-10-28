export function MovieGrid() {
     return (
          <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
               <div
                    aria-label="Empty movie grid"
                    className="grid min-h-96 grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-4 rounded-lg border border-dashed border-border"
               />
          </div>
     );
}
