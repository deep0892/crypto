Meteor.methods({
    'getChallengeDetails' () {
        var challenges = [];
        try{
            var url = 'https://api.topcoder.com/v3/challenges?filter=status=ACTIVE';
            var response = HTTP.call("GET", url);
            challenges = JSON.parse(response.content).result.content;
            //console.log(challenges);
        }catch(e){
            console.log(e);
        }
        return challenges;
    }
})