import P from "@/components/typography/p";

export function Me() {
    return (
        <>
            <div className='flex flex-col gap-1.5'>
                <h1 className='text-2xl font-semibold'>
                    Arthur Lucena
                </h1>
                <P className='text-sm text-zinc-500'>
                    full-stack developer
                </P>
            </div>
        </>
    );
}