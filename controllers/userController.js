import path from "path";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import  { addRoomMateQuery } from "../models/userQueries.js";
const __dirname = path.resolve();

const apiUrl = "https://api.example.com/users";

export const home = (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
}

export const addRoomMate = async (req, res) => {
    try {
        const res = await axios.get(apiUrl); 
        const data = res.data.results[0];
        const id = uuidv4().slice(0, 4);
        const newRoomie = {
            id,
            nombre: `${data.name.first} ${data.name.last}`,
            email: data.email,
            debe: 0,
            recibe: 0
        };

        const results = await addRoomMateQuery(newRoomie);
        res.status(201).json(results);
    } catch (error) {
        console.log('Error: ', error.code,'Error Message:', error.message);
    }
}



