const ModuleWindow ={

    Init : function(){
        var ret = true;
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
        return ret;
    }
};