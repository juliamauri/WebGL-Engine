const ModuleWindow ={
    wWidht : 0,
    wHeight : 0,
    Init : function(){
        var ret = true;
        wHeight = GetCanvas().height;
        wWidht = GetCanvas().width;
        return ret;
    },
    PreUpdate : function(){
        return update_status.UPDATE_CONTINUE;
    },
    Update : function(){
        return update_status.UPDATE_CONTINUE;
    },
    PostUpdate : function(){
        return update_status.UPDATE_CONTINUE;
    },
    CleanUp : function(){
        var ret = true;
        return ret;
    },
};