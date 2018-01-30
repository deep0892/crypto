Meteor.methods({
    'UpdateCallStatus' (leadId) {
        var query = { "Leads.LeadId": leadId };
        var update = {
            $set: {
                "Leads.$.CallStatus": "CallInitiated"
            }
        };
        NextFiveLeads.update(query, update);
        return true;
    }
})