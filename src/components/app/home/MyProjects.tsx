import { useMemo } from "react";

import Stack from "@/components/label/StackLabel";
import Div from "@/components/layout/div";
import H2 from "@/components/typography/h2";
import H3 from "@/components/typography/h3";
import P from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import { useGithub } from "@/utils/hooks/useGithub";
import { useTranslation } from "@/utils/hooks/useTranslation";
import { IcLink } from "@/utils/modules/icons";

export function MyProjects() {
    const { t } = useTranslation();
    const { data } = useGithub();

    const repositorys = useMemo(
        () => data.slice(0, 4),
        [data]
    );

    return (
        <>
            <H2>{t('app.home.subtitle.my_projects')}</H2>
            <Div direction="col">
                <ul className="w-full md:w-96 list-decimal flex flex-col gap-4">
                    {repositorys.map((repo) => (
                        <li className="w-full md:w-96 border-b pb-4 flex flex-col gap-4 p-4">
                            <Div direction="row" className="w-full items-center">
                                <H3>{repo.name.replace(/-/g, " ")}</H3>
                                <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer">
                                    <IcLink className="text-blue-500" size={18} />
                                </a>
                            </Div>
                            <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer">
                                <P description={true}>
                                    {
                                        repo.description
                                            ? t(repo.description)
                                            : t('app.home.my_projects.no_description')
                                    }
                                </P>
                            </a>
                            <Div direction="row" className="flex flex-wrap">
                                {[...repo.stacks].sort().map((stack) => (
                                    <Stack stack={stack} />
                                ))}
                            </Div>
                        </li>
                    ))}
                </ul>
                <Button variant="secondary" className="w-full md:w-fit">
                    {t('app.btn.home.view_all')}
                </Button>
            </Div >
            {/* <Div direction="col" className="h-[100] justify-end">
                    <img className="w-30" src={aside_path} alt="" />
                </Div> */}
        </>
    );
}