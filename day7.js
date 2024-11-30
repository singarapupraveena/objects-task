// question1
var book={
    "title" : "harrypotter",
    "author" : "J.k. Rowling",
    "yearPublished" : "1997"
}
console.log(book);
console.log(book.author);
book["yearPublished"] = 2022;
console.log(book.yearPublished);
book["genre"] = "fiction";
console.log(book);
delete book.title;
console.log(book);

// question2
var employee={
    "name" : "praveena",
    "age" : "22",
    "position" : "software",
    "salary" : "40,000"
}
console.log(employee);
console.log(employee.position);
employee["salary"] = 50000;
console.log(employee);
employee["department"] = "HR";
console.log(employee);
delete employee.age;
console.log(employee);

// question3
var pen={
    "id" : "1234",
    "name" : "santhoor",
    "price" : "50",
    "category" : "ballpoint"
}
console.log(pen);
console.log(pen.price);
pen["category"] = "electronics";
console.log(pen);
pen['inStock'] = "true";
console.log(pen);
delete pen.id;
console.log(pen);

// question4
var car={
    "make" : "metal",
    "model" : "tayota",
    "year" : "2001",
    "color" : "grey"
}
console.log(car);
console.log(car.make);
car["color"] = "black";
console.log(car);
car["engineType"] = "V6";
console.log(car);
delete car.year;
console.log(car);

// question5
var student={
    "name" : "tanvi",
    "age" : "13",
    "grade" : "A",
    "school" : "delhi public school"
}
console.log(student);
console.log(student.school);
student["grade"] = "95",
console.log(student);
student["hobbies"] = "reading,sports";
console.log(student);
delete student.age;
console.log(student);

// question6
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
console.log(user);
console.log(user.profile.address.city);
user.preferences["theme"] = "light";
console.log(user);
user.profile["phone"] = "4567098";
console.log(user);
delete user.profile.address.zip;
console.log(user);

// question7
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  };
console.log(company);
console.log(company.employees[1].contact.email);
company.employees[0].contact["phone"] = "555-1111";
console.log(company);
company.employees[0]["department"] = "engineering";
console.log(company);
delete company.location;
console.log(company);



