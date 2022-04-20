<script>
    let limit = 20;

    let activeJobData = {
        loading: false,
        job: undefined
    }

    async function getJobs() {
        const url = `https://remotive.com/api/remote-jobs?limit=${limit}`;
        const res = await fetch(url)

        if (res.ok) {
            activeJobData.loading = true
            let jobs = await res.json()
            jobs = jobs.jobs;
            activeJobData = {
                loading: false,
                job: jobs[0]
            };
            return jobs;
        } else {
            const err = (await res).text()
            console.log(err)
            throw new Error("Unable to fetch jobs");
        }
    }

    let promise = getJobs()

    const changeActiveJob = (job)  => {
        activeJobData.loading = false
        activeJobData.job = job
        activeJobData.loading = true
    }
</script>

<div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
    <!-- Job List -->
    <div class="flex-1 no-scrollbar h-screen overflow-y-auto">
        {#await promise}
            <div class="card bg-base-100 border my-5">
                <div class="card-body animate-pulse">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 w-1/2 bg-slate-200 rounded"></div>
                    <div class="h-2 w-1/2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
            <div class="card bg-base-100 border my-5">
                <div class="card-body animate-pulse">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 w-1/2 bg-slate-200 rounded"></div>
                    <div class="h-2 w-1/2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
            <div class="card bg-base-100 border mx-auto my-5">
                <div class="card-body animate-pulse">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 w-1/2 bg-slate-200 rounded"></div>
                    <div class="h-2 w-1/2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
            <div class="card bg-base-100 border mx-auto my-5">
                <div class="card-body animate-pulse">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 w-1/2 bg-slate-200 rounded"></div>
                    <div class="h-2 w-1/2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
        {:then jobs}
            {#each jobs as job (job.id)}
                <div class="card mx-2 bg-base-100 border mx-auto my-5 cursor-pointer" on:click={() => changeActiveJob(job)}>

                    <div class="card-body ">
                        <h2 class="card-title">{job.title}</h2>
                        <p class="font-light p-0 m-0 text-lg">
                            {job.company_name} <br>
                            <span class="text-sm">Job Type: {job.job_type === "full_time" ? "Full Time" : "Part Time"}</span>
                        </p>

                    </div>
                </div>
            {/each}
        {:catch error}
            <p class="text-error">{error.message}</p>
        {/await}
    </div>
    <!-- Job Details -->
    <div class="my-5 mx-2 relative  h-screen overflow-hidden border border-base h-screen rounded-md">
            {#if activeJobData.job}
        <div class="py-5 shadow-lg py-10 p-5 w-full">
                <h2 class="text-lg font-bold">{activeJobData.job.title}</h2>
                <h3 class="text-blue-700">{activeJobData.job.company_name}</h3>
                <h3 class="font-light">{activeJobData.job.candidate_required_location}</h3>
                <a href={activeJobData.job.url} class="btn btn-primary btn-sm rounded mt-2">Apply Now</a>
        </div>
                <div class="prose flex-1 p-10 h-screen overflow-y-auto">
                    {@html activeJobData.job.description}
                </div>
            {/if}
    </div>
</div>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>