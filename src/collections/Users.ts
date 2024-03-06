import { CollectionConfig, PayloadRequest } from 'payload/types'
import "../decorators";
import { Response, NextFunction } from 'express';
import { Sum } from "../class";

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  endpoints: [
    {
      method: 'get',
      path: 'decorator',
      handler: (req: PayloadRequest, res: Response, next: NextFunction) => {
        // ERROR: ./node_modules/@swc/core/index.js:244 Expression expected
        // Cannot use class with decorator
        const obj = new Sum(2, 2);
        res.send(obj.result()).status(200);
      }
    }
  ]
}

export default Users
