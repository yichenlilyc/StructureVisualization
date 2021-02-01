AFRAME.registerComponent('click-check',{
    dependencies:['raycaster'],

    init:function(){
        this.el.addEventListener('raycaster-intersection',function(){
            console.log('player hit something');
        });
    }
});