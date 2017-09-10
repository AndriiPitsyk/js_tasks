describe("Sorting", function() {
  it("Should sorted value in array ", function() {
	var source = [2,5,1,3,8,9,12];
	var result = [1, 2, 3, 5, 8 , 9 ,12]
	expect(array(source)).to.deep.equal(result);
  });
});