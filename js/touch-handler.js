AFRAME.registerComponent('touch-handler', {

    init: function() {
        this.isVisible = false;
        
        console.log("start touch,update");
        console.log(this.el);
        // every click, we make our model grow in size :)
        this.el.sceneEl.addEventListener("markerFound", (evt) => {
        this.isVisible = true;
        //console.log(this.isVisible);
        //this.el.addEventListener('click', this.clickEvent);
        });
    
        this.el.sceneEl.addEventListener("markerLost", (evt) => {
        this.isVisible = false;
        //console.log("false");
        //this.el.removeEventListener('click', this.clickEvent);
        });
        this.el.addEventListener('click',this.clickEvent);
        
        
    },

    /*update: function(oldData){
        var data = this.data;
        var el = this.el;

        // `event` updated. Remove the previous event listener if it exists.
        if (oldData.event && data.event !== oldData.event) {
        el.removeEventListener(oldData.event, this.clickEvent);
        console.log("update1")
        }

        if (data.event) {
        el.addEventListener(data.event, this.clickEvent);
        console.log("update2")
        } else {
        console.log(data.message);
        }
    },

    remove: function(){
        //this.el.removeEventListener('click',this.clickEvent);
    },*/

    clickEvent(event){
        
        console.log("getclick");
        console.log(event.detail.intersection.point);
        
        
    }
});