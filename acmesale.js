function generateCustomerSalesMap(sales, customers) {
  let reduced = sales.reduce((totalsObj,customer) => {
    for(let i = 0; i < customers.length; i++) {
      if(customers[i].ID === customer.customerID) {
        let name = customers[i].name;
        totalsObj[name] = customer.total;
        return totalsObj;
      }
    }
  }, {});
  return reduced;
}






// function generateCustomerSalesMap(salesData, customerData) {
//   let customerSales = {};
  
//   for (let i = 0; i < salesData.length-1; i++) {
//   	for(let j = 0; j < salesData.length-1; j++) {
//   		if(salesData[i].orderId === customersData[j].id) {
//   			if (!customerSales[customersData[j].name]) {
//   			  customerSales[customersData[j].name] = salesData[i].total;
//   			}
//   			else {
//   			  customerSales[customersData[j].name] += salesData[i].total;
//   			}
//   		}
//   	}
//   }
	
//   return customerSales;
// }



module.exports = {acmesale: generateCustomerSalesMap};
