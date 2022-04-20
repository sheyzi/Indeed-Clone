<script>
    export let href;
    export let isLight = false;
    export let isCurrent = false;
    export let visibleMobile = true;
</script>
<li style="height: 100%;" class="my-0">
    <a {href} class:font-light={isLight} class:border-b={isCurrent} class:border-blue-700={isCurrent}
       class:hidden={!visibleMobile}
       class="font-light text-base lg:block hover:bg-white hover:border-b block hover:border-blue-700">
        <slot></slot>
    </a>
</li>