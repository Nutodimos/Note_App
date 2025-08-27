import Note from "../models/Note.js";

export async function getAllNotes (req,res) {
try {
    const notes= await Note.find()
    res.status(200).json(notes)
} catch (error) {
    console.error("Error in getAllNotes controller", error);

    res.status(500).json({message:"Internal server error"});
}
}

export function createNotes (req,res) {
res.status(201).json({message:"Note created succesfully"});
}

export function updateNotes (req,res) {
res.status(200).json({message:"Note updated successfully"});
}

export function deleteNotes (req,res) {
res.status(200).json({message:"Note deleted successfully"});
}