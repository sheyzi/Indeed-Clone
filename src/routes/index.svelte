<script>
    import Search from "../lib/components/Search.svelte";
    import Tabs from '../lib/components/Tab.svelte'
    import JobFeed from "../lib/components/JobFeed.svelte";

    let tabItems = ["Job Feed", "Recent Searches"]
    let activeItem = 'Job Feed'

    const triggerTabChange = event => {
        activeItem = event.detail;
    }
</script>

<svelte:head>
    <title>Job Search | Indeed</title>
</svelte:head>

<main>
    <Search/>


        <Tabs tabItems={tabItems} activeItem={activeItem} on:tabChange={triggerTabChange}/>
        {#if activeItem === 'Job Feed'}
            <JobFeed/>
        {:else}
            <p>List of available books</p>
        {/if}

</main>

<style>

</style>