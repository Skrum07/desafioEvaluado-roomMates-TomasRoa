import fs from "fs";



export const addRoommateQuery = async (newUser) => {
    try {
        const roommates = JSON.parse(fs.readFileSync("data/roomMates.json", "utf-8"));
        roomMates.roomMates.push(newRoomie);
        fs.writeFileSync("./data/roomMates.json", JSON.stringify(roomMates));
        res.send(newRoomie); 

        } catch (error) {
        console.log('Error: ', error.code,'Error Message:', error.message);
        }
};