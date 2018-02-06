
FlowRouter.route("/", {
    name: "crypto",
    action: function() {
        BlazeLayout.render("applicationLayout", { main: "crypto" });
    }
});
FlowRouter.route("/crypto", {
    name: "crypto",
    action: function() {
        BlazeLayout.render("applicationLayout", { main: "crypto" });
    }
});
FlowRouter.route("/topcoderchalenges", {
    name: "topcoderchalenges",
    action: function() {
        BlazeLayout.render("applicationLayout", { main: "topcoderchalenges" });
    }
});