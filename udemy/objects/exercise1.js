//street, city, zipcode

//showAddress(address)

let address = {
  street: "1408 st",
  city: 'Vancouver',
  zipcode: 'V5N'
};

let showAddress = (object) => {
    for(let key in object){
        console.log(key, object[key])
    }
}

showAddress(address)