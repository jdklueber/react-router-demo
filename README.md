# React Router Demo Project

## How To Run This Project
1. After cloning, run `npm install` from the project directory.
2. run `npm start` to spin up the development server

## React Router Installation
First, run `npm install react-router-dom`
Then, add the following imports to your App.js:

```javascript
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
```

Then inside the `root.render()` block, do this:

```javascript
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
    </Routes>
  </BrowserRouter>
);
```

This will create a single route, displaying the `LandingPage` component.

## Creating new Routes
Each route (page) you create will need its own component for display.

To add it to your routes, add a new Route component to App.js like so:

```javascript
<Route path="/pathtopage" element={<YourComponentNameHere />}/>
```

## Links
There are two kinds of links in React Router,  `Link` and `NavLink`. 

You can get references to them via the following import statement: 

```javascript
import {Link, NavLink} from "react-router-dom";
```

`Link` is for most of your navigation purposes, and it looks like this:

```javascript
    <Link to="pathtopage">Link Contents/Text</Link>
```

This will generate a plain anchor tag with the appropriate linkage.  

For a navbar scenario where you want to know which link is active, you can use `NavLink`, which has features for detecting whether or not it is the currently active link.  Since most of the time that's just going to result in a change of style, here's how to do that:

```javascript
<NavLink
            to="messages"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
          >
            Messages
          </NavLink>
```

Or, if you have a CSS class for the active/inactive links:

```javascript
<NavLink
            to="messages"
            className={({ isActive }) =>
              isActive ? "the_active_class" : "the_inactive_class"
            }
          >
            Messages
          </NavLink>
```

## Further Info
For complete reference and tutorial, see: https://reactrouter.com/docs/en/v6