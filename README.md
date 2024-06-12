<p align="center">
   <img src="assets/icon.png" width="50%" height="50%" alt="Icon">
</p>


<h1 align="center">GPTWrapped</h1>

This is an open-source Electron app that acts as a simple wrapper around ChatGPT. It allows you to interact with the API and receive responses from the GPT-3.5 model through an easy-to-use user interface.

## Setup

1. Clone the repository

```bash
git clone https://github.com/SelimWaly/GPTWrapped.git
```   

2. Install the necessary dependencies

```bash
npm install
```

3. Packaging for distribution

```bash
npm install electron-packager -g
```

4. Compile with electron

```bash
electron-packager . --platform=win32 --arch=x64
```

This will create a executable file of your app in a folder named 'YourApp-win32-x64' in the root directory.
You can replace the platform and arch options according to your target platform and architecture.


## License
This project is licensed under the `MIT License`. See the `LICENSE file` for details.


