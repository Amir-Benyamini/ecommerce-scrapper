import { makeObservable, observable, action} from "mobx"

class CompetitorsStore {
	constructor(competitorsList) {
		this.competitorsList = competitorsList
		makeObservable(this, {
			competitorsList: observable,
			updateCompetitors: action
		})
	}

	updateCompetitors(competitorsList) {
		this.competitorsList = competitorsList
	}
};

export default CompetitorsStore;