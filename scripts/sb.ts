import { $ } from "zx";

await $`ls -la`;

const flags = ["--oneline", "--decorate", "--color"];
await $`git log ${flags}`;
