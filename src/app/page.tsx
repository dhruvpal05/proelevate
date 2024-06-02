'use client';

import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
      <div className="px-6 py-6 pt-10">
        <h1 className="flex justify-center text-4xl font-bold">One Stop Destination </h1>
        <h1 className="flex justify-center text-4xl font-bold">To Your <span className="text-orange-500">First Job</span></h1>
      </div>
      <p className="flex justify-center px-6 pb-6">Your one-stop destination for DSA practice, interview experiences, and career opportunities.</p>
      <div className="flex justify-center">
        <Button className="px-4 my-2 mr-2 rounded-2xl" >Log in</Button>
        <Button variant="secondary" className="my-2 ml-2 rounded-2xl">Join Free</Button>
      </div>
    </>
  );
}
