import Well from "./well"

class WellList {
	constructor() {
		this.wellArray = [];
		this.id = 0 //to count how may wells are there in the list
	}

	addWell(uwid,wellName,licenseNumber=null,area=null,field=null,totalDepth=null,drillDate=null,status=null) {
		const newWell = new Well(this.id,
								uwid,
								wellName,
								licenseNumber=null,
								area=null,
								field=null,
								totalDepth=null,
								drillDate=null,
								status=null)
		this.wellArray.push(newWell)
		this.id++
	}

// 	removeAccount(index) {
// 		this.accountArray = this.accountArray.filter((item,i) => i !== index)
// 	}

// 	renameAccountName(index,newName) {
// 		this.accountArray.forEach((item,i) => {
// 			if(i === index) {
// 				item.name = newName;
// 			}})
// 	}
		
	
// 	totalOfAccounts() {
// 		let total = this.accountArray.reduce((accumulator, currentValue)=> accumulator + currentValue.balance,0);
// 		return total
// 	}
	
// 	highestValueAccount() {
// 		// const test = this.accountArray.map(item => item.balance);
// 		// //Started with usign For Loop and then end up using map mrthod 
// 		// // for (let i=0; i< this.accountArray.length; i++) {
// 		// // 	test.push(this.accountArray[i].value)
// 		// // 	}
// 		// const highestValue = Math.max(...test)
// 		// return highestValue
// 		const max = this.accountArray.reduce((prev, current) => (prev.balance > current.balance) ? prev : current,0)
// 	 	return max
// 	}	
	

// 	lowestValueAccount() {
// 		const test = this.accountArray.map(item => item.balance);
// 		const lowestValue = Math.min(...test)
// 		return lowestValue
// 	}
}


export default WellList;

