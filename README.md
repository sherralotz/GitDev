# Displaying Github repo in a sortable data table

Github Page: [https://sherralotz.github.io/GitDev/index](https://sherralotz.github.io/GitDev/index)

## About:
This page should display the contents of a github repo endpoint into a data table.  

To implement the table efficiently, I used a plug-in for the jQuery Javascript library called DataTables [https://datatables.net/](https://datatables.net/).  

The plug-in I used to display the data is light enough to handle the simple functionality needed which is just display certain data and make some columns sortable.  

When the page/document is ready, I'll use the fetch function with async/await to retrieve the data from the provided link. When the response is returned, I'll use the map Javascript function to return a new set of array of objects that has the specific values I'll need for my data table. Then I have to make sure the right data format is displayed for the best user experience. After the right data is displayed, I make sure the name and date column is sorting their corresponding values as expected.
 
Github repo endpoint: [https://api.github.com/repositories/19438/commits](hhttps://api.github.com/repositories/19438/commits)

### Data table columns:
* Authors Name (sortable)
* Author Commit Date (sortable)
* Message
* Commit URL 


## License  
© Sherra Jaye T. Paltingca