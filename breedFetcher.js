const request = require('request'); // For HTTP request
const args = process.argv.slice(2); // Takes cmd line arguments
let inputBreedName = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${inputBreedName}`, (error, response, body) => {
  // Desterilize the string to an object so we can sort through it:
  const data = JSON.parse(body);

  if (error) {
    // Edge case: if request function fails
    console.log(`๐จ ${error}`); // prints details
  } else if (data[0] === undefined) {
    // Edge case: if breed is not found
    console.log(`๐จ Error: Breed not found`);
  } else {
    // Output description:
    console.log(`๐ DESCRIPTION ๐งถ`);
    console.log(`-`);
    console.log(`๐พ ${data[0].description}`);
  }
});