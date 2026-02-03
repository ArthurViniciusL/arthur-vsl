import P from "@/components/typography/p";

export function Me() {
    return (
        <>
            <div className='flex flex-col gap-1.5'>
                <P className='text-2xl font-semibold'>
                    Arthur Lucena
                </P>
                <P className='text-sm border-zinc-300 dark:border-zinc-800'>
                    full-stack developer
                </P>
            </div>
        </>
    );
}