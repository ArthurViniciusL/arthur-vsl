import projects from "@/utils/api/db";

interface ProjectFull {
    description: string | null;
    github: string;
    id: number;
    name: string;
    stacks: readonly string[];
}

export interface GithubRepo {
    readonly description: string | null;
    readonly id: number;
    readonly name: string;
    readonly stacks: readonly string[];
    readonly url: string;
}

interface UseGithubResult {
    readonly data: readonly GithubRepo[];
    readonly isLoading: boolean;
}

export function useGithub(): UseGithubResult {
    const repos: GithubRepo[] = (projects as readonly ProjectFull[]).map((repo) => ({
        description: repo.description,
        id: repo.id,
        name: repo.name,
        stacks: repo.stacks,
        url: repo.github,
    }));

    return { data: repos, isLoading: false };
}
