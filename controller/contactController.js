const getContact = (req, res) => {
    res.status(200).send('get all contacts !')
};

const createContact = (req, res) => {
    res.status(201).json({message:" create a new contact"})
};

const updateContact = (req, res) => {
    res.status(201).json({message:"update successfully !"})
};

const deleteContact = (req, res) => {
    console.log("here req body is ", req.body);
    res.status(200).json({message:`delete id is ${req.params.id}`})
};

module.exports = {getContact, createContact, updateContact, deleteContact}