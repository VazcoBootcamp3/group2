if(_.isEqual(Expenses.find().count(),0)){
  for(let i = 0; i < 2; i++){
    Expenses.insert({
      buyer: 'Filip',
      productList: 'mleko',
      amount: '4',
      owner: 'Adam',
    });
  };
};
