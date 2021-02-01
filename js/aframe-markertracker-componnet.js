AFRAME.registerComponent('marker-tracker', {

    schema:{
        tracking:{type:'boolean',default:false},
        markerId:{type:'int'},
        PosOne:{type:'vec3'},
        PosTwo:{type:'vec3'},
        RotOne:{type:'vec3'},
        RotTwo:{type:'vec3'}
    },
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
    },
    update:function(oldData){

    },
    tick: function(time,timeDelta){
        if(this.isVisible){
            console.log(this.el.getAttribute('position'));
        }
    }
});