<script>
    export let label;
    export let placeholder = '';
</script>

<div class="input my-2 flex items-center space-x-5 rounded-lg border border-primary w-full max-w-lg lg:mx-0">
    <span class="font-bold">{label}</span>
    <input type="text" {placeholder} class="w-full focus:outline-none p-2">
    <slot></slot>
</div>
