# VSCode scriptRunner bug

This repository demonstrates a bug where, in subdirectories, VSCode’s package manager detection for the "npm.scriptRunner" setting does not work as expected. It defaults to npm instead of respecting the "auto" setting (and picking up pnpm in my case).

## The issue:
In my polyglot monorepo setup, when running package.json scripts with the VSCode Explorer "NPM Scripts" view, these scripts would always execute with npm and not pick up that I am using pnpm despite having "npm.scriptRunner" set to "auto". Also initial install with `Run Install` in the Explorer's NPM Scripts view also defaults to npm despite the presence of a `pnpm-lock.yaml`.

## Reproduction
1. Ensure you have Node, PNPM, and NPM installed.
2. The [`package.json`](./bug/package.json) in the `bug` directory contains 3 scripts you may run:
    1. `bug`: will print a simple message.
    2. `script`: will print a message telling you what package manager you ran the command with using the `package-manager-detector` library.
    3. `detect`: will print a message telling you what package manager you ran the command with using a user agent check.


## Workarounds:
- Set the package manager explicitly
  - Add "npm.scriptRunner": "pnpm" to your VSCode settings.
- Add a root-level package.json and dependency
  - Create a package.json in the repo root, install at least one dependency, and ensure a `pnpm-lock.yaml` and/or `node_modules/.modules.yaml` file exists.
- Pull all of the files out of the `bug` directory into the top level and note that PNPM is picked up properly.

## Ineffective Changes:
- Adding "packageManager": "pnpm@10.14.0" to package.json.
- Setting "npm.packageManager" in VSCode settings.

## Info:

### VSCode Details:
- Version: 1.103.1 (user setup)
- Commit: 360a4e4fd251bfce169a4ddf857c7d25d1ad40da
- Date: 2025-08-12T16:25:40.542Z
- Electron: 37.2.3
- ElectronBuildId: 12035395
- Chromium: 138.0.7204.100
- Node.js: 22.17.0
- V8: 13.8.500258-electron.0
- OS: Windows_NT x64 10.0.26100

### Extensions
None

### OS Details
- Edition	Windows 11 Pro
- Version	24H2
- Installed on	12/6/2024
- OS build	26100.4770
- Experience	Windows Feature Experience Pack 1000.26100.197.0

### Node & Package Manager Versions
- Node: 24.5.0
- NPM: 11.5.2
- PNPM: 10.14.0
- Yarn: 1.22.22
- Bun: 1.2.20