export default function Loading() {
    return (
        <div className='min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4'>
            <div className='relative w-14 h-14'>
                <span className='absolute inset-0 rounded-full border-2 border-border/60' />
                <span className='absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin' />
            </div>
            <p className='text-sm text-muted-foreground tracking-[0.25em] uppercase'>Loading</p>
        </div>
    )
}
