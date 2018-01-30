
FlowRouter.route("/crypto", {
    name: "crypto",
    action: function() {
        BlazeLayout.render("applicationLayout", { main: "crypto" });
    }
});

FlowRouter.route("/", {
    name: "crypto",
    action: function() {
        BlazeLayout.render("applicationLayout", { main: "crypto" });
    }
});
