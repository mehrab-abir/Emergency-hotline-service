# Emergency-hotline-service
1. getElementByID is used to get a specific html element that has a unique id.

getElementsByClassName captures all html element with the class name and returns a HTMLCollection of those classes which is like an array but not exactly an array.

querySelector returns the first element that matches a css class or id, it takes the class/id name exactly as css selecting style.

querySelectorAll returns a NodeList of all elements that matche a css class or id.

2. To create a new element, we use document.createElement(), inside the bracket, we have to put the tag name inside "". Then, we have to select the html element in which we want to insert the new element, we use appendChild() to insert the new element as a child of the existing element.

3. Event Bubbling: When an event happnes on an element, it runs the event handler on that element first. Then it climbs upward, it goes to its parent element, then the parent's parent, then parent's of that parent and so on, untill it reaches the document object. This is called event bubbling.

4. Event delegation is a technique where we can attach an event listener to a parent element to handle events on its child elements instaed of adding event on children seperatly. It is useful because it makes the code clean, by letting us write less code. It also adds the events to the children those were added later, so its dynamic. We don't have to loop over all children, instaed event delegation allow us to handle events on children by applying the event on the parent, this way, it makes the code efficient.

5. preventDefault() -> when a button is put inside a form, and an event listener is applied, after clicking that button, the whole page gets reloaded by default. preventDefault() is used to prevent that automatic reloading.

stopPropagation() methode prevents event bubbling, it stops an event just where it was triggered, instead of letting the event go up to its parent and parent's parent etc.

visit : https://mehrab-abir.github.io/Emergency-hotline-service/
