
class Well {
	constructor(id,
				uwid,
				wellName,
				licenseNumber=null,
				area=null,
				field=null,
				totalDepth=null,
				drillDate=null,
				status=null) {
		this.id = id;
		this.uwid = uwid;
		this.wellName = wellName;
		this.licenseNumber = licenseNumber;
		this.area = area;
		this.field = field;
		this.totalDepth = totalDepth;
		this.drillDate = drillDate;
		this.status = status;
	}

	editWellInfo() {

	}
}


export default Well;
