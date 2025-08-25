# Namaste_React
Implementing The concepts from NamasteDev's, NamasteReact course (Coding and Theory)



1. What is Emmet?

Emmet is a productivity tool (built into VS Code and many editors) that lets you write short abbreviations that expand into full-fledged HTML or CSS code.
Example: typing ul>li*5 → expands to 5 list items inside an unordered list.
It speeds up front-end development, reduces repetitive typing, and improves coding efficiency.

2. Difference between a Library and a Framework?

Library: A collection of reusable functions you call when you need them.
You’re in control. Example: React (you decide where and how to use it).

Framework: Provides a structure and calls your code in predefined places.
The framework is in control. Example: Angular, Spring.
👉 Rule of thumb: Libraries give you freedom, frameworks give you structure.

3. What is CDN? Why do we use it?

A Content Delivery Network (CDN) is a distributed network of servers that deliver static assets (like JS, CSS, images) from a server closest to the user.
Why we use it:

Faster load times (low latency)

Reduced server load

High availability and redundancy

Caching across multiple regions

4. Why is React known as React?

React is named so because it was designed to react to changes in state and efficiently update the UI. Instead of manipulating the DOM directly, React uses a Virtual DOM and reconciles only the parts that need to be updated — a reactive approach.

5. What is crossorigin in script tag?

The crossorigin attribute is used when loading scripts from a different origin (like a CDN). It tells the browser how to handle CORS (Cross-Origin Resource Sharing).

anonymous: Sends no credentials (cookies/auth headers).

use-credentials: Sends credentials.
Useful for things like subresource integrity (SRI) checks, where the browser verifies the script hasn’t been tampered with.

6. Difference between React and ReactDOM?

React: The core library — defines components, hooks, state, JSX, and rendering logic.

ReactDOM: Handles rendering React components to the DOM in a browser environment.
👉 Think of React as the "brain" and ReactDOM as the "hands" that put it into the web page.

7. Difference between react.development.js and react.production.js via CDN?

Development build:

Larger size

Includes helpful error messages, warnings, and debug tools

Slower performance (intended for dev environment)

Production build:

Minified, optimized

No warnings or extra checks

Faster runtime performance (intended for deployment)

8. What is async and defer?

Both are attributes for <script> that affect how JS files load relative to HTML parsing.

async: Loads the script in parallel with HTML parsing and executes immediately once downloaded → non-blocking, but execution order isn’t guaranteed.

defer: Loads script in parallel, but execution waits until HTML parsing is complete → non-blocking, but maintains order.
👉 Use defer for predictable scripts, async for independent scripts like analytics.

9. What is an Arrow Function?

Arrow functions (()=>{}) are a shorter syntax for writing functions in JS.
Key differences from normal functions:

No own this binding → they inherit this from the parent scope (lexical scope).

Can’t be used as constructors.

Cleaner, more concise syntax.
Example:

const add = (a, b) => a + b;
