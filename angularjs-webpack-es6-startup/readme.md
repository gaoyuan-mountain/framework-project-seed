angularjs-webpack-es6-startup
=====================================

A boilerplate using AngularJS, SASS, Webpack, Karma, Express, Babel. This project alse implememts a simple backend using express.
This boilerplate is also a muti-pages demo with angularjs and webpack.

---

### Getting up and running

1. Clone this repo from `https://github.com/gaoyuan-mountain/framework-project-seed.git`
2. Run `npm install` from the root directory
3. Run `npm install` from the public directory
3. Run `webpack --watch` when developing
4. Run 'webpack -p' when you  want to release
5. Run 'npm test' to make unit test
6. Run 'node www' from the root/bin directory.
7. Visit localhost:3000/intro.html in browser.

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

#### Other resources


This boilerplate uses the latest versions of the following libraries:

- [AngularJS](http://angularjs.org/)
- [SASS](http://sass-lang.com/)
- [Webpack](http://webpack.github.io/)

Along with many Webpack loaders (these can be seen in either `package.json`).

---

### AngularJS

AngularJS is a MVW (Model-View-Whatever) Javascript Framework for creating single-page web applications. In this boilerplate, it is used for all the application routing as well as all of the frontend views and logic.

The AngularJS files are all located within `/app/js`, structured in the following manner:

```
/app
  /intro
    index/
      spec/
        index.controller.spec.js  (the test case for index.controller.js)
      index.controller.js (the controller of intro/index, loaded in index.module.js)
      index.html  (template file, loaded in index.route.js)
      index.module.js (combine all resources for intro/index, loaded in intro.app.js)
      index.route.js  (define the route to this module, loaded in index.module.js)
      index.scss  (define the stylesheet, loaded in index.module.js)
    app.js   (The entrance for intro, load all sub modules)
  /services
    /user
      user.model.js (the meta structure of user)
      user.model.spec.js  (unit test)
      user.service.js
      user.service.spec.js
    startup.js  (inject all services, this module is loaded in intro/app.js and todo/app.js)
  /todo
    /index
      index.controller.js
      index.html
      index.module.js
      index.route.js
      index.scss
    app.js  (The entrance for todo, load all sub modules)
  intro.html  (intro page framework)
  todo.html (todo page framework)
/coverage (test result)
/style
  /css
    /components
      all.scss (import all components)
      input.scss (define input style)
    reset.scss  (page stylesheet reset)
  /images
karma.config.js (karma configuration)
package.json
spec.js (test case loader)
webpack.config.js (webpack configuration)
```


I am also woking on a project 'ONIGIRI' which is a workflow tools to make the comunication between FE and QA. If anyone is intrested in it, welcome to join me.
