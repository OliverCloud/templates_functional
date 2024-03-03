import subscriberModel from '../models/subscriber.model.mjs';
import userModel from '../models/user.model.mjs';


/*

    Simple user check to see if db has been created.

*/
export const dbExists = async () => {

    try {
        let users = await userModel.find({'name': 'admin'});
        return users[0]
    } catch (error) {
        throw(error)
    }

}

/*

    Create new User

*/
export const seedDefaultUser = async (user) => {

    try {
        let newUser = userModel.create(user);
        return newUser
    } catch (error) {
        throw(error)
    }

}

/*

    Create new User

*/
export const seedDefaultSubscriber = async (subscriber) => {

    try {
        
        let newSubscriber = subscriberModel.create(subscriber);
        return newSubscriber
    } catch (error) {
        throw(error)
    }

}