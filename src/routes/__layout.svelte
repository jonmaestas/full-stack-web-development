<script>
    import "../app.css";
    const initializeUthentic = () => {
        uthentic.login().then((user) => {
            console.log(user);
        });
    };
</script>

<svelte:head>
    <!-- Uthentic script for your website -->
    <script
        src="https://uthentic.net/Ytf8LEvP/uthentic.js"
        on:load={initializeUthentic}></script>
</svelte:head>

<main>
    <slot />
</main>
