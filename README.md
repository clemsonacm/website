ACM Website
===========

Right now this is only a mockup and a partial implementation. The idea is a website that looks (and interacts if you have JavaScript!) like an emacs session.


Building
--------

The website uses the [Hugo](http://gohugo.io/) static site generator. If you have [Go](http://golang.org/) installed, installation is as easy as 'go get github.com/spf13/hugo'.

### Static Files

To generate static files, run the following command and check the 'public' folder for generated files.

```sh
$ hugo
```

### Development Server

To run a server that watches for file changes and automatically updates when source files are changed, run the following command and navigate to [http://localhost:1313/acm/]() in your web browser.

```sh
$ hugo server -w
```


Design Goals
------------

- have fully semantic HTML (i.e. no `<div>` soup and be easily human readable in raw HTML)
- look like a potential emacs session
- support emacs ("Escape Meta Alt Control Shift") shortcuts for basic functions (to start with, it will only support changing buffers)
- have a working command line with a joke or two (like http://uni.xkcd.com/)
- easy to navigate (potential pages are easy to find and go to for "point-and-click" users)
- have content be easily readable (so no tiny terminal font like many of us might be accustomed to)


Inquiries
---------

Direct suggestions, comments, inquiries, hate-mail to [fmclane@clemson.edu](mailto:fmclane@clemson.edu).
