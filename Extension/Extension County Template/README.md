#EXTENSION TO DO LIST

##In Progress:
- Weird issue with scrolling/visibility on personnel list component.
- Add margin-to to read more button for tiled list components
- Fix all the issues Gabe brought up in terms of component testing.
- Now that the small screen tab issue has been fixed, there is now a tabIndex problem, that I am really not sure how to solve.  It just behaves very strangely on the Extension template.  One of the things that will need to be added is the the ability to tab to the hamburger icon and activate it.
- Move masonry from jquery plugin in to css only version
- Find a way to add a label to the large desktop search.  It may have to be there, but have a visibility of hidden?  Or a .show-for-sr class.

##Completed:
- Moved inline JS out of Office Information Component JSP and added it to custom.js while fixing the scrolling problem for maps on the page, including multiple maps, while still maintaining their functionality.
- On small screens, using tab will no longer reveal the off-canvas menu.  This change has NOT been pushed to dev yet.
- Contact form styling improved - both the submit button and the captcha button.  But it appears as though the label styling is controlled by AEM, and I am not sure how to change it.
