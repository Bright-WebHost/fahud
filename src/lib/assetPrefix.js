const isGitHubPages = process.env.GITHUB_PAGES === "true";
export const assetPrefix = isGitHubPages ? "/Fahud" : "";
