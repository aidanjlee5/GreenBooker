'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient();

  
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.user) {
    throw new Error("An account with this email already exists.");
  }

  revalidatePath('/', 'layout');
  redirect('/');
  
}