import type { PageLoad } from "../$types";


export const load = (({params}) =>{

   return {
       dataReturn: {
           title : 'Data Values',
       }
   }
}) satisfies PageLoad;