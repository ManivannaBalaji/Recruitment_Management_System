let applications = [];
class ApplicationManager{

    /**
     * Function to add new application.
     * @param {*} application 
     */
    static addApplication(application){
        applications = this.getAllApplications();
        let length = applications.length;
        if(length > 0){
            let lastElementId = applications[length-1].id;
            application['id'] = lastElementId + 1; 
        } else{
            application['id'] = 1;
        }
        applications.push(application);
        this.saveToStorage(applications);
        console.log("Application saved");
    }

    /**
     * Function to retrieve all applications.
     */
    static getAllApplications(){
        let applications = JSON.parse(localStorage.getItem("APPLICATIONS")) || [];
        return applications;
    }
    /**
     * Function to retrive a application using email.
     * @param {*} email 
     */
    static getApplication(email){
        let application;
        applications = this.getAllApplications();
        for(let i = 0; i < applications.length; i++){
            if(applications[i].email === email){
                application = applications[i];
                break;
            }
        }
        return application;
    }

    /**
     * Function to store applications to storage.
     * @param {*} application 
     */
    static saveToStorage(applications){
        localStorage.setItem("APPLICATIONS", JSON.stringify(applications));
    }
}