import React, { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/Axios";

interface IssuesTypes {
  id: number;
  html_url: string;
  title: string;
  created_at: string;
  body: string;
  number: number;
  comments: number;
  user: {
    login: string;
  };
}
interface ReposContextType {
  issues: IssuesTypes[];
  listRepos: (query?: string) => Promise<void>;
  issue: IssuesTypes;
  setIssue: (data: IssuesTypes) => void;
}

export const ReposContext = createContext({} as ReposContextType);

interface ResposProviderProps {
  children: ReactNode;
}

export function ReposProvider({ children }: ResposProviderProps) {
  const [issues, setRepos] = useState([] as IssuesTypes[]);
  const [issue, setIssue] = useState<IssuesTypes>({
    body: "",
    html_url: "",
    created_at: "",
    id: 0,
    number: 0,
    title: "",
    comments: 0,
    user: {
      login: "",
    },
  });

  async function listRepos(query?: string) {
    if (query) {
      const issues = await api.get("search/issues", {
        params: {
          q: `${query} repo:RivaldoMascarenhas/GitHub--Blog`,
        },
      });
      setRepos(issues.data.items);
    } else {
      const issues = await api.get(
        "repos/RivaldoMascarenhas/GitHub--Blog/issues"
      );
      setRepos(issues.data);
    }
  }

  useEffect(() => {
    listRepos();
  }, []);

  return (
    <ReposContext.Provider value={{ issues, listRepos, issue, setIssue }}>
      {children}
    </ReposContext.Provider>
  );
}
