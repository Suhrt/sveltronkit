<script>
    import NoInternetCard from "$lib/components/misc/NoInternetCard.svelte";
    import { online } from "svelte/reactivity/window";
    import "../app.css";
    let { children } = $props();
</script>

{#if !online.current}
    <NoInternetCard />
{/if}
{@render children()}
