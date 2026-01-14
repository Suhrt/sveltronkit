<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Spinner } from "$lib/components/ui/spinner/index.js";

    import noInternetGif from "$lib/assets/no_internet.gif";

    let checking = $state(false);

    function handleRetry() {
        checking = true;
        setTimeout(() => {
            checking = false;
        }, 1000);
    }

</script>

<div class="page-container">
    <Card.Root class="custom-card">
        <Card.Content>
            <Card.Title>Poor Internet Connection</Card.Title>
            <Card.Description
                >Check your internet connection and try again.</Card.Description
            >

            <div class="image-container">
                <img
                    src={noInternetGif}
                    alt="No Internet"
                    class="responsive-gif"
                />
            </div>
            <Button class="w-full" onclick={handleRetry} disabled={checking}>
                {#if checking}
                    <Spinner class="size-4" />
                    Checking...
                {:else}
                    Retry
                {/if}
            </Button>
        </Card.Content>
    </Card.Root>
</div>

<style>
    .page-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 227, 227, 0.5);
        backdrop-filter: blur(10px);
        z-index: 9999;
    }

    :global(.custom-card) {
        max-width: 300px; /* Limits width */
        max-height: 400px; /* Limits height to 90% of screen */
        width: 90%; /* Responsive width on small screens */
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 1px 2px 2px 1px rgba(129, 128, 128, 0.37);
        backdrop-filter: blur(30px);
    }

    .image-container {
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .responsive-gif {
        max-width: 100%; /* Won't exceed card width */
        max-height: 250px; /* Limits the GIF's vertical space */
        object-fit: contain;
    }
</style>
