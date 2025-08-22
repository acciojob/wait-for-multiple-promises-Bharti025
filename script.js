//your JS code here. If required.
const tbody=document.getElementById("output");
function promise1=()=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve("Promise 1");
});
});
};
function promise2=()=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve("Promise 2");
});
});
};
function promise3=()=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve("Promise 3");
});
});
}
Promise.all([promise1(),promise2(),promise3()])
.then((data)=>{
	let row=document.createElement("tr");
	let col1=document.createElement("td");
     let col2=document.createElement("td");
	row.append(col1);
	row.append(col2);
    output.append(row);
	
})
