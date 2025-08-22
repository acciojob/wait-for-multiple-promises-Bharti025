//your JS code here. If required.
const tbody=document.getElementById("output");
function promise1=()=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve("Promise 1");
},Math.random() * 2000 + 1000);
});
};

function promise2=()=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve("Promise 2");
},Math.random() * 2000 + 1000);
});
};

function promise3=()=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve("Promise 3");
},Math.random() * 2000 + 1000);
});
}
let loadingRow = document.createElement("tr");
let loadingCol = document.createElement("td");
loadingCol.colSpan = 2;
loadingCol.innerText = "Loading...";
loadingRow.append(loadingCol);
tbody.append(loadingRow);

Promise.all([promise1(), promise2(), promise3()])
    .then((data) => {
        // Remove loading row
        tbody.removeChild(loadingRow);

        // Calculate total time taken
        const totalTime = data.length; // Assuming each promise takes 1 second for simplicity

        data.forEach((promiseResult, index) => {
            let row = document.createElement("tr");
            let col1 = document.createElement("td");
            let col2 = document.createElement("td");
            col1.innerText = promiseResult;
            col2.innerText = (Math.random() * 2 + 1).toFixed(3); // Random time for display
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
