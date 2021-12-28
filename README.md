# Smart Design System

This repository contains the design system website hosted at <a href="https://design.smart.coop/">design.smart.coop</a>. This site describes how to contribute to the design system from a design and development perspective. A big part of the site is <a href="https://design.smart.coop/development/component-documentation.html">the component documentation</a> where you can find copy/pastable HTML and CSS for common components. The Figma design files can be found on our [Figma community profile](https://www.figma.com/@smartcoop).

This website uses Bedrock in the background, which is a static site generator specialized in showing design systems. For instructions, view the README <a href="https://github.com/usebedrock/bedrock">here</a>.

## Getting started

    git clone git@github.com:smartcoop/design.git
    cd design
    npm install
    npm start

(Make sure you are using a recent version of Node.)


## Using Docker

Docker is not necessary to develop or build the design system but a
`Dockerfile` is present in this repository for your convenience. It is also
useful to document a somewhat reproducible build.

The following commands show how to build a Docker image named `design` and
serve the design system on port 5000:

```
$ docker build -t design -f Dockerfile .
$ docker run -p 5000:80 design
```

## Using Nix

Just like Docker, Nix is not necessary to develop or build the design system.
The instructions here are provided for your convenience.

The following commands show how to build the design system as a static site in
the `dist/` directory and serve it on port 5000:

```
$ nix-shell -p nodejs-14_x --run 'npm install'
$ nix-shell -p nodejs-14_x --run 'npm run-script build'
$ nix-shell -p busybox --run 'httpd -f -p 5000 -h dist'
```

## Contributing

You can contribute to this project in several ways.

* Create a pull request, that improves the code
    * Look at open issues for inspiration
    * Discuss an open issue if you need more information to solve it
* Create an issue that describes a comment you have, a problem or bug

## License

License to be determined, see https://github.com/smartcoop/design/issues/64

This text to be updated when we have a licensing logic.
