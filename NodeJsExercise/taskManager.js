const fs = require("fs");
const path = require("path");


//**Task 1 : Initialize Node Project and Utilize global objects , Standard modules and Custom Modules**

//use the **Global Objects** to read the current file directory and build the complete file path
const filePath = path.join(__dirname, "data.json");


// Use the Standard Module (fs) to read the file with the help of file path and log the data
function readData() {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        console.log("Logging Data:", data);

        const parse = JSON.parse(data);
        return parse;
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

//**Task 2 : Using Promises and async/await function**

function readDataAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const parse = JSON.parse(data);
                    resolve(parse);
                } catch (parseError) {
                    reject(parseError);
                }
            }
        })
    })
}


module.exports = readData;
module.exports = readDataAsync