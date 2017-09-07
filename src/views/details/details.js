myApp.DetailsPage = function(i) {
    const evData = localStorage.getItem("evaluationsData");
    const tableData = JSON.parse(evData);
    this.markup = `
    ${myApp.DetailsTable(tableData)}
    `
}

myApp.DetailsTable = function(tableData) {
    return `
    
             <p>Candidate Info:</p>
             <table class="modal-table">
                 <tr>
                     <td class="modal-table-data">Candidate Name</td>
                     <td class="modal-table-data">${tableData[0].candidateInfo[0].value}</td>
                 </tr>
                 <tr>
                     <td class="modal-table-data">Interviewer</td>
                     <td class="modal-table-data">${tableData[0].candidateInfo[1].value}</td>
                 </tr>
                 <tr>
                     <td class="modal-table-data">Interview Date</td>
                     <td class="modal-table-data">${tableData[0].candidateInfo[2].value}</td>
                 </tr>
                 <tr>
                     <td class="modal-table-data">Should the candidate be hired?</td>
                     <td class="modal-table-data">${tableData[0].comments[0].value}</td>
                 </tr>
                 <tr>
                     <td class="modal-table-data">General Impression</td>
                     <td class="modal-table-data">${tableData[0].comments[1].value}</td>
                 </tr>
                 <tr>
                     <td class="modal-table-data">Workflow, Leadership & Softskills</td>
                     <td class="modal-table-data">${tableData[0].comments[2].value}</td>
                 </tr>                
             </table>
             <p>Candidate Evaluation:</p>
             <table class="modal-table">
             <tr>
                 <td class="modal-table-data">OOP, Design Patterns</td>
                 <td class="modal-table-data">${tableData[0].evaluation[0].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[1].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[2].value}</td> 
                 <td class="modal-table-data">${tableData[0].evaluation[3].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[4].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[5].value}</td>
             </tr>
             <tr>
                 <td class="modal-table-data">HTTP</td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
             </tr>
             <tr>
                 <td class="modal-table-data">HTML</td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
             </tr>
             <tr>
                 <td class="modal-table-data">CSS</td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
             </tr>
             <tr>
                 <td class="modal-table-data">Javascript</td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
             </tr>
             <tr>
                 <td class="modal-table-data">NodeJS</td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
             </tr>                
         </table>     
    `;
 }
