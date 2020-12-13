# commit-to-local
A website for a 501c3 non-profit company that helps local businesses. They connect small businesses with new customers and then negotiate a saving for that customer.

To run this site clone this repository to your local device and open index.html.

This site features a hamburger menu in the top left on small screens, multiple image headers and text for the best user experience visually, a uniquely transitioning slideshow, a pop up form, and link to seperate information capture page, hover features on buttons, as well as it is responsive on most device types. 


The classes below allow the image slide show to transfer in and out between images in a unique way. It does this by adding and removing the "active" class. It also works off of an overlap in the transition time and a difference in the borders. This slideshow is removed on small device sizes with a media query.

1.ss

2.slides

3.active

More classes used below

4.headerimagelg - used to switch out the header images with media queries

5.headerimagesm - used to switch out the header images with media queries 

6.copy - used to style text

7.non-profit - used for best visual experience in the header

8.mission-statement - used for best visual experience in the header

9.top - used to style part of the top row of images and text

10.call-2-action - used to style a link to contact page

11.bg - used to style background of the contact page

12.customer-info - used to style contact form

13.contacted - used to style text at the bottom of the contact page

MORE CLASSES ARE USED BUT THE ABOVE LISTED ARE MOST NOTABLE.

The function "function ss()" was used to identify the element with a class assigned "active" and then remove it and add it to the next image item in the div without the class "active". This was used to create the uniquely transitioning slideshow (WHICH IS REMOVED ON SMALL DEVICES).

function openForm() is used to open the pop up form and function closeForm() is used to close it.
