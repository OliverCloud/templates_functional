
import dbConnect from "./db/dbConnect.mjs";
import subscriberModel from "./db/models/subscriber.model.mjs";
import userModel from "./db/models/user.model.mjs";

/*

    USERS

*/
export const getUsers = async () => {
    
    console.log('getUsers')

    try {

        await dbConnect();
        return await userModel.find({});

    } catch (error) {

        console.log(error)

    }


};

export const getUserByEmail = async (email) => {
    
    console.log('getUserByEmail')

    try {

        await dbConnect();
        let result = await userModel.find({'email': email});
        return result[0];

    } catch (error) {

        console.log(error)

    }

};

export const getUserById = async (id) => {
    
    console.log('getUserById')

    try {

        await dbConnect();
        let result = await userModel.find({'_id': id});
        return result[0];

    } catch (error) {

        console.log(error)

    }

};

/*

    SUBSCRIBERS

*/

export const getSubscribers = async () => {
    
    console.log('getSubscribers')

    try {

        await dbConnect();
        return await subscriberModel.find({});

    } catch (error) {

        console.log(error)

    }

};

export const getSubscriberByEmail = async (email) => {
    
    console.log('getSubscriberByEmail')

    try {

        await dbConnect();
        let result = await subscriberModel.find({'email': email});

        return result.length === 0 ? {'message' : 'no such user found'} : result[0];

    } catch (error) {

        console.log(error)

    }

};

export const getSubscriberById = async (id) => {
    
    console.log('getSubscriberById')

    try {

        await dbConnect();
        let result = await subscriberModel.find({'_id': id});
        return result.length === 0 ? {'message' : 'no such user found'} : result[0];

    } catch (error) {

        console.log(error)

    }

};

export const postSubscriber = async (subscriber) => {
    
    console.log('postSubscriber')

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.create(subscriber).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const deleteSubscriber = async (id) => {
    
    console.log('deleteSubscriber');

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.findByIdAndDelete({_id: id}).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const putSubscriber = async (subscriber) => {
    
    console.log('putSubscriber', subscriber);

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.findByIdAndUpdate({_id: subscriber.id}, subscriber).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};