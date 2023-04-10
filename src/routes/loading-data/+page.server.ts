import type { PageLoad } from "../$types";


export const load = (({}) =>{

   return {
       dataReturn: {
           title : 'Data Values',
       }
   }
}) satisfies PageLoad;