class Customer {
  constructor(
    id,
    lastName,
    firstName,
    phoneNumber,
    street,
    city,
    country,
    zip,
    email,
    password,
    orders
  ) {
    // PERSONNAL DATA
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
    this.street = street;
    this.city = city;
    this.country = country;
    this.zip = zip;
    // ACCOUNT DATA
    this.email = email;
    this.password = password;
    this.orders = orders;
  }
}

module.exports = Customer;
