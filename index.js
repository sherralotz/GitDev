$(document).ready( function () {
    getGitJSONData();
} ); 

function getGitJSONData(){  
    getJSON("https://api.github.com/repositories/19438/commits").then(response => { 
        $('#table_id').DataTable({
            data: response, 
            columns: [
                { data: "sha", title: "Column1" },
                { data: "url", title: "Column2" },
            ]
        }); 
    });
}

// -------- REUSABLE FUNCTIONS --------
async function getJSON(url){
    response = await fetch(url);
    return response.json();
}
 