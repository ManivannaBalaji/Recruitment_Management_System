let searchBtn = document.getElementById('searchBtn');
let tableContent = document.getElementById('table-content');

let allApplications = ApplicationManager.getAllApplications();

displayApplications(allApplications);

/**
 * Function to display all application to table.
 * @param {*} applications 
 */
function displayApplications(applications){
    applications.forEach(element => {
        //creating tr for a application.
        let tr = DynamicElements.createTableRow();
        //creating th for applicant name.
        let th = DynamicElements.createTableHeader(element.name);
        tr.appendChild(th);
        //creating td for email.
        let tdEmail = DynamicElements.createTableData();
        tdEmail.innerText = element.email;
        tdEmail.id = "email";
        tr.appendChild(tdEmail);
        //creating td for job post name.
        let tdPost = DynamicElements.createTableData();
        tdPost.innerText = element.jobTitle;
        tr.appendChild(tdPost);
        //creating td for button.
        let tdButton = DynamicElements.createTableData();
        //creating button
        let button = DynamicElements.createButton();
        tdButton.appendChild(button);
        tr.appendChild(tdButton);
        //appending tr to tbody tag in html
        tableContent.appendChild(tr);
    });
}

addListenerToButtons();
/**
 * Function to add event listener to all dynamically generated buttons.
 */
function addListenerToButtons(){
    if(document.querySelector('button')){
        document.querySelectorAll('.viewBtn').forEach(function(event){
            event.addEventListener('click', function(e){
                let email = e.target.parentNode.parentNode.querySelector('#email').innerText;
                localStorage.setItem("APPLICANT_EMAIL", email);
                window.location.href = "ApplicantDetails.html";
            });
        });
    }
}