import { Request, Response, NextFunction } from "express";
import { newenController } from '../controller/newenController';


export class Routes {
    private newen: newenController = new newenController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/newen/:id').delete(this.newen.GpDelete);
app.route('/newen/get/search').get(this.newen.GpSearch);
app.route('/newen/get/update').put(this.newen.GpSearchForUpdate);
app.route('/newen').put(this.newen.GpUpdate);
app.route('/newen').get(this.newen.GpGetAllValues);
app.route('/newen').post(this.newen.GpCreate);
     }

}