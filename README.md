# SoundCloud-Desktop 🎧
Unofficial Desktop version of SoundCloud using ElectronJS

* This repository contains the code that was used to develop the desktop client application. 
* Issues and Pull requests are accepted.
* Anyone can fork the repository and can develop their own versions of the Application.
* This is not a stable version since the underlying software is using chromium which takes a lot of storage.

## Download ⬇️

Downloadable binary's are available on releases

🔖 Latest version : v1.0 for Linux environment can be downloaded from [here](https://github.com/arjunvijayanathakurup/SoundCloud-Desktop/releases/download/v1.0/soundcloud_1.0.0_amd64.deb)


# Manual binary creation ⚒️

## Cloning repository    
* __Clone the repository to your computer__

```bash
    $ git clone https://github.com/arjunvijayanathakurup/SoundCloud-Desktop.git
    $ cd SoundCloud-Desktop/
```
---
## Run Bundlers

__For Windows__ 

```bash
    > npm run package-win
```

__For Mac__

```bash
    $ npm run package-mac
```

__For Linux__

```bash
    $ npm run package-linux
```
---

## Create executables 🔃

__For Windows__

```bash
    > npm run create-installer-win
```

__For Mac__

```bash
    $ npm run create-installer-mac
```

__For Linux__

```bash
    $ npm run create-debian-installer
```

> Executable binary files can be found in the `SoundCloud-Desktop/release-builds/installers` folder

Made with :hearts:
