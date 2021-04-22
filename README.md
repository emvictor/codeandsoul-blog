<div style="font-size:20px">
  <h1>NextJS Blog</h1>
</div>

# About The Project

## Preview

The project can be previewed on https://codeandsoul-blog-emvictor.vercel.app/

<br/>

## Overview

This blog app is made with Next.js, Axios and styled-components.

It shows all the posts from https://jsonplaceholder.typicode.com/posts with two different views.

<br/>

## Features

### Next SSG

With Next's SSG functionality, the app loads the static posts' pages very fast, providig almost instantaneous navigation. It's also easier to make SEO improvements.

### Post List

The main view presents a post list with all the posts from the forementioned API separately and fully clickable.

### Post Page

The second view presents the post with Title, Body and presents a Read More section.

### Read More

The Read More section presents the four latest posts (based in the post id, but easily interchanged by editing the API) excluding the actual post showed on screen.

### Responsive Design

The app is fully responsive, working in both desktop and mobile.

<br/>

## Screenshots

<br/>

<img src="https://i.imgur.com/JgtYVjb.jpg" alt="Screenshot 1"
width="350"
height="200">

<img src="https://i.imgur.com/satlOs2.jpg" alt="Screenshot 2"
width="350"
height="200">

<img src="https://i.imgur.com/TeoOoE8.jpg" alt="Screenshot 3"
width="234"
height="318">

<img src="https://i.imgur.com/yzDOHI9.jpg" alt="Screenshot 4"
width="221"
height="322">


# Setting Up

### Requirements

- Node 14.4.x or up
- Yarn (or npm)

 <br/>

### Installing the dependencies

```
$ yarn install
```

<br/>

## Available Scripts

In the project directory, you can run:

 <br/> 
 
### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 <br/>

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
