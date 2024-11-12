 
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

// import {
//     Card,
//     CardContent, 
//     CardDescription, 
//     CardFooter, 
//     CardHeader, 
//     CardTitle,
// } from "../../../components/ui/card"

// import{Tabs,TabsContent, TabsList, TabsTrigger} from "../../../components/ui/tabs"
// import{Button} from "../../../components/ui/button"
// import{Separator} from "../../../components/ui/separator"
// import{Input} from "../../../components/ui/input"
// import { Label } from "../../../components/ui/label"



// export default function login() {
//     return (
//         <div className="max-h-screen mt-16 mb-20">
//         <div className="h-auto min-h-[500px] w-full flex items-center justify-center">
//             <Tabs defaultValue="login" className="flex flex-col w-full max-w-md">
//                 <TabsList>
//                     <TabsTrigger className="w-full"value="login"><span className="font-bold">Login</span></TabsTrigger>
//                     <TabsTrigger className="w-full"value="signup"><span className="font-bold">Sign Up</span></TabsTrigger>
//                 </TabsList>   
//                     <TabsContent value="login" className="h-full">
//                         <Card className="flex flex-col w-full max-w-md">
//                             <CardHeader className="justify-center items-center space-y-5">
//                                 <CardTitle className="text-2xl">Green Booker</CardTitle>
//                                 <Button className="w-72 mb-4">
//                                     <FontAwesomeIcon icon={faGoogle} /><span className="font-semibold">Sign in with Google</span>
//                                 </Button>
//                                 <Button className="w-72">
//                                     <FontAwesomeIcon icon={faApple} /><span className="font-semibold">Sign in with Apple</span>
//                                 </Button>
//                             </CardHeader>
//                             <div className="flex items-center justify-center w-full space-x-2 py-4">
//                                 <Separator className="w-1/3" />
//                                 <span className="text-gray-500">or</span>
//                                 <Separator className="w-1/3" />
//                             </div>
//                             <CardContent className="mx-6 p-4 flex flex-col justify-center items-center space-y-4">
//                                 <div>
//                                     <Label htmlFor="email"><span className="font-semibold">Email</span></Label>
//                                     <Input id="email" placeholder="Your email address" className="w-72" />
//                                 </div>
//                                 <div>
//                                     <Label htmlFor="password"><span className="font-semibold">Password</span></Label>
//                                     <Input id="password" placeholder="Your password" className="w-72" />
//                                 </div>
//                             </CardContent>
//                             <CardFooter className="justify-center mt-4">
//                                 <Button className="w-72"><span className="font-semibold">Sign In</span></Button>
//                             </CardFooter>
//                         </Card>
//                     </TabsContent>
//                     <TabsContent value="signup" className="h-full">
//                     <Card className="flex flex-col w-full max-w-md">
//                             <CardHeader className="justify-center items-center space-y-5">
//                                 <CardTitle className="text-2xl">Green Booker</CardTitle>
//                                 <Button className="w-72 mb-4">
//                                     <FontAwesomeIcon icon={faGoogle} /><span className="font-semibold">Sign up with Google</span>
//                                 </Button>
//                                 <Button className="w-72">
//                                     <FontAwesomeIcon icon={faApple} /><span className="font-semibold">Sign up with Apple</span>
//                                 </Button>
//                             </CardHeader>
//                             <div className="flex items-center justify-center w-full space-x-2 py-4">
//                                 <Separator className="w-1/3" />
//                                 <span className="text-gray-500">or</span>
//                                 <Separator className="w-1/3" />
//                             </div>
//                             <CardContent className="mx-6 p-4 flex flex-col justify-center items-center space-y-4">
//                                 <div>
//                                     <Label htmlFor="email"><span className="font-semibold">Email</span></Label>
//                                     <Input id="email" placeholder="Your email address" className="w-72" />
//                                 </div>
//                                 <div>
//                                     <Label htmlFor="password"><span className="font-semibold">Password</span></Label>
//                                     <Input id="password" placeholder="Your password" className="w-72" />
//                                 </div>
//                                 <div>
//                                     <Label htmlFor="confirmPassword"><span className="font-semibold">Confirm Password</span></Label>
//                                     <Input id="confirmPassword" placeholder="Confirm password" className="w-72" />
//                                 </div>
//                             </CardContent>
//                             <CardFooter className="justify-center mt-4">
//                                 <Button className="w-72"><span className="font-semibold">Sign Up</span></Button>
//                             </CardFooter>
//                         </Card>
//                     </TabsContent>
//             </Tabs>
//         </div>
//         </div>
//     );
// }

