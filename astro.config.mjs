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
        { label: "Health Tips", link: "health-tips/" },
        {
          label: "Code Editors",
          items: [
            { label: "Introduction", link: "code-editors/introduction/" },
            {
              label: "Code Editors",
              link: "code-editors/popular-code-editors/",
            },
            { label: "VSCode Extensions", link: "code-editors/extensions/" },
          ],
        },
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
                  link: "foundations/version-control/getting-started-with-git/",
                },
                {
                  label: "Working with Git Repositories",
                  link: "foundations/version-control/working-with-git-repositories/",
                },
                {
                  label: "Branching",
                  link: "foundations/version-control/branching/",
                },
                {
                  label: "Merging and Rebasing",
                  link: "foundations/version-control/merging-and-rebasing/",
                },
                {
                  label: "Collaborating with GitHub and GitLab",
                  link: "foundations/version-control/collaborating-with-github-and-gitlab/",
                },
                {
                  label: "Merge and Pull Requests",
                  link: "foundations/version-control/merge-and-pull-requests/",
                },
                {
                  label: "Git Cheat Sheet",
                  link: "foundations/version-control/git-cheat-sheet/",
                },
                {
                  label: "Troubleshooting and Resources",
                  link: "foundations/version-control/troubleshooting-and-resources/",
                },
                {
                  label: "Glossary",
                  link: "foundations/version-control/glossary/",
                },
              ],
            },
            {
              label: "Coding Standards",
              items: [
                {
                  label: "Naming Conventions",
                  link: "foundations/standards/naming-conventions/",
                },
                {
                  label: "Code Comments",
                  link: "foundations/standards/comments/",
                },
              ],
            },
            {
              label: "Software Development Principles",
              items: [
                {
                  label: "Introduction and Core Principles",
                  link: "foundations/principles/introduction-and-core-principles/",
                },
                {
                  label: "SOLID Principles",
                  link: "foundations/principles/solid-principles/",
                },
                {
                  label: "Coding Practices and Patterns",
                  link: "foundations/principles/coding-practices-and-patterns/",
                },
                {
                  label: "Advanced Concepts and Considerations",
                  link: "foundations/principles/advanced-concepts-and-considerations/",
                },
                {
                  label: "Resources",
                  link: "foundations/principles/resources/",
                },
                {
                  label: "Glossary",
                  link: "foundations/principles/glossary/",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
