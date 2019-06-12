# Interactive Frontend Development Milestone Project
## By Stuart Green

### Project Overview
I was tasked with creating one of three things, I decided to go with the Google Maps challenge as I thought it'd be something that I'd be utilising more often than the other two projects for my intended line of work. Nevertheless, I wanted to try to incorporate the Data Visualisation into my Google Maps app anyway, because I thought of the idea of a place where the user can come, and see places that are great for holiday destinations, be able to visually see on the map what amenities etc. there are around the towns/cities and also be able to view more information. The additional information, I thought would be cool to show as data visualisations, so that's where the two tied together.

### UX
This website was designed with the user in mind, I have tried to add links on multiple different locations in the page to ensure the user always has access to the places at their fingertips.

I chose to go with a very open design, leaving a lot of white space as I thought, if I was looking for a holiday, the openness would really resinate with me as of course, it's a stressful time choosing the right holiday and that's why I originally wanted to provide only locations which were pre-determined, but highly popular. I later decided, I would show the pre-determined options, but allow the user to search in case they fancied somewhere a little bit different, since my app focused mainly on Europe. Not Asia or the Americas.

I first created a lo-fi mockup of what I thought would be a nice design, I had made slight tweaks but nothing major in the hi-fi mockup I did later. These mockups/wireframe can be found in the wireframes directory.

### Features
Google Maps (Places API) the map includes pre-populated places as well as the ability for user searches.

Popups using Magnific Popup which is a developer friendly responsive lightbox plugin.

Tippy Tooltips - Tooltips on certain elements, such as the flags to allow the user to see the country.

Slick Carousel - A nice carousel that rotates images inside of the popups of the selected country/destination.

D3/DC/Crossfilter - Some data visualations also inside of the popups which show tourist information about said location.

### Technologies Used
Here's a list of technologies used:

1. HTML5 - Used for marking up the DOM of the website.
2. SCSS (CSS Pre Processor) - Used to create the CSS and styling of the website.
3. JavaScript / jQuery - Used to add functionality to the website, for example; Google Maps, D3/DC/Crossfilter, etc.
4. [Bootstrap](https://getbootstrap.com/) - Front-end Framework used mainly for the grid system.
5. [Cloud9/C9](https://c9.io) - IDE that I used to write my code / to run the code.
6. [Git](https://git-scm.com/) - I used git to ensure I had proper version control.

### Testing
I tested my project on mobile, tablet and desktop using a tool called Browserstack, screenshots can be found in the testing directory.

I also manually tested multiple elements of the website myself to ensure that they were working correctly, such as:

1. Links on the menus, i.e. header/footer
2. Adding a location, clicking around on the info windows
3. Resetting the map and ensuring markers are still stored
4. Checking visualations work correctly on click

### Deployment
To deploy my website to Github Pages was simple. I went to settings, scrolled down to Github Pages and selected my repositories master from the source and hit save.

Currently there is no difference between the deployment version and the development version but in the future, it may be cool to branch out and keep the master version running whilst using a separate branch to test new things.

### Credits
[Google Maps](https://developers.google.com/maps/documentation/) - Used for Google Maps  
[D3](https://d3js.org/) - Used for Data Visualisation  
[DC](https://dc-js.github.io/dc.js/) - Used for Data Visualisation  
[Crossfilter](https://square.github.io/crossfilter/) - Used for Data Visualisation  
[Tippy](https://atomiks.github.io/tippyjs/) - Used for setting up tooltips  
[Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/) - Used for creating the popup modals  