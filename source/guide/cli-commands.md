title: CLI Commands
---
## Options

#### Version
Displays version information.
``` bash
$ quasar -V
$ quasar version
```

#### Help
Displays list of all commands and options.
``` bash
$ quasar
$ quasar -h
```

#### Verbose Mode
If you want to get more information on what's going on (for example when building App), turn on the debug flag (`-d` option):
``` bash
$ quasar -d ..........
```

## Create App

Initializes a project folder with everything necessary.
``` bash
$ quasar new [folder-name]
```

## Build App

### Make a Build
Generates a folder called `/dist` which contains sourcemaps and everything needed to debug for Development or compiled, minified, optimized for Production.

``` bash
# Make a Development build
$ quasar build

# Make a Production build
$ quasar build -p # or --production
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

### Cleaning
Cleans App folder from build artifacts.

``` bash
$ quasar clean
```

### Monitoring & Auto-Rebuild
Monitors source code files (Javascript files, CSS files, assets, ...) for changes and when that happens it auto-rebuilds to update the end-user code.

``` bash
# monitor and auto-rebuild for Development
$ quasar monitor

# monitor and auto-rebuild for Production
$ quasar monitor -p # or --production
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

## Live Preview
You can even live preview the build in your browser(s). Whenever you modify anything in the source code (Javascript files, CSS files, assets, ...), it gets rebuilt and the browser(s) refreshed.

Furthermore, clicks, scroll and form input are automatically synchronized between all opened browsers.
``` bash
# Live Preview Development build
$ quasar preview

# Live Preview Production build
$ quasar preview -p # or --production
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

> **NOTE**
> CSS is injected into the browser(s) so the page is not required to reload, which is really cool.

## Responsive Live Preview
Want to quickly see how your App handles different device screen sizes? This is the command that you should use. Recommended (and designed) to be viewed from a desktop browser.

Watches the source code (and reloads if necessary or injects CSS without page reload) but clicks, scroll and form input are *NOT* automatically synchronized between all opened browsers as for previous command.

``` bash
# Responsive Live Preview Development build
$ quasar responsive

# Responsive Live Preview Production build
$ quasar responsive -p # or --production
```
![Responsive Preview Screen](/images/preview.png "Responsive Preview Screen")

## Running Test Suites
Write tests and run them with the out of the box test-pack which includes Karma, Mocha, Chai & Sinon.
``` bash
$ quasar test
```
For more details on how to tweak testing see [Configuring Quasar App](/guide/quasar-app-configuration.html) and look for `test` property description.

## Pages

Pages are the core of any Quasar App. Think of a Quasar Page as a webpage which has its own View, Controller and Model.

### Create Page
``` bash
$ quasar page [page-name]
```

### Rename Page
``` bash
$ quasar page [current-page-name] [new-page-name]
```

### Copy Page
Create a new Page using another Page as template.
``` bash
$ quasar page -c [source-page-name] [new-page-name]
```

## Layouts

Layouts are the elements that wrap one or multiple pages (like navigational bar).

### Create Layout
``` bash
$ quasar layout [layout-name]
```

### Rename Layout
``` bash
$ quasar layout [current-layout-name] [new-layout-name]
```

### Copy Layout
Create a new Layout using another Layout as template.
``` bash
$ quasar layout -c [source-layout-name] [new-layout-name]
```

## Native Mobile App Wrapper
You can use Cordova to wrap your Quasar App into a native mobile App. Make sure you have the platform SDK installed on your machine, like [Android SDK](https://developer.android.com/studio/index.html#download).

**Read more about how to use Quasar CLI to manage the Cordova wrapper [here](/guide/native-mobile-app-wrapper.html).**

Some of the CLI commands available:

``` bash
# wrapping your App
$ quasar wrap

# add a platform
$ quasar wrap platform add android

# executing a Cordova command
$ quasar wrap [Cordova command arguments]

# some more Cordova commands examples:
$ quasar wrap plugin add cordova-plugin-battery-status
$ quasar wrap run
$ quasar wrap build
```

> **TIP**
> Use `quasar build` in conjunction with `quasar wrap run` when you frequently test on your mobile: `quasar build && quasar wrap run`.

## Serve Static-Content Folder
You are able to create an ad-hoc web server to serve static-content web files from a folder. Browser sessions are automatically refreshed when content changes. User clicks/scroll can be synchronized.

``` bash
# Serve current folder:
$ quasar serve

# ..or serve a full or relative path
$ quasar serve ./dist
$ quasar serve /work/quasar-app/dist
```

This command does not rely on Quasar Framework. Any folder with any web content can be served.

## Runtime Information
Display information about your runtime, including operating system, nodejs version, Quasar CLI version and more.

``` bash
$ quasar info
```

Output example:
``` bash
$ quasar info

 Runtime
 Quasar CLI:	 v0.1.0
 Node JS:	 v4.2.0

 Operating System
 Architecture:	 x64
 Platform:	 linux
 Release:	 3.19.0-33-generic

```