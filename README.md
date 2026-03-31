
## Build + Run
To run the program, execute
```
npm install
npm run dev
```
The program should then be running on: 
http://localhost:3000/opentrivia-frontend/

To build the program, execute
```
npm install
npm run build
```


## API generation
The API calls and DTO's can be extracted from the backend if (it's online). To do so, simply run:
```
.\fetch-api.ps1  
```
The backend is currently set to `localhost`. If the backend is on a different location, you should modify the file.

**For Linux** run:
```
npm install --save-dev openapi-typescript-codegen
curl http://127.0.0.1:8080/v3/api-docs -o openapi.json
npx openapi-typescript-codegen --input ./openapi.json --output src/api --client axios
```

# Vuetify documentation
_Most of the documentation below is auto-generated on setup. I changed relevant details._ 

## 🧱 Stack

- Framework: Vue 3 + Vite
- UI Library: Vuetify
- Language: TypeScript
- Package manager: npm

## 🧭 Start Here

- Main entry: `src/main.ts`
- Main app component: `src/App.vue`
- Main styles: `src/styles/`
- Plugin setup: `src/plugins/`

## 📁 Project Structure

- `src/main.ts` — application entry point
- `src/App.vue` — root component
- `src/api/` —    auto generated backend api structures
- `src/components/` — reusable Vue components
- `src/plugins/` — plugin registration and setup
- `src/store/` — state management
- `src/styles/` — global styles and theme settings
- `src/util/` — helper functions
- `src/views/` — main views
- `public/` — static public files

## ✨ Enabled Features

- ESLint
- Vuetify MCP
- UnoCSS + Vuetify Preset

## 💿 Install

Use your selected package manager (npm) to install dependencies:

```bash
npm install
```

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🧪 Available Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run build-only`
- `npm run type-check`
- `npm run lint`
- `npm run lint:fix`
- `npm run mcp`
- `npm run mcp:revert`

## 💪 Support Vuetify Development

This project uses Vuetify - an MIT licensed Open Source project. We are glad to welcome contributors and any support for ongoing development:

- Contribute to Vuetify and ecosystem projects: https://github.com/vuetifyjs
- Request enterprise support: https://support.vuetifyjs.com/
- Sponsor on GitHub: https://github.com/sponsors/vuetifyjs
- Support on Open Collective: https://opencollective.com/vuetify
