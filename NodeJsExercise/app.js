const readData = require("./taskManager");
const readDataAsync = require("./taskManager");
const express = require("express");
const dayjs = require("dayjs");

const data = readData();

console.log("Data from taskManager:", data);

//consumed using promise
readDataAsync()
    .then((data) => {
        console.log("Data from taskManager (Async):", data);
    })
    .catch((error) => {
        console.error("Error reading data asynchronously:", error);
    });

//consumed using async/await
async function fetchData() {
    try {
        const data = await readDataAsync();
        console.log("Data from taskManager (Async/Await):", data);
    } catch (error) {
        console.error("Error reading data asynchronously with async/await:", error);
    }
}

fetchData();


//**Task 3 : Using third-party Node Modules**
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const currentDateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
    res.send(`Current Date and Time: ${currentDateTime}`);
});

app.get('/data', async (req, res) => {
    const data = await readDataAsync();
    res.json(data);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});