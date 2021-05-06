let allJobs = JobManager.getJobOffers();
let jobsContainer = document.getElementById('main-content');

allJobs.forEach(element => {
    let cardDiv = createCardElement();
    let cardBody = createCardBody(); 
    let cardId = document.createElement('span');
    cardId.innerText = element.id;
    cardBody.appendChild(cardId);
    let cardName = document.createElement('p');
    cardName.innerText = element.jobTitle;
    cardBody.appendChild(cardName);
    let button = createButton();
    cardBody.appendChild(button);
    cardDiv.appendChild(cardBody);
    jobsContainer.appendChild(cardDiv);
});

function createCardElement(){
    let cardDiv = document.createElement('div');
    cardDiv.className = "card";
    return cardDiv;
}

function createCardBody(){
    let cardBody = document.createElement('div');
    cardBody.className = "card-body";
    return cardBody;
}

function createButton(){
    let button = document.createElement('button');
    button.className = "btn btn-primary";
    button.innerText = "View Job Offer";
    return button;
}

addListenerToButtons();
function addListenerToButtons(){
    if(document.querySelector('button')){
        document.querySelectorAll('button').forEach(function(event){
            event.addEventListener('click', function(e){
                let jobId = e.target.parentNode.querySelector('span').innerText;
                localStorage.setItem("JOB_VIEW_ID", jobId);
                window.location.href = "ViewJobDetails.html";
            });
        });
    }
}