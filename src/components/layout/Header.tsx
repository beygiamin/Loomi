import { Navbar } from "@/components/layout/Navbar";

export function Header() {
     return (
          <header className="border-b border-border">
               <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
                    <div className="text-sm font-medium">Logo</div>
                    <Navbar />
                    <div aria-hidden="true" className="min-w-6" />
               </div>
          </header>
     );
}
