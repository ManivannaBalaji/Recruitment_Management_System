let allJobs = JobManager.getJobOffers();
let ulTag = document.getElementById('main-content');

allJobs.forEach(element => {
    let li = document.createElement('li');
    li.innerText = element.jobTitle;
    ulTag.appendChild(li);
});