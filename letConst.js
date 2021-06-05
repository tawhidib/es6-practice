const hubby = "Tawhid";
// hubby = "babu"; *** TypeError: Assignment to constant variable.
console.log(hubby);

/*

const array
নতুন এলিমান্ট যোগ করা যাবে 
বা বাদ দেয়া যাবে বা 
এলিমান্টের ভেলু চেঞ্জ করা যাবে...
কিন্তু array টা পুরাপুরি বদলানো যাবে না...

*/

const age = [20, 24, 23, 21, 27];
console.log(age);

age.push(31);
console.log(age);

age.pop();
console.log(age);

// age = [45, 23, 12]; *** TypeError: Assignment to constant variable.

let patientName = "Rahim chacha";
patientName = "abid hassan";
console.log(patientName);

// some deference Let Vs Var

for (let i = 0; i < 5; i++) {
	console.log(i);
}
// console.log(i); *** ReferenceError: i is not defined
// Let যেই স্কোপে declare করা হয় শুধু সেই স্কোপে কাজ করে...

for (var i = 0; i < 5; i++) {
	console.log(i);
}
console.log(i);
// এখন আর i এরর দিতেছে না...
// কারণ var দিয়া declare করা হইলে সেইটা পুরা কোডে থাকে...
