<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let tabItems;
    export let activeItem;
</script>

<div class="tabs flex justify-center">

        {#each tabItems as item}
                <a class="tab tab-lg" on:click={() => dispatch('tabChange', item)} class:tab-bordered={item === activeItem} class:tab-active={item === activeItem}>{item}</a>
        {/each}
</div>

<style>
    .tab-active {
        color: #4b6bfa;
        border-bottom: 2px solid #4b6bfa;
        font-weight: bold;
    }
</style>