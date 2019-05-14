const update_status = Object.freeze({"UPDATE_CONTINUE":1, "UPDATE_STOP":2, "UPDATE_ERROR":3})

const App = {

    modules : [],
    modulesLenght : Number(0),
    modulesIndex : Number(0),
    window : Number(0),
    Init : function(){
        var retInit = true;
        this.modules.push(ModuleWindow);
        window = 0;
        retInit = this.StartModules();
        return retInit;
    },
    StartModules : function(){
        var retStart = true;
        while(this.modulesIndex < this.modulesLenght && retStart)
        {
            retStart = this.modules[modulesIndex].Init();
        }
        modulesIndex = 0;
        return retStart;
    },
    Update : function(){
        var retStatus = update_status.UPDATE_CONTINUE;
        while(this.modulesIndex < this.modulesLenght && retStatus == update_status.UPDATE_CONTINUE)
        {
            retStatus = this.modules[modulesIndex].PreUpdate();
        }
        modulesIndex = 0;
        while(this.modulesIndex < this.modulesLenght && retStatus == update_status.UPDATE_CONTINUE)
        {
            retStatus = this.modules[modulesIndex].Update();
        }
        modulesIndex = 0;
        while(this.modulesIndex < this.modulesLenght && retStatus == update_status.UPDATE_CONTINUE)
        {
            retStatus = this.modules[modulesIndex].PostUpdate();
        }
        modulesIndex = 0;
        return retStatus;
    },
    CleanUp : function(){
        var retCleanUp = true;
        while(this.modulesIndex < this.modulesLenght && retCleanUp)
        {
            retCleanUp = this.modules[modulesIndex].Init();
        }
        modulesIndex = 0;
        return retCleanUp;
    },
};