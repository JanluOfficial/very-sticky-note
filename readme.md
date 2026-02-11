# Very Sticky Note
![icon](https://github.com/JanluOfficial/very-sticky-note/assets/95766563/03e3b95e-2052-49b9-b8b6-0082bde1187c)

A sticky note that is very sticky, and will always be on top.

### Developer Note
As of Feburary 11th, 2026, the project is now under the MIT License rather than GPLv3. This project has never used/referenced code from other repositories using GPLv3 and never had outside contributions though pull requests, which means that I am the sole author of the code and therefore am (to my knowledge) able to change the license without any issues.

I also want to thank [Stephen Blum](https://www.linkedin.com/in/stephenlb) (CTO at [PubNub](https://www.pubnub.com/)) for recently featuring this repository on his live stream and going out of his way to run it on his Mac.

### Screenshot (from v1.0.0)
![A screenshot of very sticky note!](https://github.com/JanluOfficial/very-sticky-note/assets/95766563/916c651a-302d-4419-a05e-598c6c06bd7a)
## Why does this exist?
It was initially just intended to show off a feature request for [Fluid](https://fluid.so/), but then I decided to make it into a functioning application.

## Why would I need this?
Very Sticky Note is a great way to quickly write down things, such as URLs, Facts or code snippits. You can also open <code>.txt</code> files and save them as well, making it a nice alternative to opening notepad.

## How do I get it?
### Compiling it yourself
Required Dependencies
- Node.js
- Electron

First, download the files. You can do it by
- Clicking on <code>Code</code> and then <code>Download ZIP</code>
- Cloning the repository via the GitHub Desktop App
- Cloning the repository via Git, by running <code>git clone https://github.com/janluofficial/very-sticky-note.git</code>

After cloning the repository, go to the directory and run <code>npm install --save-dev electron</code>. From there, you can run <code>npm start</code> to to run very sticky note.

### Grabbing a pre-compiled version
Head over to the <code>Releases</code> section on the right side of your screen and download the version for your operating system.

## How do I make my own version of it?
Required Dependencies
- Node.js
- Electron
- Electron Forge

After making your modifications, run the following two commands.

<code>npm install --save-dev @electron-forge/cli</code><br>
If you want to, you can run <code>npx electron-forge import</code>. However, this is most likely not required.

If all goes well, you should be able to run <code>npm run make</code> and compile it.
