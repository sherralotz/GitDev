$(document).ready( function () {
    getGithubJSONData();
}); 

function getGithubJSONData(){  
    getJSON("https://api.github.com/repositories/19438/commits").then(response => { 
        const dataSource = response.map((dataItem) =>{
            const { commit } = dataItem;
            return [ commit.author.name, 
                commit.author.date, 
               commit.message, 
               commit.url ];
        });
        $('#git-table').DataTable({
            data: dataSource, 
            columns: [
                { title: "Authors Name", width: "20%" },
                { title: "Author Commit Date", width: "25%", type: "date",
                    render: function(data) {
                        return formatDate(data);
                    }
                }, 
                { title: "Message", width: "40%", orderable: false  }, 
                { title: "Commit URL", orderable: false,
                    render: function(data) {
                        return `<a href="${data}" title="${data}" target="_blank">Visit</a>`;
                    }
                }, 
            ]
        }); 
    });
}

// -------- REUSABLE FUNCTIONS --------
async function getJSON(url){
    response = await fetch(url);
    return response.json();
}

function formatDate(date) {
    return (new Date(date).toDateString()) + " " + (new Date(date).toLocaleTimeString());  
}
 