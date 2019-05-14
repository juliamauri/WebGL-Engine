function ResourceMesh() {
    this.VertexPositionBuffer;
    this.VertexNormalBuffer;
    this.VertexIndexBuffer;
}
var MeshesLoaded = {};

function GetMesh(id){
    return MeshesLoaded[id];
}