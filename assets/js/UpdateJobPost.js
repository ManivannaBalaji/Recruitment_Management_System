let jobId = getJobId();

function updatePost(){
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

    let updatedJob = {
        "id": jobId,
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

    JobManager.updateJobOffer(jobId, updatedJob);
    alert('Job Details updated');
    window.location.href = "AllJobs.html";

}

fillDetailsToForm();

function fillDetailsToForm(){
    let jobOffer = getJobDetails(jobId);
    document.getElementById('jobTitle').value = jobOffer.jobTitle;
    document.getElementById('jobType').value = jobOffer.jobType;
    document.getElementById('description').value = jobOffer.description;
    document.getElementById('skills').value = jobOffer.skills;
    document.getElementById('minYears').value = jobOffer.minYears;
    document.getElementById('maxYears').value = jobOffer.maxYears;
    document.getElementById('minSalary').value = jobOffer.minSalary;
    document.getElementById('maxSalary').value = jobOffer.maxSalary;
    document.getElementById('location').value = jobOffer.location;
    document.getElementById('noOfVacancy').value = jobOffer.noOfVacancy;
    document.getElementById('qualification').value = jobOffer.qualification;
}

function getJobId(){
    let jobId = localStorage.getItem('JOB_VIEW_ID');
    return jobId;
}

function getJobDetails(jobId){
    let jobOffer = JobManager.getJobOffer(jobId);
    return jobOffer;
}