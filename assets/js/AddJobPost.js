function addJob(){
    event.preventDefault();
    let jobTitle = document.getElementById('jobTitle').value;
    let jobType = document.getElementById('jobType').value;
    let description = document.getElementById('description').value;
    let skills = document.getElementById('skills').value;
    let minYears = document.getElementById('minYears').value;
    let maxYears = document.getElementById('maxYears').value;
    let minSalary = document.getElementById('minSalary').value;
    let maxSalary = document.getElementById('maxSalary').value;
    let location = document.getElementById('location').value;
    let noOfVacancy = document.getElementById('noOfVacancy').value;
    let qualification = document.getElementById('qualification').value;

    let job = {
        "jobTitle": jobTitle,
        "jobType": jobType,
        "description": description,
        "skills": skills,
        "minYears": minYears,
        "maxYears": maxYears,
        "minSalary": minSalary,
        "maxSalary": maxSalary,
        "location": location,
        "noOfVacancy": noOfVacancy,
        "qualification": qualification
    };

    JobManager.addJobOffer(job);
    window.location.href="AllJobs.html";
}

addDescription();

function addDescription(){
    let textArea = document.getElementById('description');
    let description = "Roles and Responsibilities\n\nDesired Candidate Profile\n\nPerks and Benefits";
    textArea.placeholder = description;
}