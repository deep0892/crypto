import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
    Meteor.publish("CrypoCurrencyMarketValue", function(userId) {
        return CryptoMarketValue.find({});
    });
});