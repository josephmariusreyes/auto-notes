<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { Button } from '@/app/shared/components/shadcn/button';
import { Input } from '@/app/shared/components/shadcn/input';

const email = ref('');
const password = ref('');

function handleLogin() {
  alert('Login clicked');
}
</script>

<template>
  <div class="w-full max-w-sm">
    <div class="hidden sm:block">
      <h2 class="text-2xl font-bold tracking-tight text-slate-900">Welcome back!</h2>
      <p class="mt-1 text-sm text-slate-500">Log in to your KotseCare account.</p>
    </div>
    <form class="mt-0 space-y-4 sm:mt-8" @submit.prevent="handleLogin">
      <div class="hidden space-y-2 sm:block">
        <label for="email" class="text-xs font-semibold text-slate-700">Email address</label
        ><Input
          id="email"
          v-model="email"
          type="email"
          placeholder="you@example.com"
          class="h-11 rounded-md border-slate-200"
        />
      </div>
      <div class="hidden space-y-2 sm:block">
        <div class="flex items-center justify-between">
          <label for="password" class="text-xs font-semibold text-slate-700">Password</label
          ><a href="#" class="text-[10px] font-semibold text-sky-600 hover:underline" @click.prevent
            >Forgot password?</a
          >
        </div>
        <Input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          class="h-11 rounded-md border-slate-200"
        />
      </div>
      <Button
        type="submit"
        class="h-11 w-full rounded-md bg-linear-to-r from-blue-600 to-sky-500 text-sm font-semibold hover:from-blue-700 hover:to-sky-600"
        >Log in</Button
      >
      <div class="hidden items-center gap-3 sm:flex" aria-hidden="true">
        <span class="h-px flex-1 bg-slate-200" /><span class="text-xs text-slate-500">or</span
        ><span class="h-px flex-1 bg-slate-200" />
      </div>
      <Button
        as-child
        variant="outline"
        class="h-11 w-full rounded-md border-slate-200 text-xs font-semibold text-blue-700 hover:bg-slate-50 hover:text-blue-800"
        ><RouterLink to="/authentication/register">Create a new account</RouterLink></Button
      >
    </form>
    <p class="mt-8 text-center text-[9px] leading-relaxed text-slate-400 sm:mt-7">
      By continuing, you agree to our
      <a href="#" class="text-sky-600 hover:underline" @click.prevent>Terms of Service</a
      ><br class="sm:hidden" />
      and <a href="#" class="text-sky-600 hover:underline" @click.prevent>Privacy Policy</a>.
    </p>
  </div>
</template>
