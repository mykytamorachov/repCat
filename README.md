## Repository Catalog
-Create a web-app that queries a github service API 
(https://developer.github.com/v3/repos/) for repositories catalog 
content, parses the JSON-formatted response and displays the data.
The data consists of a list of repositories that should be shown in a
vertical scrolling list. 
 App should contain at least 3 pages (Repositories list, favorite list, 
detailed information with contributors list) 
- The UI is adaptive to desktop/mobile portrait and landscape orientations. 
- In the repositories list show the repository name, repository description,
repository link, also owner avatar and owner name.
- Each list item should be interactive 
-- Button to show contributors list, which should contain 
contributor avatar, name, url and any related information.
Contributor list should be shown in another view, with possibility to 
go back.
-- Button to mark/unmark repository as favorite. This info should 
be available after page reloads.
- Add sort functionality by repo id.
- Add pagination functionality.
- For list of favorites repositories - please add offline functionality (Cache 
images, save data within a local persistence store, etc.)

## Optional 

- Separate your app’s user interaction into a start and a catalog view.
- Implement navigation functionality with Angular UI router
- Create a single header that will stay fixed on all Screens and Transitions, 
when the user  traverses between the views  
- Cover code with Jasmine (or any various test frameworks on your 
choice) unit-tests