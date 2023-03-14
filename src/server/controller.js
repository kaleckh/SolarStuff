

let newPackage = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance
        .newPackage([ req.body.panels, req.body.inverter, req.body.wiring, req.body.mounting, req.params.id ])
        .then((package) => {
            res.status(200).send(package);
        })
        .catch((err) => {
            res.status(500).send({
                errorMessage: err
            });
        });
};
let newUser = (req, res) => {
    const dbInstance = req.app.get('db');
    console.log(req)
    dbInstance
        .newUser([req.params.email])
        .then((email) => {
            res.status(200).send(email);
        })
        .catch((err) => {
            res.status(500).send({
                errorMessage: err
            });
        });
};
let getPackage = (req, res) => {
    const dbInstance = req.app.get('db');
    console.log(dbInstance)
    dbInstance
        .getPackage([])
        .then((package) => res.status(200).send(package))
        .catch((err) => {
            res.status(500).send({
                errorMessage: err
            });
        });
    }
let getUser = (req, res) => {
    const dbInstance = req.app.get('db');
    console.log(dbInstance)
    dbInstance
        .getUser([req.params.email])
        .then((email) => res.status(200).send(email))
        .catch((err) => {
            res.status(500).send({
                errorMessage: err
            });
        });
    }

let deletePackage = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance
        .delete_trip([ req.params.id ])
        .then((trips) => {
            res.status(200).send(trips);
        })
        .catch((err) => {
            res.status(500).send({
                errorMessage: err
            });
        });
};


module.exports = {
    deletePackage,
    newPackage,
    getPackage,
    getUser,
    newUser

}
