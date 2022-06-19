I wrote a simple flatten function that continously calls itself inorder to flatten any arrays found within the array .

I also added Jest in order to write a few tests : 
* Ensure the flatten function exists
* Ensure the flatten function only accepts and receives arrays 
* Ensure the flatten function returns the same result as the JS .flat() function with depth specified,
 thought it might be a bit counterintuitive to write a function to check the depth in the test as this would also need 
 to be tested and then we have an infinite loop of testing and fixing and the validity of the tests begins to become questionable

 Run Tests : 
 * npm run test

 Run Index.js(for custom testing/configuring) : 
 * npm run start