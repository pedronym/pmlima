# Here's the boring stuff
This is the repo for my personal webpage hosted at https://pedrolima.dev.

It's using the Foundation CLI and Foundation Sites to generate the `dist` folder which allows me to use `Handlebars` templates to render the final HTML and Sass as the CSS pre-processor.

I have no idea as to why someone would clone this repo but, for future reference, the required steps to run and deploy the project are:

### Clone the repo
`$ git clone https://github.com/pedronym/pmlima.git`

## Install Dependencies 
###### Node.js installation required
`$ npm install`

## Serve
##### Development Version) with LiveReload served on `localhost:9000`
`$ npm start`

### Build (Generate the dist folder with compiled css and handlebars templates)
`$ npm run build`