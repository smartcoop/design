'use strict';

let simulation = {
  input: {
    serviceSmart: 'I carry out an interim assignment on behalf of a client',
    contractType: 'Artistic',
    vatType: 'No VAT',
    vatRate: '6%',
    jointCommission: 'Sociocultural Walloon Region and French and German-speaking Community - CP 329.02',
    subComittee: 'Integration centers and social animation',
    amountType: 'Billing amount',
    amountValue: "200",
    numberOfDays: "1",
    defrayalPerDay: "5",
    withHoldingTax: "18"
  },
  result: {
    invoiceAmount: "200,00",
    invoiceVat: "12,00",
    invoiceTotalAmount: "212,00",
    managementFees: "13,00",
    costsEmployer: "12,00",
    salaryBudget: "182,00",
    wageCosts: "74,31",
    totalGross: "107,69",
    socialSecurityContribitions: "12,51",
    totalTaxableAmount: "95,18",
    netSalary: "83,05",
    grossVacationPay: "17,89"
  }
};

module.exports = simulation;
