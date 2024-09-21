# name: ci-nx

# on:
#   push:
#     branches:
#       - master


# jobs:
#   agents:
#     runs-on: ubuntu-latest
#     timeout-minutes: 5
#     strategy:
#         matrix:
#           agent: [1, 2]
#     steps:
#       - uses: actions/checkout@v4
#         with: 
#             fetch-depth: 0

#       - uses: actions/setup-node@v4
#         with:
#             node-version: '20'
#             cache: 'npm'
#             cache-dependency-path: |
#               **/package-lock.json

#       - run: npm install

#       - name: Start Nx Agent ${{ matrix.agent }}
#         run: npx nx-cloud start-agent

#   main:
#     runs-on: ubuntu-latest

#     steps:
#       - name: start nx cloud
#         run: npx nx-cloud start-ci-run \
#           --distribute-on="3 linux-medium-js" \
#           --stop-agents-after="e2e-ci"
     
#       - uses: actions/setup-node@v4
#         with:
#           node-version: 20
#           cache: 'npm'
      
#       - run: npm ci

#       # Setting the starting point for the comparison in affected command
#       - uses: nrwl/nx-set-shas@v4
#         with:
#             workflow-id: 'ci-nx.yml'

#       # Format check
#       - run: npx nx format:check

#       # Nx lint and e2e all projects
#       # - run: npx nx run-many -t lint e2e-ci -p app1-e2e


name: ci-nx

on:
  push:
    branches:
      - master

jobs:
  main:
    name: Nx Cloud - Main Job
    uses: nrwl/ci/.github/workflows/nx-cloud-main.yml@v0.13.0
    with:
      main-branch-name: master
      number-of-agents: 20
      install-commands: |
        pnpm install
      init-commands: |
        npx nx-cloud start-ci-run --agent-count=20
      parallel-commands-on-agents: |
        npx nx affected --target=lint --parallel=3
      
  agents:
    name: Nx Cloud - Agents
    uses: nrwl/ci/.github/workflows/nx-cloud-agents.yml@v0.13.0
    with:
      number-of-agents: 3
      install-commands: |
        pnpm install
        npx playwright install --with-deps