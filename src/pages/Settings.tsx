import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { Input } from "@/components/ui/Input";

export default function Settings() {
     const [folderPath, setFolderPath] = useState("");
     const [error, setError] = useState<string | null>(null);

     async function selectFolder() {
          setError(null);

          try {
               const selection = await open({
                    directory: true,
                    multiple: false,
               });

               if (typeof selection === "string") {
                    setFolderPath(selection);
               }
          } catch (error) {
               console.error("Unable to select folder:", error);
               setError("Unable to open the folder picker. Please try again.");
          }
     }

     return (
          <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
               <h1 className="text-xl font-semibold">Settings</h1>
               <div className="mt-8 max-w-2xl">
                    <label
                         className="text-sm font-medium"
                         htmlFor="media-folder"
                    >
                         Media folder
                    </label>
                    <div className="mt-2 flex gap-2">
                         <Input
                              className="flex-1"
                              id="media-folder"
                              placeholder="No folder selected"
                              readOnly
                              value={folderPath}
                         />
                         <Button
                              onClick={selectFolder}
                              type="button"
                              variant="outline"
                         >
                              <FolderOpen data-icon="inline-start" />
                              Select folder
                         </Button>
                    </div>
                    {error && (
                         <p
                              aria-live="polite"
                              className="mt-2 text-sm text-destructive"
                              role="alert"
                         >
                              {error}
                         </p>
                    )}
               </div>
          </section>
     );
}
