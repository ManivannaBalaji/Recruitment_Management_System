let email = localStorage.getItem("APPLICANT_EMAIL");
let updateBtn = document.getElementById('updateBtn');
let backBtn = document.getElementById('backBtn');

let application = ApplicationManager.getApplication(email);

backBtn.addEventListener('click', function(){
    window.location.href = "AllApplicants.html";
});

showAllData(application);
/**
 * Function to display application details.
 * @param {*} application 
 */
function showAllData(application){
    document.getElementById('name').innerText = application.name;
    document.getElementById('email').innerText = application.email;
    document.getElementById('mobile').innerText = application.mobile;
    document.getElementById('jobTitle').innerText = application.jobTitle;
    document.getElementById('yop').innerText = application.yop;
    document.getElementById('experience').innerText = application.experience;
    document.getElementById('score').value = application.score;
    document.getElementById('status').value = application.status;
}