# gulp-playground

A place to test gulp tasks.

## Requirements

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/) 
    - Read here for some [tips on Windows](http://jpapa.me/winnode)
    - open command prompt as administrator
        - type `choco install nodejs`
        - type `choco install nodejs.install`
- On OSX you can alleviate the need to run as sudo by [following these instructions](http://jpapa.me/nomoresudo). I highly recommend this step on OSX
- Open terminal
- Type `npm install -g node-inspector bower gulp`

## Quick Start

```bash
$ npm install
$ bower install
$ npm start
```

### Tips

http://stackoverflow.com/questions/32770896/nodes-del-command-callback-not-firing

As of version 2.* node's del changed to return a promise instead of a callback.
