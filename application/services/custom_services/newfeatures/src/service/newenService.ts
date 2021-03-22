import { Request, Response } from 'express';
import {newenDao} from '../dao/newenDao';
import { CustomLogger } from '../config/Logger'
let newen = new newenDao();

export class newenService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into newenService.ts: GpDelete')
     const  newenId = req.params.id;
     newen.GpDelete(newenId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from newenService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into newenService.ts: GpSearch')
     const  newenData = req.query;
     newen.GpSearch(newenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from newenService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into newenService.ts: GpSearchForUpdate')
     const  newenData = req.body;
     newen.GpSearchForUpdate(newenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from newenService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into newenService.ts: GpUpdate')
     const  newenData = req.body;
     newen.GpUpdate(newenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from newenService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into newenService.ts: GpGetAllValues')
     
     newen.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from newenService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into newenService.ts: GpCreate')
     const  newenData = req.body;
     newen.GpCreate(newenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from newenService.ts: GpCreate')
         callback(response);
         });
    }


}