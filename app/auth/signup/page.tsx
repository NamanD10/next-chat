import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function page() {
  return (
    <main className='w-full h-full flex justify-center items-center'>
      <Card className='w-full max-w-sm'>
            <CardHeader className='my-2.5'>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Create your account with some basic details</CardDescription>
              <CardAction>
                  <Button variant={'link'}>
                    <Link href={'/auth/login'}>Login</Link>
                  </Button>    
              </CardAction> 
            </CardHeader>
            
            <CardContent className='my-2.5'>
                <form>
                  <div className='flex flex-col gap-3'>

                  <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      placeholder='Enter your email'
                      type='email'
                      required
                    ></Input>
                  </div>

                  <div className='grid gap-2'>  
                    <Label htmlFor='password'>Password</Label>
                    <Input
                      id='password'
                      placeholder='Keep your password of 8 length minimum'
                      type='password'
                      required
                    ></Input>
                  </div>

                  <div className='grid gap-2'>  
                    <Label htmlFor='username'>Username</Label>
                    <Input
                      id='username'
                      placeholder='Enter your username'
                      type='username'
                      required
                    ></Input>
                  </div>

                  <div className='grid gap-2'>  
                    <Label htmlFor='mobile'>Phone number</Label>
                    <Input
                      id='mobile'
                      placeholder='Enter your phone number'
                      type='tel'
                      required
                    ></Input>
                  </div>
                  </div>
                </form>
            </CardContent>

            <CardFooter className='flex-col gap-2 my-2.5'>
              <Button type='submit' className='w-full'>Create Account</Button>
              <Button variant={'outline'} className='w-full'><Link href={'/auth/google'}>Continue using Gmail</Link></Button>
            </CardFooter>
        </Card>
    </main>
  )
}

export default page