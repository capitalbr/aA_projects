const ApiUtil = require("./api_util.js")

class FollowToggle {
    constructor (el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.$el.on("click", this.handleClick.bind(this));
    }

    render () {
        if (this.followState === "unfollowed") {
            this.$el.prop('disabled', false);
            this.$el.text('Followed!');
        } else if (this.followState === "followed") {
            this.$el.prop('disabled', false);
            this.$el.text('Unfollowed');
        } else if (this.followState === "unfollowing") {
            this.$el.prop('disabled', true);
            this.$el.text('Unfollowing');
        } else if (this.followState === "following") {
            this.$el.prop('disabled', true);
            this.$el.text('Following')
        }
    }

    handleClick (e) {
        // debugger
      e.preventDefault();
      let that = this;
     
      if (this.followState === "followed") {
            this.followState = "unfollowing";
            this.render();
        
            APIUtil.unfollowUser(this.userId).then(() => {
                that.followState = 'unfollowed';
                that.render();
            });
      } else if (this.followState === "unfollowed") {
            this.followState = "following";
            this.render();
            APIUtil.followUser(this.userId).then(() => {
                that.followState = 'followed';
                that.render();
            });
       
      }
    }
}

module.exports = FollowToggle;