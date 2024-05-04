# template-react-browser-extension

an opinionated template for creating browser extensions for chromium and firefox browsers using react tailwind and shadcn-ui

## Development

This project uses [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension). Refer to the plugin documentation for more information.

### Project Setup

```sh
npm install
```

### Commands

Hot Module Reloading is used to load changes inline without requiring extension rebuilds and extension/page reloads
Currently only works in Chromium based browsers.
```sh
npm run dev
```

#### Development, Watch

Rebuilds extension on file changes. Requires a reload of the extension (and page reload if using content scripts)
```sh
npm run watch
```

#### Production

Minifies and optimizes extension build
```sh
npm run build
```

### Load extension in browser

Loads the contents of the dist directory into the specified browser
```sh
npm run serve:chrome
```

```sh
npm run serve:firefox
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension)