import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

//import "./topcoderchalenges.html";

Template.topcoderchalenges.helpers({
    challenges:function(){
        console.log(Template.instance().challenges.get());
        return Template.instance().challenges.get();
    },
    regstartDate:function(){
        return moment(this.registrationStartDate).format('MMMM Do YYYY, h:mm:ss a'); 
    },
    regEndDate:function(){
        return moment(this.registrationEndDate).format('MMMM Do YYYY, h:mm:ss a'); 
    }
});

Template.topcoderchalenges.events({
    'click .analyse-button' (event) {
        console.log('analyse tone click');
        console.log(event.currentTarget.value);
    }
});

Template.topcoderchalenges.onCreated(function() {
    this.challenges = ReactiveVar([]);
    Meteor.call('getTopcoderChahlenges',(err,result)=>{
        if(err){
            throw(err);
        }else{
            console.log(result);
            this.challenges.set(result);
        }
    });
});

Template.topcoderchalenges.onRendered(function() {
    
});
