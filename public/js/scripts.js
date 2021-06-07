// Go to the developer console in a browser like Chrome to see the code challenge working

// Starting Array which can hold any size of numbers to be grouped. There are three tests arrays here.
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function groupArrayElements(array, size) {
	// New Array created for holding the groups in the array divided by N which is the size
	const itemArr = [];

	// A for loop for looping through the starting array
	for (let item of array) {
		// The get the last element inside of the grouped array
		const lastItem = itemArr[itemArr.length - 1];

		// Push a new item into the array if it matches the size (N)
		if (!lastItem || lastItem.length === size) {
			itemArr.push([item]);
		} else {
			lastItem.push(item);
		}
	}
	// The output for the newly sorted and grouped array
	console.log(itemArr);
}

// Function for executing the code in the developer console
// The Array is on the left and the size (N) is on the right
groupArrayElements(arr2, 3);
