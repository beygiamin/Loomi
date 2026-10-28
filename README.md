# Loomi

Loomi is a desktop application for organizing and enjoying movies stored on your
computer. Add directories containing your film files, and Loomi aims to build a
browsable movie library by matching those files with metadata, artwork, and
ratings from open APIs.

The project is currently under development. The desktop shell and frontend are
in place; local-library scanning and metadata/API integration are planned
features and may not be available yet.

## Built with

- [Tauri 2](https://v2.tauri.app/) for the desktop application
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for frontend development and builds
- [Rust](https://www.rust-lang.org/) for the Tauri application

## Prerequisites

Install the following before building:

- Node.js (an active LTS version) and npm
- Rust, installed with [rustup](https://rustup.rs/)
- The native system dependencies required by Tauri for your operating system

See the official [Tauri prerequisites guide](https://v2.tauri.app/start/prerequisites/)
for platform-specific setup instructions. On Windows, install the Microsoft C++
Build Tools and WebView2; on macOS, install Xcode Command Line Tools; on Linux,
install the distribution's WebKitGTK and other Tauri development packages.

## Get started

Clone the repository, change into the project directory, and install the
JavaScript dependencies:

```sh
git clone https://github.com/beygiamin/Loomi
cd Loomi
npm ci
```

### Run the desktop app in development

```sh
npm run tauri dev
```

This starts the Vite development server and launches the Tauri desktop window.

### Build the frontend

```sh
npm run build
```

This runs the TypeScript check and creates the production frontend in `dist/`.

### Build desktop installers

```sh
npm run tauri build
```

Tauri compiles the Rust application and packages the app for the current
platform. See the [Tauri distribution guide](https://v2.tauri.app/distribute/)
for platform-specific packaging details.

### Run tests

```sh
npm test
```

## Project layout

- `src/app/` — application setup, routing, and providers
- `src/features/` — feature-owned pages and components
- `src/components/` — shared layout and UI components
- `src/` — shared configuration, hooks, localization, and styles
- `src-tauri/` — Tauri configuration and Rust desktop application
- `public/` — Static frontend assets

## Language support

The interface supports English (the default) and Persian through `i18next`.
Change languages from Settings; the selection is saved between launches.
Persian mode sets the document language and switches the interface to
right-to-left layout. Translation resources are in
`src/i18n/locales/<language>/translation.json`.

## Movie metadata and artwork

Loomi is intended to use open APIs to look up movie details, posters, and
ratings for films in selected local directories. API providers, matching
behavior, and any required API credentials will be documented here as that
functionality is implemented.
