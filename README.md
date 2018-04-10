-----CONTENT MANIPULATION-------------

Task description
You are going to create a mobile first responsive web-page about making green energy affordable for people with average budget. The web-page will have nav-bar, masthead, main-content and footer. Nav-bar has 4 items: home, about, contact and blog. Masthead has to have a background image and a tag-line.

For main-content, you will have 3 buttons and 3 contents (your 3 solutions about making a clean energy affordable for majority of people) stored in an object. On the page load, the first content will be hard-coded HTML. This content will be replaced by another content from JavaScript object once a button is clicked. The first button (because it corresponds to the first content displayed on the page-load) will have a different style than other two (indicating active button). As user clicks any button, id "active-button" will move to the clicked button and corresponding content will be displayed. Size of images and fonts change with the screen-width. Break-point for responsive design will be at: 30rem. Max-width of content is 60rem. This means that content has to be centered in the view-port once 60rem of content-width is exceeded.

Footer needs to have links to at least 3 social media networks (use icon-font).

Order of Operations
Create directories and files

Create wire-frame and mockup

Complete HTML

Complete CSS

Complete JavaScript

Directories - Structure
Directory tree (including names) has to look like this:

/green-energy/
         /css/
         /img/
         /wireframe-mockup/
         /js/
         /index.html
Fonts
You need to use serif/sans-serif Google font pair. Serif font is for headings and sans-serif font is for body text. Fall-back font is going to be default serif/sans-serif font.

References:

http://fontpair.co (Links to an external site.)Links to an external site.

https://fonts.google.com (Links to an external site.)Links to an external site.

Line height ratio has to be between 1.4 and 1.6. You need to use following font-sizes:

Mobile View: 0.75rem

Tablet/Desktop View: 1rem

Colors
Color scheme needs to be analogous. List the hexadecimal values of colors (as CSS comment) inside CSS style-sheet .

HTML elements with background color will expand across the screen while content is centered in the middle of view-port and has limited width.

Reference: color.adobe.com (Links to an external site.)Links to an external site.

Images
You could use your own images or choose images from http://www.freeimages.com/ or http://www.morguefile.com/.

All images have to be OPTIMIZED for web.

Set the background image for masthead.

The screen-shots below are not to be replicated in design nor content - they only represent the guidelines for required layout and alignment. The topic is already given in the task description. You will choose your color-scheme, your images and your font-family (font-stack), BUT the content has to be responsive in the way that screen-shots indicate (including order of elements, alignments, horizontal and vertical gutters of white space).

Mobile View < 30rem
The gutter of white space around the content is 2rem. Everything aligned left.


AND

 30rem < Tablet/Desktop View < 60rem
Nav-bar items are floated and horizontally aligned. Main-content image-width is 25%. The image is floated - text wraps around.



Coding Guidelines
<!--
HTML:
Your buttons should have data-content attribute. The value of this attribute 
should be the same as name of the corresponding sub-object in your resources. 
Example:
<button data-content="chrome">Google Chrome</button>
-->

// JavaScript:
(function () { // Closure - wrapping your code in a "safe-bubble"    
    const resource = {
       chrome: {},
       firefox: {},
       opera: {}
    };
    
    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/img-1.jpg",
           "./img/img-2.jpg",
           "./img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in an HTMLCollection */
    
    /* 
    Complete the rest of your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    
    /* 
    Start your handleSelection function here. */
        
        /* 
        Get the reference of your HTML-container
        that will be dynamically loaded. */ 
        
        /* 
        Remove the existing main-content */
        
        /* 
        Remove the id "active-button" from the element that
        contains it prior to the click-event */

        /*
        Set the id "active-button" to the currently clicked button */
    
        /* 
        Use target property and getAttribute method to get the value
        of data-content attribute of clicked button. This will match the key of
        chosen content in resources-object. */
        
        /* 
        Create HTML:
        <h1>{heading-content}</h1>
        <img src="{img-url}" alt="{img-alt}">
        <p>{text-content}</p> */
    
        /* 
        Load the created HTML into the HTML-container for dynamic content */  
    
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register handleSelection to listen for the click event on a button */
    
}()); // Closing and invoking closure  
--Sheenam Arora

References :
Images  -   https://pixabay.com
            http://www.freeimages.com/
