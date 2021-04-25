## link https://www.youtube.com/watch?v=4UZrsTqkcW4

# Usefull extentions:
dsnajder.ex7-react-js-snippets
automatically create code snippet on shortcut

JSX - Javascript XML
this is the type that must be return from a react Component
A way to write HTML code in javascript
You could write something like this:
```javascript
function generateJSX() {
    return (
    <div>
        <h1>This is the header</h1>
    </div>
    );
}
```

## JSX rules:
1. Returns a single element<br>
    1. OK: <div>anything, could be a whole webpage could go here</div>
    2. NOT OK: <div></div><div></div>. This counts as two elements of div.
2. Introduction of fragments:<br>
    1. To honor the #1 rule, we could wrap everything in another div: <div><div></div><div></div></div> but this doesn't look very good. What we do instead is to wrap everything inside a fragment: <>....</>. It becomes this: <><div></div><div></div></>
    2. for outer element, use one of these: div, section, artical, fragment
3. Use camelCase for attributes: <button onClick <=== not "onclick">
4. To insert javascript code inside the JSX, use {} <div style={javscript goes here}>.<br>easy to be confused case: <div stype={{}}>
    1. The first {} is for the interpreter understands that we're going to use javascript.
    2. The second pairs of {} is the object literal syntax of javascript. So this look special but not that special. We essentially say that use a javascript object for style.

# props
props are an object that contains all the attributes you assign to your component in JSX that will be passed to the component controller (aka the function that will return the JSX of that component.

# React hook
