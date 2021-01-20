AFRAME.registerComponent('touch-handler', {

  

    init: function() {
        this.isVisible = false;
        
        console.log("start touch,update");
        console.log(this.el);
        // every click, we make our model grow in size :)
        this.el.sceneEl.addEventListener("markerFound", (evt) => {
        this.isVisible = true;
        console.log(this.isVisible);
        this.el.addEventListener('click', this.clickEvent);
        });
    
        this.el.sceneEl.addEventListener("markerLost", (evt) => {
        this.isVisible = false;
        console.log("false");
        //this.el.removeEventListener('click', this.clickEvent);
        });
        
        
    },

    update: function(){
        if (this.isVisible) {
            console.log("updatetrue");
          } else {
            console.log("updatefalse");
          }
    },

    remove: function(){
        this.el.removeEventListener('click',this.clickEvent);
    },

    clickEvent(event){
        
        console.log("getclick");
        console.log(event.detail.intersection.point);
        
        
    }
});