import axios, { type AxiosError } from "axios";
import { useEffect, useState } from "react";

const GITHUB_API = "https://api.github.com/users/arthurviniciusl/repos" as const;

interface GithubRepoFull {
    description: string | null;
    html_url: string;
    id: number;
    name: string;
}

export interface GithubRepo {
    readonly description: string | null;
    readonly id: number;
    readonly name: string;
    readonly url: string;
}

interface UseGithubResult {
    readonly data: readonly GithubRepo[];
    readonly isLoading: boolean;
}

type UseGithubState =
    | { readonly status: "idle" }
    | { readonly status: "loading" }
    | { readonly status: "success"; readonly repos: readonly GithubRepo[] }
    | { readonly status: "error"; readonly error: string };

export function useGithub(): UseGithubResult {
    const [state, setState] = useState<UseGithubState>({ status: "idle" });

    useEffect(() => {
        const controller = new AbortController();

        setState({ status: "loading" });

        axios
            .get<GithubRepoFull[]>(GITHUB_API, { signal: controller.signal })
            .then(({ data }) => {
                const repos: GithubRepo[] = data.map((repo) => ({
                    description: repo.description,
                    id: repo.id,
                    name: repo.name,
                    url: repo.html_url,
                }));
                setState({ status: "success", repos });
            })
            .catch((err: unknown) => {
                if (axios.isCancel(err)) {
                    return;
                }
                const message =
                    err instanceof Error ? err.message : "Unknown error";
                const status = (err as AxiosError).response?.status;
                setState({
                    status: "error",
                    error: status ? `HTTP ${status}: ${message}` : message,
                });
            });

        return () => controller.abort();
    }, []);

    if (state.status === "success") {
        return { data: state.repos, isLoading: false };
    }

    return {
        data: [],
        isLoading: state.status === "loading" || state.status === "idle",
    };
}
