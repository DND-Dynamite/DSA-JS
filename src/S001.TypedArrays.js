// Create same Int16Array array differently
let byteSize = 6; // Needs to be multiple of 2
let buffer = new ArrayBuffer(byteSize);
let i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]