// "use client";

// import React from "react";
// import { Button } from "@/subframe/components/Button";
// import { TextField } from "@/subframe/components/TextField";

// export default function Login() {
//   return (
//     <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-50">
//       <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-8 rounded-md border border-solid border-neutral-border bg-white px-12 py-12">
//         <p className=" text-3xl font-bold w-40 flex-none">GreenBooker</p>
//         <div className="flex w-full flex-col items-start gap-6">
//           <div className="flex w-full flex-col items-start gap-4">
//             <Button
//               className="h-10 w-full flex-none"
//               onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
//             >
//               Sign in with Google
//             </Button>
//             <Button
//               className="h-10 w-full flex-none"
//               onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
//             >
//               Sign in with Apple
//             </Button>
//           </div>
//           <div className="flex w-full items-center justify-center gap-2">
//             <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
//             <span className="text-caption font-caption text-subtext-color">
//               or
//             </span>
//             <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
//           </div>
//           <div className="flex w-full flex-col items-start gap-6">
//             <TextField
//               className="h-auto w-full flex-none"
//               variant="outline"
//               label="Email"
//               helpText=""
//             >
//               <TextField.Input
//                 placeholder="Your email address..."
//                 value=""
//                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
//               />
//             </TextField>
//             <TextField
//               className="h-auto w-full flex-none"
//               variant="outline"
//               label="Password"
//               helpText=""
//             >
//               <TextField.Input
//                 type="password"
//                 placeholder="Your password..."
//                 value=""
//                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
//               />
//             </TextField>
//           </div>
//         </div>
//         <Button
//           className="h-10 w-full flex-none"
//           size="large"
//           icon={null}
//           onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
//         >
//           Sign in
//         </Button>
//         <Button
//             className="h-10 w-full flex-none"
//             size="large"
//             icon={null}
//             onClick={() => window.location.href = "/signup"}
//             variant="neutral-primary"
//         >
//             Don't have an account? Sign up here
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { OAuthSocialButton } from "@/subframe/components/OAuthSocialButton";
import { TextField } from "@/subframe/components/TextField";
import { Button } from "@/subframe/components/Button";

function SimpleSignInCard() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-50">
      <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-8 rounded-md border border-solid border-neutral-border bg-white px-12 py-12">
        <div className="flex flex-row space-x-0">
          <p className=" text-3xl font-bold flex-none text-brand-primary">Green</p>
          <p className=" text-3xl font-bold flex-none">Booker</p>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-4">
            <OAuthSocialButton
              className="h-10 w-full flex-none"
              logo="https://res.cloudinary.com/subframe/image/upload/v1711417516/shared/z0i3zyjjqkobzuaecgno.svg"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Sign in with Google
            </OAuthSocialButton>
            <OAuthSocialButton
              className="h-10 w-full flex-none"
              logo="https://res.cloudinary.com/subframe/image/upload/v1711417561/shared/kplo8lv2zjit3brqmadv.png"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Sign in with Apple
            </OAuthSocialButton>
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
            <span className="text-caption font-caption text-subtext-color">
              or
            </span>
            <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <TextField
              className="h-auto w-full flex-none"
              variant="outline"
              label="Email"
              helpText=""
            >
              <TextField.Input
                placeholder="Your email address..."
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <TextField
              className="h-auto w-full flex-none"
              variant="outline"
              label="Password"
              helpText=""
            >
              <TextField.Input
                type="password"
                placeholder="Your password..."
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
        </div>
        <Button
          className="h-10 w-full flex-none"
          size="large"
          icon={null}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default SimpleSignInCard;