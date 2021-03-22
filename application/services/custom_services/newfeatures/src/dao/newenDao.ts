import * as mongoose from 'mongoose';
import newenModel from '../models/newen';
import { CustomLogger } from '../config/Logger'


export class newenDao {
    private newen = newenModel;
    constructor() { }
public GpDelete(newenId, callback){
new CustomLogger().showLogger('info', 'Enter into newenDao.ts: GpDelete')

this.newen.findByIdAndRemove(newenId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from newenDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(newenData, callback){
new CustomLogger().showLogger('info', 'Enter into newenDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(newenData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.newen.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from newenDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(newenData, callback){
new CustomLogger().showLogger('info', 'Enter into newenDao.ts: GpSearchForUpdate')

this.newen.findOneAndUpdate({ _id: newenData._id }, newenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from newenDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(newenData, callback){
new CustomLogger().showLogger('info', 'Enter into newenDao.ts: GpUpdate')

this.newen.findOneAndUpdate({ _id: newenData._id }, newenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from newenDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into newenDao.ts: GpGetAllValues')

this.newen.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from newenDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(newenData, callback){
new CustomLogger().showLogger('info', 'Enter into newenDao.ts: GpCreate')
let temp = new newenModel(newenData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from newenDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}