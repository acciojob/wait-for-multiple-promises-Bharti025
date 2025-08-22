//your JS code here. If required.
const tbody=document.getElementById("output");
function promise1=()=>{
	const start = performance.now();
    return new Promise((resolve) => {
        const delay = Math.random() * 2000 + 1000;
        setTimeout(() => {
            const timeTaken = ((performance.now() - start) / 1000).toFixed(3);
            resolve({ name: "Promise 1", time: timeTaken });
        }, delay);
    });
};

function promise2=()=>{
	const start=performance.now();
return new Promise((resolve,reject)=>{
	const delay=Math.random()*2000+1000;
setTimeout(() => {
            const timeTaken = ((performance.now() - start) / 1000).toFixed(3);
            resolve({ name: "Promise 1", time: timeTaken });
        }, delay);
    });
};

function promise3=()=>{
	ction promise2=()=>{
	const start=performance.now();
return new Promise((resolve,reject)=>{
	const delay=Math.random()*2000+1000;
setTimeout(() => {
            const timeTaken = ((performance.now() - start) / 1000).toFixed(3);
            resolve({ name: "Promise 1", time: timeTaken });
        }, delay);
    });
}
let loadingRow = document.createElement("tr");
let loadingCol = document.createElement("td");
loadingCol.colSpan = 2;
loadingCol.innerText = "Loading...";
loadingRow.append(loadingCol);
tbody.append(loadingRow);
const startTime = performance.now();
Promise.all([promise1(), promise2(), promise3()])
    .then((data) => {
        // Remove loading row
		 const endTime = performance.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(3);
        tbody.removeChild(loadingRow);

        // Calculate total time taken
        const totalTime = data.length; // Assuming each promise takes 1 second for simplicity

        data.forEach((result) => {
            let row = document.createElement("tr");
            let col1 = document.createElement("td");
            let col2 = document.createElement("td");
            
            col1.innerText = result.name;
            col2.innerText = result.time;
 // Random time for display
            row.append(col1);
            row.append(col2);
            tbody.append(row);
        });

        // Add total row
        let totalRow = document.createElement("tr");
        let totalCol1 = document.createElement("td");
        let totalCol2 = document.createElement("td");
        totalCol1.innerText = "Total";
        totalCol2.innerText = totalTime.toFixed(3); // Display total time
        totalRow.append(totalCol1);
        totalRow.append(totalCol2);
        tbody.append(totalRow);
    });
