import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

import "./Leads.html";

Template.Leads.helpers({
    CryptoMarketValue: function() {
        return CryptoMarketValue.find({}).fetch();
    },
    UpdatedSince:function(){
        return moment(this.ts).fromNow();
    }
});

Template.Leads.onCreated(function() {
    this.subscribe('CrypoCurrencyMarketValue');
});

Template.Leads.onRendered(function() {
    
});