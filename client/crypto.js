import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

import "./Leads.html";

Template.crypto.helpers({
    CryptoMarketValue: function() {
        return CryptoMarketValue.find({}).fetch();
    },
    UpdatedSince:function(){
        return moment(this.ts).fromNow();
    },
    completename:function(){
        return this.name.toUpperCase();
    },
    UP_down:function(value){
        var history_24 = parseFloat(value);
        if(history_24 > 0){
            return true;
        }else{
            return false;
        }
    },
    dollar:function(value){
        var dollar = parseFloat(value);
        return dollar.toLocaleString();
    }
});

Template.crypto.onCreated(function() {
    this.subscribe('CrypoCurrencyMarketValue');
});

Template.crypto.onRendered(function() {
    
});