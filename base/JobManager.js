let openings = [];

class JobManager{

    static addJobOffer(offer){
        openings = this.getJobOffers();
        let length = openings.length;
        if(length > 0){
            let lastElementId = openings[length-1].id;
            offer['id'] = lastElementId + 1;
        } else{
            offer['id'] = 1;
        }
        openings.push(offer);
        this.saveToStorage(openings);
        console.log("Job added successfully");
    }

    static getJobOffers(){
        let openings = JSON.parse(localStorage.getItem('OPENINGS')) || [];
        return openings;
    }

    static removeJobOffer(jobOfferId){
        let openings = this.getJobOffers();
        let index = openings.findIndex(offer => offer.id == jobOfferId);
        if(index != -1){
            openings.splice(index, 1);
            this.saveToStorage(openings);
        } else{
            console.log("Error : Job offer not available.");
        }
    }

    static updateJobOffer(oldJobOfferId, newJobOffer){
        let openings = this.getJobOffers();
        let index = openings.findIndex(offer => offer.id == oldJobOfferId);
        if(index != -1){
            openings.splice(index, 1, newJobOffer);
            this.saveToStorage(openings);
        } else{
            console.log("Error : Job Offer not available");
        }
    }

    static saveToStorage(openings){
        localStorage.setItem("OPENINGS", JSON.stringify(openings));
    }

}