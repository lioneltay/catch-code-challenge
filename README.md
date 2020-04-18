## Running the project

```
npm install
npm run dev
```

dev server will be available at http://localhost:5000

## Packages

- Styling with `styled-components` using both the `styled` function and the `css` prop.
  - The `css` prop allows you to write 'inline styles' that get transpiled into `styled` function calls and so are just as performant but allows you to easily collocate styles.
- `@testing-library/react` allows testing of the application through 'user like' behaviours such as searching for text or labels and interacting the way a user would (clicks/typing).
- `@material-ui/core`

## Folder structure

- `src/components` contains app specific components
- `src/lib/components` contains reusable generic components that are not app specific
- `src/lib/utils` contains reusable generic utility functions
- `src/testing` contains testing helpers, including a wrapped version of `@testing-library/react` and mock data generators
- `src/services` contains app specific services. Only contains the mock api for now but would contain other services like analytics, persistent storage features, etc...
- `src/styles` defines generic global utility classes
- `src/theme.tsx` contains global theme constants
- `src/types` contains global typescript types
