import UserService from "./user.service.js";

export const create = (req, res) => {

    try{

    const user = new UserService().create(req.body)

    return res.status(200).send({
        status: "success",
        code:1,
        message:"",
        cause:"",
        result: user
    })
} catch(error){
    console.log(error);
    return res.status(500).send({
        status: "fail",
        code:0,
        message:"error.message",
        cause:"",
        result: ""    
    })
}

}

export const read = (req, res) => {

    try{

    const user = new UserService().read(req.body)

    return res.status(200).send({
        status: "success",
        code:1,
        message:"",
        cause:"",
        result: user
    })
} catch(error){
    console.log(error);
    return res.status(500).send({
        status: "fail",
        code:0,
        message:"error.message",
        cause:"",
        result: ""    
    })
}

}

export const update = (req, res) => {
    try {
        const user = new UserService().update(req.body);
        return res.status(200).send({
            status: "success",
            code: 1,
            message: "",
            cause: "",
            result: user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: "fail",
            code: 0,
            message: error.message,
            cause: "",
            result: "",
        });
    }
};


export const getUser = async(req, res) => {
    try {

        let { username, password } = req.body

        const user = await new UserService().getUser(username, password);
        return res.status(200).send({
            status: "success",
            code: 1,
            message: "",
            cause: "",
            result: user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: "fail",
            code: 0,
            message: error.message,
            cause: "",
            result: "",
        });
    }
};

export const editUser = async(req, res) => {
    try {

        let { username, password } = req.body

        const edit = await new UserService().editUser(username, password);
        return res.status(200).send({
            status: "success",
            code: 1,
            message: "",
            cause: "",
            result: edit,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: "fail",
            code: 0,
            message: error.message,
            cause: "",
            result: "",
        });
    }
};

export const insertUser = async(req, res) => {
    try {

        /*let users = {
            username: req.body.username, 
            password: req.body.password , 
            isActive: req.body.isActive} */

            const users = req.body
            users.isActive = 1

        const insert = await new UserService().insert(users);
        return res.status(200).send({
            status: "success",
            code: 1,
            message: "",
            cause: "",
            result: insert,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: "fail",
            code: 0,
            message: error.message,
            cause: "",
            result: "",
        });
    }
};

