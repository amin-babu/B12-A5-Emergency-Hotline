## Answers of all questions

1. getElementById() selects only one element by its unique ID and return a single element. getElementsByClassName() Selects all elements with a given class and return a live HTMLCollection. querySelector() selects the first element that matches a CSS selector and return a single element. querySelectorAll() selects all elements that match a CSS selector and return static NodeList.

2. I will create a element -> const newDiv = document.createElement("div"); then add some content -> newDiv.innerText = "Hello, I’m a new div!"; then Insert it into the page -> document.body.appendChild(newDiv); 

3. When an event on a webpage starts on the element that is clicked and then moves up to its parent elements. For example, if a <div> contains a button and the button is clicked, the click event first happens on the button, then on the <div> around it, and then on the <body>. It is called “bubbling” because the event rises up through the elements like bubbles.

4. Event delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events on all its child elements. For example, if a <ul> has many <li> items, one click listener can be added to the <ul> instead of adding separate listeners to each <li>. When an <li> is clicked, the event bubbles up to the <ul>, and the listener can detect which <li> was clicked using event.target

5. The preventDefault() method stops the browser’s default action for an event. For example, clicking on a link normally opens a new page, but using preventDefault() prevents the page from opening. On the other hand, the stopPropagation() method stops the event from bubbling up to parent elements. For example, if a button inside a <div> is clicked, the event usually moves up to the <div>, but using stopPropagation() on the button prevents the <div>’s event listener from running. preventDefault() stops the default action of an element, while stopPropagation() stops the event from moving to other elements.
