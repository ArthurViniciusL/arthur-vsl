import { cn } from "@/lib/utils";

interface StackProps {
    stack: string;
}

export function StackStyle(stack: string): string {
    let LABEL_STYLE = 'bg-red-500';

    switch (stack) {

        case 'ai':
            LABEL_STYLE = 'bg-blue-400/20 text-blue-400';
            break;

        case 'html':
            LABEL_STYLE = 'bg-orange-400/20 text-orange-400 uppercase';
            break;

        case 'css':
            LABEL_STYLE = 'bg-blue-400/20 text-blue-400 uppercase';
            break;

        case 'react':
            LABEL_STYLE = 'bg-blue-400/20 text-blue-400';
            break;

        case 'next.js':
            LABEL_STYLE = 'bg-black/50 text-white border';
            break;

        case 'angular':
            LABEL_STYLE = 'bg-red-400/20 text-red-400';
            break;

        case 'vue.js':
            LABEL_STYLE = 'bg-green-400/20 text-green-400';
            break;

        case 'javascript':
            LABEL_STYLE = 'bg-yellow-400/20 text-yellow-400';
            break;

        case 'typescript':
            LABEL_STYLE = 'bg-blue-500/20 text-blue-500';
            break;

        case 'vite':
            LABEL_STYLE = 'bg-purple-400/20 text-purple-400';
            break;

        case 'tailwindcss':
            LABEL_STYLE = 'bg-teal-400/20 text-teal-400';
            break;

        case 'automation':
            LABEL_STYLE = 'bg-green-400/20 text-green-400';
            break;

        case 'stripe':
            LABEL_STYLE = 'bg-purple-400/20 text-purple-400';
            break;

        case 'backend':
            LABEL_STYLE = 'bg-green-500/20 text-green-500';
            break;

        case 'linux':
            LABEL_STYLE = 'bg-yellow-400/20 text-yellow-400';
            break;

        case 'shell':
            LABEL_STYLE = 'bg-green-300/20 text-green-400';
            break;

        case 'docker':
            LABEL_STYLE = 'bg-blue-400/20 text-blue-400';
            break;

        case 'c':
            LABEL_STYLE = 'bg-blue-400/20 text-blue-400';
            break;

        case 'python':
            LABEL_STYLE = 'bg-yellow-400/20 text-yellow-400';
            break;

        case 'java':
            LABEL_STYLE = 'bg-orange-400/20 text-orange-400';
            break;

        case 'jpa':
            LABEL_STYLE = 'bg-orange-300/20 text-orange-300 uppercase';
            break;

        case 'lombok':
            LABEL_STYLE = 'bg-red-400/20 text-red-400';
            break;

        case 'spring boot':
            LABEL_STYLE = 'bg-green-300/20 text-green-400';
            break;

        case 'rest api':
            LABEL_STYLE = 'bg-indigo-400/20 text-indigo-400';
            break;

        case 'database':
            LABEL_STYLE = 'bg-blue-400/20 text-blue-400';
            break;

        case 'sql':
            LABEL_STYLE = 'bg-blue-400/20 text-blue-400';
            break;

        case 'nosql':
            LABEL_STYLE = 'bg-rose-400/20 text-rose-400';
            break;

        case 'mongodb':
            LABEL_STYLE = 'bg-green-400/20 text-green-400';
            break;

        case 'markdown':
            LABEL_STYLE = 'bg-gray-400/20 text-gray-400';
            break;

        case 'swagger':
            LABEL_STYLE = 'bg-green-500/20 text-green-500';
            break;

        case 'actuator':
            LABEL_STYLE = 'bg-teal-400/20 text-teal-400';
            break;

        case 'postgresql':
            LABEL_STYLE = 'bg-blue-500/20 text-blue-500';
            break;

        case 'tanstack router':
            LABEL_STYLE = 'bg-lime-400/20 text-lime-400';
            break;

        case 'design system':
            LABEL_STYLE = 'bg-pink-400/20 text-pink-400';
            break;

        case 'cloud':
            LABEL_STYLE = 'bg-sky-400/20 text-sky-400';
            break;

        case 'automação':
            LABEL_STYLE = 'bg-green-400/20 text-green-400';
            break;

        case 'git':
            LABEL_STYLE = 'bg-orange-500/20 text-orange-500';
            break;

        case 'github':
            LABEL_STYLE = 'bg-black/50 text-white border';
            break;

        case 'json server':
            LABEL_STYLE = 'bg-amber-400/20 text-amber-400';
            break;

        case 'websocket':
            LABEL_STYLE = 'bg-cyan-400/20 text-cyan-400';
            break;

        case 'hibernate':
            LABEL_STYLE = 'bg-amber-600/20 text-amber-600';
            break;

        case 'design patterns':
            LABEL_STYLE = 'bg-violet-400/20 text-violet-400';
            break;

        case 'OS':
            LABEL_STYLE = 'bg-cyan-400/20 text-cyan-400';
            break;

        case 'threads':
            LABEL_STYLE = 'bg-purple-400/20 text-purple-400';
            break;

        default:
            break;
    }

    return LABEL_STYLE;
}

export default function Stack({ stack }: StackProps) {

    return (
        <>
            <span className={cn("select-none text-sm text-muted-foreground flex capitalize font-semibold w-fit h-fit mr-2 px-2.5 py-0.5 rounded-2xl", StackStyle(stack))}>
                {stack}
            </span>
        </>
    );
}