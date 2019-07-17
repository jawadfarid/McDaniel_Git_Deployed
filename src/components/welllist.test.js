import WellList from "./welllist"
import Well from "./well"


test('Test Well List', () => {
	let myWellList = null;
	myWellList = new WellList()
	expect(myWellList).not.toBeNull();
	
	myWellList.addWell("test","786")
	// expect(myWellList).toBe("Jawad");
	expect(myWellList.wellArray[0].uwid).toBe("test");
	expect(myWellList.wellArray.length).toBe(1);

	
});