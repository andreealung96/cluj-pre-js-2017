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
                 <td class="modal-table-data">${tableData[0].evaluation[6].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[7].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[8].value}</td> 
                 <td class="modal-table-data">${tableData[0].evaluation[9].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[10].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[11].value}</td>
             </tr>
             <tr>
                 <td class="modal-table-data">HTML</td>
                 <td class="modal-table-data">${tableData[0].evaluation[12].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[13].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[14].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[15].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[16].value}</td>
                 <td class="modal-table-data"></td>
             </tr>
             <tr>
                 <td class="modal-table-data">CSS</td>
                 <td class="modal-table-data">${tableData[0].evaluation[17].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[18].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[19].value}</td> 
                 <td class="modal-table-data">${tableData[0].evaluation[20].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[21].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[22].value}</td>
             </tr>
             <tr>
                 <td class="modal-table-data">Javascript</td>
                 <td class="modal-table-data">${tableData[0].evaluation[23].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[24].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[25].value}</td> 
                 <td class="modal-table-data">${tableData[0].evaluation[26].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[27].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[28].value}</td>
             </tr>
             <tr>
                 <td class="modal-table-data">NodeJS</td>
                 <td class="modal-table-data">${tableData[0].evaluation[29].value}</td> 
                 <td class="modal-table-data">${tableData[0].evaluation[30].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[31].value}</td>
                 <td class="modal-table-data">${tableData[0].evaluation[32].value}</td>
                 <td class="modal-table-data"></td>
                 <td class="modal-table-data"></td>
             </tr>                
         </table>     
    `;
 }
