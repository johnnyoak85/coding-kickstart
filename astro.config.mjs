import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://johnnyoak85.github.io/astro-starlight",
  base: "/coding-kickstart",
  integrations: [
    starlight({
      title: "Coding Kickstart: Your Beginner's Guide to Building Cool Stuff",
      social: {
        github: "https://github.com/JohnnyOak85/",
      },
      sidebar: [
        { label: "Health Tips", link: "health_tips/" },
        { label: "Code Editors", link: "code_editors/" },
        { label: "VSCode Extensions", link: "extensions/" },
        {
          label: "Foundations of Software Development",
          items: [
            {
              label: "Version Control",
              items: [
                {
                  label: "Introduction to Version Control",
                  link: "foundations/version-control/introduction/",
                },
                {
                  label: "Getting Started with Git",
                  link: "foundations/version-control/getting_started_with_git/",
                },
                {
                  label: "Working with Git Repositories",
                  link: "foundations/version-control/working_with_git_repositories/",
                },
                {
                  label: "Branching",
                  link: "foundations/version-control/branching/",
                },
                {
                  label: "Merging and Rebasing",
                  link: "foundations/version-control/merging_and_rebasing/",
                },
                {
                  label: "Collaborating with GitHub and GitLab",
                  link: "foundations/version-control/collaborating_with_github_and_gitlab/",
                },
                {
                  label: "Merge and Pull Requests",
                  link: "foundations/version-control/merge_and_pull_requests/",
                },
                {
                  label: "Git Cheat Sheet",
                  link: "foundations/version-control/git_cheat_sheet/",
                },
                {
                  label: "Troubleshooting and Resources",
                  link: "foundations/version-control/troubleshooting_and_resources/",
                },
              ],
            },
            {
              label: "Software Development Principles",
              items: [
                {
                  label: "Introduction and Core Principles",
                  link: "foundations/principles/introduction_and_core_principles/",
                },
                {
                  label: "SOLID Principles",
                  link: "foundations/principles/solid_principles/",
                },
                {
                  label: "Coding Practices and Patterns",
                  link: "foundations/principles/coding_practices_and_patterns/",
                },
                {
                  label: "Advanced Concepts and Considerations",
                  link: "foundations/principles/advanced_concepts_and_considerations/",
                },
                {
                  label: "Resources",
                  link: "foundations/principles/resources/",
                },
              ],
            },
            {
              label: "Coding Standards",
              items: [
                {
                  label: "Naming Conventions",
                  link: "foundations/standards/naming_conventions/",
                },
              ],
            },
          ],
        },

        // {
        //   label: "Start",
        //   items: [
        //     { label: "Contributing", link: "/start/contributing/" },

        //     { label: "Relevant Links", link: "/start/links/" },
        //   ],
        // },
      ],
    }),
  ],
});
