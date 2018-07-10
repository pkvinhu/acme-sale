const expect = require('chai').expect;
const acmesale = require('./acmesale').acmesale;

let result = acmesale;
let sales = [{customerId:1, 
			  orderId: 1,
			  total: 3},
			  {customerId:2, 
			  orderId: 2,
			  total: 4},
			  {customerId:3, 
			  orderId: 3,
			  total: 6}];
let customers = [{id: 1, name: 'Moe'},
				 {id: 2, name: 'Joe'},
				 {id: 3, name: 'Ramapoe'}];


describe('generate customer data function', () => {
	it('exists', () => {
    	expect(acmesale).to.be.ok;
  	});

	it('is a function', () => {
		expect(acmesale).to.eql(Function);
	});

	it('takes two objects', () => {
		expect(sales).to.eql(Object);
		expect(customer).to.eql(Object);
	});

	it('returns an object', () => {
		expect(result).to.eql(Object);
	});

	it('properly pairs customers with totals', () => {
		expect(result(sales, customers)).to.eql({Moe: 3, Joe: 4, Ramapoe: 6});
	});
});


