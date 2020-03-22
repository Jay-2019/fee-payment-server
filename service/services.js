//Services - The services contains the database queries and returning objects or throwing errors.

const studentProfile = require('../model/studentProfileSchema');
const { log } = console;



//signUp route
exports.studentSignUp = (req, res) => {
    let newStudent = new studentProfile(req.body);
    log(newStudent);
    newStudent.save()
        .then(studentSignUp => {
            res.status(200).json({ 'signUp': 'signUp successfully' });
        })
        .catch(err => {
            res.status(400).send('signUp failed');
            log(err.message);
        });
};

