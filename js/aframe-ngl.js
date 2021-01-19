import NGL from 'NGL';

AFRAME.registerComponent('ngl',{
    schema:{
      width: {type: 'number', default: 1},
      height: {type: 'number', default: 1},
      depth: {type: 'number', default: 1},
      molId: {type: 'string', default: 'pdb:2POR'},
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        // create a `stage` object
        var stage = new NGL.Stage("nglmodel");
        // load a PDB structure and consume the returned `Promise`
        stage.loadFile("rcsb://1CRN").then(function (component) {
        // add a "cartoon" representation to the structure component
        component.addRepresentation("cartoon");
        // provide a "good" view of the structure
        //component.autoView();
        });
    }
  });

