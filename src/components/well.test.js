import Well from "./well"

test('Test well', () => {
	let myNewWell = null;
	myNewWell = new Well(1, "dsfdf","sdfsf")
	expect(myNewWell).not.toBeNull();
});

