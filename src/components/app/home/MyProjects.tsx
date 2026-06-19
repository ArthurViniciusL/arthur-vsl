import { useMemo } from "react";

import Div from "@/components/layout/div";
import H2 from "@/components/typography/h2";
import { Button } from "@/components/ui/button";
import { useGithub } from "@/utils/hooks/useGithub";
import { useTranslation } from "@/utils/hooks/useTranslation";

import aside_path from "/assets/images/aside_image.png";

export function MyProjects() {
    const { t } = useTranslation();
    const { data, isLoading } = useGithub();

    const repositorys = useMemo(() => data.slice(0, 5), [data]);

    if (isLoading) {
        return (
            <>
                <H2>{t('app.home.subtitle.my_projects')}</H2>
            </>
        );
    }

    return (
        <>
            <H2>{t('app.home.subtitle.my_projects')}</H2>
            <Div direction="col" className="w-full md:w-90">
                {repositorys.map((repo) => (
                    <Div direction="col" className="bg-red-700 w-full md:w-90">
                        <p>{repo.id}</p>
                        <p>{repo.name}</p>
                        <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer">
                            <p>
                                {
                                    repo.description
                                    ?? t('app.home.my_projects.no_description')
                                }
                            </p>
                        </a>
                    </Div>
                ))}
                <Button variant="secondary" className="w-fit">
                    {t('app.btn.home.view_all')}
                </Button>
            </Div>
            {/* <Div direction="col" className="h-[100] justify-end">
                    <img className="w-30" src={aside_path} alt="" />
                </Div> */}
        </>
    );
}