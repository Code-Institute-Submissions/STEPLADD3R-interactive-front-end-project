# Interactive Frontend Development Milestone Project
## By Stuart Green

### Project Overview
I was tasked with creating one of three things, I decided to go with the Google Maps challenge as I thought it'd be something that I'd be utilising more often than the other two projects for my intended line of work. Nevertheless, I wanted to try to incorporate the Data Visualisation into my Google Maps app anyway, because I thought of the idea of a place where the user can come, and see places that are great for holiday destinations, be able to visually see on the map what amenities etc. there are around the towns/cities and also be able to view more information. The additional information, I thought would be cool to show as data visualisations, so that's where the two tied together.

### User Stories
* A user of the website wants to be able to view locations around the world: They can do this by either viewing the popular destinations predetermined by the application or by using the search field with autocomplete on the homepage.

* A user would like to search for a popular location using the predefined options:
    * The user could either use the menu at the top of the application and simply click on their chosen location, which would then scroll them down to the map, showing details about said location.
    * Alternatively, the user could scroll down to the map, and click on the locations already predefined when the application loads.

* A user would like to search for a location themselves:
    * The user would need to scroll down to the map, and use the 'Enter a Destination' input field to begin searching, this input field has autocomplete.
    * Then, once they are happy, simply click the large search button to find the location / attractions.

* A user would like to filter their search:
    * The user would need to scroll down to the map, and use the 'Enter a Destination' input field to begin searching, this input field has autocomplete.
    * Then, using the dropdown to the side titled 'Filter the results', they could select as many options as they wish out of the list to filter by.
    * Then, once they are happy, simply click the large search button to find the location / attractions.

* A user would like to go back to the main map overview:
    * The user could click on the 'Reset Map' button to be returned to the main map overview.

* A user would like to view interesting facts / stats about a predefined country:
    * The user could scroll down to the bottom of the homepage, and click on one of the three boxes to learn more about a specific country.
    * They can see a brief overview, some popular locations and some data visualisations about cool facts such as tourism info / that countries foods of choice.

* As the owner of the website, I'd like to help people find their ideal holidays by offering a way for them to find tourist attractions and show them information regarding the destination so that they can make an informed decision on where to travel. In the future, maybe I could monetize the website via ads, or offer a link through to airlines with an affiliated link.

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
To test my project, I used a tool called [Browserstack]() which allows you to access on-demand browsers, operating systems and mobile devices. Using this tool, I tested my website on multiple browsers, devices and operating systems such as:

1. iPhone (5 through to X)
2. iPad
3. iPad Pro
4. Huawei P20 Pro
5. Samsung Galaxy S10
6. Samsung Galaxy Tab
7. Google Chrome, Safari, Firefox, Microsoft Edge and IE11

I also manually tested the website myself to ensure that functions and features were working as expected, such as:

1. Checking links on the menus to ensure they work (header/footer menus)
2. Adding a location using the destination search
3. Using filters to filter the results
4. Resetting the map
5. Chcecking the visualisations work correctly (i.e. tourism info/food data visualisations)

I have also ran my web app through the W3C Validator and it has passed with only a warning (missing a h2-h6 on the testimonial block).

I have also ran my JS through a linter (JSHint) and it comes back with no errors, it does have a couple of minor warnings but no errors.

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

The location information was sourced from two separate places, the brief description of the city was sourced from WikiPedia, and the description for the 'main attractions' sourced from the sidebar on Google (called the Knowledge Panel I believe).

All images were sources from Google as this is not a live site, if it were I would search for royalty free imagery.