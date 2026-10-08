import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
     children: ReactNode;
};

type ErrorBoundaryState = {
     hasError: boolean;
};

export class ErrorBoundary extends Component<
     ErrorBoundaryProps,
     ErrorBoundaryState
> {
     state: ErrorBoundaryState = { hasError: false };

     static getDerivedStateFromError(): ErrorBoundaryState {
          return { hasError: true };
     }

     componentDidCatch(error: Error, errorInfo: ErrorInfo) {
          console.error("Application rendering error:", error, errorInfo);
     }

     render() {
          if (this.state.hasError) {
               return (
                    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background p-6 text-foreground">
                         <h1 className="text-lg font-semibold">
                              Something went wrong.
                         </h1>
                         <button
                              className="rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                              onClick={() => window.location.reload()}
                              type="button"
                         >
                              Try again
                         </button>
                    </main>
               );
          }

          return this.props.children;
     }
}
