export default function ShopLoading() {
    return (
        <div className='lg:flex lg:px-32 px-4 my-20 gap-6'>
            <div className='hidden lg:block w-72'>
                <div className='animate-pulse bg-muted/60 rounded-2xl h-[420px]' />
            </div>
            <div className='flex-1'>
                <div className='animate-pulse h-12 bg-muted/60 rounded-2xl mb-8' />
                <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-4'>
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx} className='animate-pulse'>
                            <div className='bg-muted/60 h-56 rounded-2xl' />
                            <div className='h-4 bg-muted/60 rounded mt-3 w-3/4' />
                            <div className='h-3 bg-muted/60 rounded mt-2 w-1/2' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
