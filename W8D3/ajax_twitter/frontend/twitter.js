const FollowToggle = require("./follow_toggle.js");


$( function () {
    $('.follow-toggle').each( (idx, el) => new FollowToggle(el));
});