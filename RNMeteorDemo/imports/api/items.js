import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Items = new Mongo.Collection('items');

Meteor.methods({
    'Items.addOne': ({ name }) => {
        return Items.insert({ name });
    },

   'sendEmail': ({ name }) =>{
         if (Meteor.isServer) {
              return Email.send({
              from: "pratheba@gmail.com",
              to: "mihir.roy87@gmail.com",
              subject: "Hello Mihir. From Pawpulace",
              text: "Test"
              });
      }
    }, 

    'sendText': ({phoneNumber}) => {
        twilio = Twilio('AC7321fabbda7c0acec650f96669d7035c', '0a14d100471fbc48d6315a3694210de8');
        twilio.sendMessage({
            to:'3526651889',
            from:'3479236975',
            body:'Welcome from Pawpulace'
        }, function(err, res) {
            if(!err) {
                console.log(res.from);
                console.log(res.body);
            }
        });
    }
});

/*
Meteor.publish('items', ()) => {
    return Items.find();
}*/

export default Items;