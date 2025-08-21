import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function page() {
  return (
    <main className='w-full h-full flex justify-center items-center'>
      <Card className='w-full max-w-sm'>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>Login using your email and password</CardDescription>
              <CardAction>
                  <Button variant={'link'}>
                    <Link href={'/auth/signup'}>Sign Up</Link>
                  </Button>    
              </CardAction> 
            </CardHeader>
            
            <CardContent>
                <form>
                  <div className='flex flex-col gap-3'>

                  <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      placeholder='name@example.com'
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
                  </div>
                </form>
            </CardContent>

            <CardFooter className='flex-col gap-2'>
              <Button type='submit' className='w-full'>Login</Button>
              <Button variant={'outline'} className='w-full'><Link href={'/auth/google'}>Login using Gmail</Link></Button>
              <Button variant={'outline'} className='w-full'><Link href={'/auth/phone'}>Login with phone number</Link></Button>
            </CardFooter>
        </Card>
    </main>
  )
}
