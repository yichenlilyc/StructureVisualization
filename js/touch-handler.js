AFRAME.registerComponent('touch-handler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#thebox");
        console.log("start touch");
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            console.log(ev.detail.intersection.point);
        });
}});