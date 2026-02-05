import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface MapContentProps<T> {
    direction: 'col' | 'row';
    content: T[];
    keys: (keyof T)[];
}

// Ainda não funcional para icones
// <MapContent direction='col' content={content} keys={['icon', 'label']} />

export function MapContent<T>({ direction, content, keys }: MapContentProps<T>) {
    return (
        <>
            <ul className={cn("flex", direction === 'col' ? 'flex-col' : 'flex-row')}>
                {
                    content.map((item, index) => (
                        <li key={index}>
                            <Button variant={'app'}>
                                {keys.map((key) => (
                                    <span key={String(key)} className="mr-2 last:mr-0">
                                        {String(item[key])}
                                    </span>
                                ))}
                            </Button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}