## Monorepos

### Introduction

- Mono + Repo = A single repository that holds all your frontend, backend, and devops code.
- Monorepos make sense if you have some sort of code sharing that is happening.
- If we didn't have monorepo
  ![alt text](img/image.png)
- Monorepo framework Eg. Lerna, nx, yarn/npm workspaces, Turborepo (not exactly a monorepo framework)
  ![alt text](img/image-1.png)
- Build System Orchestration
  ![alt text](img/image-2.png)
- Turborepo caches output and our net build time goes down
  ![alt text](img/image-3.png)
- packages folder contains helper modules which can be imported directly rather than importing as a node module.
- Turborepo is something which gives you remote caching, even if no change happened in the backend rebuild happens, whiich makes deplouyment slower. through this service they are thinking to earn money
  ![alt text](img/image-4.png)
- `tsup/esbuild`
- ![alt text](img/image-5.png)
- ![alt text](img/image-6.png)
