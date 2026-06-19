import Div from "@/components/layout/div";
import H2 from "@/components/typography/h2";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useGithub } from "@/utils/hooks/useGithub";
import { useTranslation } from "@/utils/hooks/useTranslation";
import { ArrowUpRight } from "lucide-react";

export function MyProjects() {
    const { t } = useTranslation();
    const { data, isLoading } = useGithub();

    if (isLoading) {
        return (
            <>
                <H2>{t('app.home.subtitle.my_projects')}</H2>
            </>
        )
    }

    return (
        <>
            <H2>{t('app.home.subtitle.my_projects')}</H2>
            <Div direction="col" className="w-full md:w-90">
                {data.slice(0,4).map((repo) => (
                    <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer">
                        <Card className="h-30 transition-shadow hover:shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    {repo.name}
                                    <ArrowUpRight className="size-4 text-muted-foreground" />
                                </CardTitle>
                                <CardDescription>
                                    {repo.description ?? t('app.home.my_projects.no_description')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent />
                        </Card>
                    </a>
                ))}
                <Button variant="outline" className="w-fit">
                    {t('app.btn.home.view_all')}
                </Button>
            </Div>
        </>
    )
}