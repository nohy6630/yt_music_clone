import {sleep} from "@/lib/utils";
import React from 'react';

const page = async()=>{
    console.log("before RootLayout sleep...");
    await sleep(4000);
    console.log("after RootLayout sleep...");
    //throw new Error("dsadf");
    return <div>HomePage</div>;
}

export default page;