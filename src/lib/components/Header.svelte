<script>
    import {page} from "$app/stores"
    import NavItem from "./NavItem.svelte";

    console.log($page.url.pathname)
</script>
<nav class="navbar bg-base-100 border-b py-0">
    <div class="navbar-start py-0" style="height: 100%;">
        <a href="/" class="btn bg-white border-white hover:bg-white hover:border-white normal-case text-xl">
            <img src="logo.svg" width="98" alt="Indeed Logo">
        </a>
        <ul class="menu menu-horizontal space-x-2">
            <NavItem href="/" visibleMobile={false} isCurrent={$page.url.pathname === "/" ? true : false }>Find Jobs
            </NavItem>
            <NavItem href="/company_reviews" visibleMobile={false}
                     isCurrent={$page.url.pathname === "/company_reviews" ? true : false }>Company Reviews
            </NavItem>
        </ul>
    </div>
    <div class="navbar-end" style="height: 100%;">
        <ul class="menu menu-horizontal menu-compact  lg:space-x-2">
            <NavItem href="#">
                <svg style="width:1.625rem;height:100%" viewBox="0 0 218 218" fill="none"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <g clip-path="url(#clip0)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M186.055 27.2253C188.552 27.2253 190.552 29.2497 190.552 31.7469V149.31C190.552 151.807 188.528 153.831 186.031 153.831H92.9662L62.9211 187.632C60.1652 190.732 55.038 188.795 55.02 184.647L54.886 153.831H32.2951C29.7978 153.831 27.7734 151.807 27.7734 149.31V31.747C27.7734 29.2498 29.7236 27.2254 32.2209 27.2254L186.055 27.2253Z"
                              fill="#2D2D2D"></path>
                        <path d="M59.6547 119.901C57.1575 119.901 55.1331 117.877 55.1331 115.379V106.336C55.1331 103.839 57.1575 101.815 59.6547 101.815L123.769 101.815C126.266 101.815 128.29 103.839 128.29 106.336V115.379C128.29 117.877 126.266 119.901 123.769 119.901H59.6547Z"
                              fill="white"></path>
                        <path d="M59.6547 83.728C57.1575 83.728 55.1331 81.7036 55.1331 79.2064V70.1631C55.1331 67.6659 57.1575 65.6415 59.6547 65.6415L150.968 65.6415C153.465 65.6415 155.49 67.6659 155.49 70.1631V79.2064C155.49 81.7036 153.465 83.728 150.968 83.728H59.6547Z"
                              fill="white"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="217.038" height="217.038" fill="white"
                                  transform="translate(0.643799 0.095459)"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </NavItem>
            <NavItem href="#">
                <svg style="width:1.625rem;height:100%" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"
                     fill="currentColor"
                     viewBox="0 0 24 24" aria-hidden="true" class="gnav-header-1xqhio eac13zx0">
                    <path d="M12 2a1.5 1.5 0 00-1.5 1.5v.161A7.003 7.003 0 005 10.5V16l-1.854 1.854a.5.5 0 00-.146.353v.293a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-.293a.5.5 0 00-.146-.353L19 16v-5.5a7.003 7.003 0 00-5.5-6.839V3.5A1.5 1.5 0 0012 2zm0 20a3.001 3.001 0 01-2.83-2h5.66A3.001 3.001 0 0112 22z"></path>
                </svg>
            </NavItem>
            <NavItem href="#" visibleMobile={false}>
                <svg style="width:1.625rem;height:100%" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"
                     fill="currentColor"
                     viewBox="0 0 24 24" aria-hidden="true" class="gnav-header-1xqhio eac13zx0">
                    <path d="M12 12c2.486 0 4.5-2.014 4.5-4.5S14.486 3 12 3a4.499 4.499 0 00-4.5 4.5C7.5 9.986 9.514 12 12 12zm0 2.25c-3.004 0-9 1.508-9 4.5v1.75a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1.75c0-2.992-5.996-4.5-9-4.5z"></path>
                </svg>
            </NavItem>
            <div class="divider hidden lg:block">
            </div>
            <NavItem href="#" isLight={true} visibleMobile={false}>
                Employers / Post Job
            </NavItem>
            <div class="dropdown m-0 p-0 dropdown-end lg:hidden">
                <label tabindex="0" class="btn btn-ghost">
                    <svg style="width:1.625rem;height:100%" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor"
                         viewBox="0 0 24 24" aria-hidden="true" class="gnav-header-1y9b6rk eac13zx0">
                        <path d="M3.5 6h17a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm17 5h-17a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0 5h-17a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"></path>
                    </svg>
                </label>
                <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-box w-52">
                    <NavItem href="/company_reviews">Company Reviews</NavItem>
                    <NavItem href="#">Accounts</NavItem>
                </ul>
            </div>
        </ul>
    </div>
</nav>

<style>
    .divider {
        box-sizing: border-box;
        min-width: 0;
        width: 0.0625rem;
        height: 1.5rem;
        background-color: #d4d2d0;
        margin: 0.75rem 0 0;
    }
</style>