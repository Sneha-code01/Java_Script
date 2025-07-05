let str = "sneha shruti";
console.log(str.length);//space bhi count hoga
console.log(str[4]);//letter on that position 0 se counting suru
//temple literals
let obj = {
    item: "pen",
    price: 10,
};
let output = 'the cost of ${obj.item}'
console.log("the cost of ", obj.item, "is", obj.price, "rupees");
//template literals
let specialstring = "this is a template literal ";
console.log(typeof specialstring);
//string method
let str1 = "sneha";
let str2= str1.toUpperCase();//covert to uppercase
console.log(str2);
// strings are immutable(cannot be changed ) in java script
let str3 = str.concat(str1);
console.log(str3);



