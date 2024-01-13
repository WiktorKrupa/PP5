const Customer = function () {
    this.name = "";
    this.nip = "";
    this.city = 0;
    this.street = "";
    this.houseNumber = "";
    this.zipCode = "";
    this.comments = "";
    this.industry = "";
    this.active = false;
  };

  function loadCliedt(nip){
    let newCustomer = customerList.find((customer)=> customer.nip == nip)
    if(newCustomer == null){
        newCustomer = new Customer()
    }
    newCustomer.name =  document.getElementById("company-name").value;
    newCustomer.nip = document.getElementById("nip").value;
    newCustomer.city = document.getElementById("city").value;
    newustomer.street =  document.getElementById("street").value;
    newCustomer.houseNumber = document.getElementById("house-number").value;
    newCustomer.zipCode = document.getElementById("zipcode").value;
    newCustomer.comments = document.getElementById("comments").value;
    newCustomer.industry = document.getElementById("industry").value;
    newCustomer.active= document.getElementById("active").checked;
};