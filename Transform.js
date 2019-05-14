function transform(){
    this.position = [0,0,0];
    this.rotateAngle = 0;
    this.rotateVector = [0,0,0];
    this.scale = [1,1,1];
    this.modelMatrix;
    this.CalcualteModelMatrix = function(){
        this.modelMatrix = mat4.create();
        mat4.identity(this.modelMatrix);
        mat4.translate(this.modelMatrix, this.position);
        mat4.rotate(this.modelMatrix, deg2Rad(this.rotateAngle), this.rotateVector);
        mat4.scale(this.modelMatrix, this.scale);
    }
}