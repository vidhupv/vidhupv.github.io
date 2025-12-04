# How to Publish Content

Your website supports two types of content: **Writing (Blog)** and **Toys**. All content is managed via Markdown files in the `content/` directory.

## 1. Writing (Blog Posts)

To add a new blog post:
1.  Create a new `.md` file in `content/blog/`.
2.  Name the file with a slug (e.g., `my-new-post.md`).
3.  Add the following **Frontmatter** at the top of the file:

```markdown
---
title: "My New Post Title"
date: "2023-10-27"
tags: ["Design", "Life"]
toy: "Neural Net" # Optional: Link to a toy
---

Your blog post content goes here using standard Markdown.
```

## 2. Toys

To add a new toy project:
1.  Create a new `.md` file in `content/toys/`.
2.  Name the file (e.g., `rust-os.md`).
3.  Add the following **Frontmatter**:

```markdown
---
name: "Rust OS"
tech: "Rust, Assembly"
type: "System" # e.g., System, Web, Tool, Hardware
date: "2023-11-15" # Used for sorting
---

Details about the project, screenshots, and links to code.
```

## Summary of Fields

| Type | Required Fields | Optional Fields |
| :--- | :--- | :--- |
| **Blog** | `title`, `date` | `tags`, `toy` |
| **Toy** | `name`, `tech`, `type` | `date` |

Once you save the file, the website will automatically update to include the new content!
