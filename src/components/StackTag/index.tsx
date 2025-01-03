
/* 
#shell
#linux
#git

python
node.js
java
#spring boot

#javascript
#typescript
#react.js
#next.js
angular
#css
#art css
tailwind css

#docker

postgreSQL
mySql
mongoDB
*/

interface StackTagProps {
    name: string
}

export function StackTag({ name }: StackTagProps) {

    const artCss = 'art:w:fit-content art:font-style:bold-02 art:border-radius:r-01 art:p-01'

    switch (name.toLocaleLowerCase()) {

        case 'shell':
            return (
                <span className={`${artCss} art:font-color:green-02 art:bg:green:20%`}>
                    {name}
                </span >
            );

        case 'linux':
            return (
                <span className={`${artCss} art:font-color:orange-03 art:bg:orange:20%`}>
                    {name}
                </span >
            );

        case 'git':
            return (
                <span className={`${artCss} art:font-color:orange-03 art:bg:orange:10%`}>
                    {name}
                </span >
            );

        case 'python':
            return (
                <span className={`${artCss} art:font-color:yellow-02 art:bg:yellow:10%`}>
                    {name}
                </span >
            );

        case 'spring boot':
            return (
                <span className={`${artCss} art:font-color:green-03 art:bg:green:30%`}>
                    {name}
                </span >
            );

        case 'next.js':
            return (
                <span className={`${artCss} art:font-color:black-02 art:bg:black:10%`}>
                    {name}
                </span >
            );

        case 'javascript':
            return (
                <span className={`${artCss} art:font-color:yellow-02 art:bg:yellow:20%`}>
                    {name}
                </span >
            );

        case 'typescript':
            return (
                <span className={`${artCss} art:font-color:blue-02 art:bg:blue:10%`}>
                    {name}
                </span >
            );

        case 'react.js':
            return (
                <span className={`${artCss} art:font-color:blue-02 art:bg:blue:10%`}>
                    {name}
                </span >
            );

        case 'css':
            return (
                <span className={`${artCss} art:font-color:blue-02 art:bg:blue:20%`}>
                    {name}
                </span >
            );

        case 'art css':
            return (
                <span className={`${artCss} art:font-color:purple-03 art:bg:purple:10%`}>
                    {name}
                </span >
            );

        case 'docker':
            return (
                <span className={`${artCss} art:font-color:blue-03 art:bg:blue:10%`}>
                    {name}
                </span >
            );

        default:
            return (
                <>
                    {name}
                </>
            );
    }
}