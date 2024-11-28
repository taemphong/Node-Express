import { pool } from "../database.js"

const testArray = [
    { id: 1, firstName: "Tock", lastName: "Khowpoom" },
    { id: 2, firstName: "Field", lastName: "Eiei" },
    { id: 3, firstName: "Mameaw", lastName: "Chawcho" }
]

export default class UserService {
    
    create(data){

        let {id , firstName , lastName } = data

        testArray.push({ id, firstName, lastName })

        return testArray

    }

    read(){

        return testArray
    }

    update(data) {
        const { id, firstName, lastName } = data;

        let updated = false;
        testArray.forEach((item) => {
            if (item.id == id) {
                item.firstName = firstName;
                item.lastName = lastName;
                updated = true;
            }
        });

        return testArray;
    }
    

    delete(){

    }

    async getUser(username, password) {

        let sql = `SELECT * FROM users WHERE username = '${username}' AND '${password}' LIMIT 1`

        const [result] = await pool.query(sql)

        console.log(result);

        return result
    }

    async editUser(username, password) {

        let sql = `UPDATE users SET password = '${password}' WHERE username ='${username}' LIMIT 1`

        const [result] = await pool.query(sql)

        console.log(result);

        return result
    }

    async insert( users ){

        let sql = `INSERT INTO users SET ?`;

        const [result] = await pool.query(sql, [users])

        console.log(result);

        return result
    }

}

