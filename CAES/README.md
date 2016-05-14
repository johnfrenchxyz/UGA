#CAES To Do List

##In Progress:

- Continue overhauling the subsite template. External scss file deleted. Scss now filters through app.css, which is cool.  We'll need to let Robby know. Style the side nav.
- Style contact form component
- Fix the landing page issue on mobile.  A possible fix would be adding links on the mobile drilldown menu.
- Style side nav for departmental pages.  It will show sibling and children pages, but parent pages will be contained to the breadcrumb.
- Move Image Gallery component to CSS masonry instead of jQuery (do this with Gabe and Robby)
- Examine plain list border issue in firefox.
- Begin thinking about style guide for the end of may.
- Talk to Robby/look at his component documentation about "Advanced Components"
- Look into components overlapping dropdown in author.
- Need to develop breadcrumbs both for site and network context.  For the network breadcrumbs > incorporate them into the site breadcrumbs: ie - CAES > Master Gardeners > Specific Master Gardener.
- Add Alumni to the Main Menu
- Expanding Search needs to autofocus on safari mobile.
- The hover on the mobile hamburger menu is not right. Only the top bar changes.

##Completed:

- Gave functionality to the image slider caption classes.
- Created an image container that crops the image in the portrait gallery / hall of fame component instead of distorting the image.  Also moved component to flexbox.
- Added style for the description of the scholarship component.
- Added caption-bottom-left, caption-bottom-right, caption-top-left, and caption-top-right to the CSS.  Tell Robby and see if he has added it to the dialog JSP.
- Added clearfix to blog post list component so the entries don't indent.
- Added street/mailing address to profile component.  Also add campus, building, and fax number.
- Added Social Media Icons in the footer of the CAES homepage.
- Added smaller, vertical layout for social media icons on the departmental page and added an title li.
- Added scholarship component box (enabled button, disabled button).  May need additional tweaking, however.
- Added "Portrait Gallery" or "Hall of Fame" component.
- Added "Image Gallery" Component
- Added "Non Personnel" Component
- Added Styles to Google Map Component
- Added JavaScipt that generates landing page links for top-level pages on the home template.
- Fixed image gallery/lightbox bug
- Fixed bug where orbit arrows would overlap main nav dropdowns.  They no longer do.
