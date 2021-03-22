import { Request, Response } from 'express';
import { newenService } from '../service/newenService';
import { CustomLogger } from '../config/Logger'
let newen = new newenService();

export class newenController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
newen.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into newenController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from newenController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
newen.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into newenController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from newenController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
newen.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into newenController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from newenController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
newen.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into newenController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from newenController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
newen.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into newenController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from newenController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
newen.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into newenController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from newenController.ts: GpCreate');
    })}


}