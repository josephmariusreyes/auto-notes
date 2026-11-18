<template>
  <main class="min-h-svh bg-slate-100 p-0 sm:grid sm:place-items-center sm:p-6">
    <section
      class="public-layout__shell grid min-h-svh w-full overflow-hidden bg-white shadow-2xl sm:min-h-0 sm:max-w-5xl sm:grid-cols-[minmax(18rem,1fr)_minmax(25rem,1fr)] sm:rounded-lg"
    >
      <aside
        class="public-layout__hero relative flex min-h-67 flex-col justify-between overflow-hidden bg-slate-500 px-6 py-7 text-white sm:min-h-150 sm:px-9 sm:py-8"
      >
        <div
          class="absolute inset-0 bg-linear-to-b from-slate-950/65 via-slate-800/40 to-slate-950/40"
        />
        <div class="relative flex flex-col items-center text-center sm:items-start sm:text-left">
          <div class="flex items-center gap-2">
            <div
              class="flex size-8 items-center justify-center rounded-lg border border-white/70 bg-white/10"
            >
              <CarFront class="size-5" aria-hidden="true" />
            </div>
            <div>
              <p class="text-xl leading-none font-bold tracking-tight">KotseCare</p>
              <p class="mt-1 text-[8px] font-medium tracking-wide text-white/80">
                Alagaan ang iyong sasakyan
              </p>
            </div>
          </div>
          <div class="mt-10 hidden sm:block">
            <h1 class="max-w-58 text-2xl leading-tight font-bold">
              Your car's health,<br />all in one place.
            </h1>
            <ul class="mt-5 space-y-3 text-xs text-white/90">
              <li v-for="benefit in benefits" :key="benefit.label" class="flex items-center gap-2">
                <component :is="benefit.icon" class="size-4" aria-hidden="true" />{{
                  benefit.label
                }}
              </li>
            </ul>
          </div>
        </div>
        <div class="relative mt-8 flex min-h-28 items-end justify-center sm:min-h-44">
          <CarFront
            class="size-32 text-white/75 drop-shadow-lg sm:size-48"
            stroke-width="1.2"
            aria-hidden="true"
          />
        </div>
      </aside>
      <div class="flex items-center justify-center px-6 py-9 sm:px-14 sm:py-12"><RouterView /></div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Bell, BookOpen, CarFront, ClipboardCheck, ShieldCheck } from '@lucide/vue';

const benefits = [
  { icon: ClipboardCheck, label: 'Track maintenance history' },
  { icon: Bell, label: 'Get smart reminders' },
  { icon: ShieldCheck, label: 'Keep your records safe' },
  { icon: BookOpen, label: "Share your vehicle's story" },
];
</script>

<style scoped>
.public-layout__hero {
  /* Set --public-hero-image to url(...) when the artwork is available. */
  background-image: var(--public-hero-image, none);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
